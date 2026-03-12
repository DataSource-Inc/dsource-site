'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Customer } from '@/data/customers';

interface CustomerCyclerProps {
  customers: Customer[];
}

export default function CustomerCycler({ customers }: CustomerCyclerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const hasCrossedMidpoint = useRef(false);
  const [rotateY, setRotateY] = useState(0);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flipTransition = {
    type: 'tween' as const,
    duration: 0.5,
    ease: 'easeInOut' as const,
  };

  const triggerFlip = useCallback(
    (direction: 'next' | 'prev', newIndex: number) => {
      if (isFlipping) return;
      setIsFlipping(true);
      setFlipDirection(direction);
      setTargetIndex(newIndex);
      hasCrossedMidpoint.current = false;
      setRotateY(direction === 'next' ? -180 : 180);
    },
    [isFlipping],
  );

  const goToNext = useCallback(() => {
    const newIndex = (displayedIndex + 1) % customers.length;
    triggerFlip('next', newIndex);
  }, [customers.length, displayedIndex, triggerFlip]);

  const goToPrev = useCallback(() => {
    const newIndex = (displayedIndex - 1 + customers.length) % customers.length;
    triggerFlip('prev', newIndex);
  }, [customers.length, displayedIndex, triggerFlip]);

  useEffect(() => {
    if (isPaused || isFlipping) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isFlipping, goToNext]);

  const pauseAutoAdvance = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
  }, []);

  const handleDotClick = (index: number) => {
    if (isFlipping || index === displayedIndex) return;
    const direction = index > displayedIndex ? 'next' : 'prev';
    triggerFlip(direction, index);
    pauseAutoAdvance();
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (isFlipping) return;
    if (direction === 'prev') goToPrev();
    else goToNext();
    pauseAutoAdvance();
  };

  // Only update counter/dots at midpoint. Do NOT swap displayedIndex here —
  // the turning page visually carries the content via its back face.
  const handleAnimationUpdate = useCallback(
    (latest: { rotateY?: number }) => {
      if (hasCrossedMidpoint.current) return;
      const r = latest.rotateY ?? 0;
      const pastMidpoint = flipDirection === 'next' ? r <= -90 : r >= 90;
      if (pastMidpoint) {
        hasCrossedMidpoint.current = true;
        setActiveIndex(targetIndex);
      }
    },
    [flipDirection, targetIndex],
  );

  // Only swap base layer content after the page has fully landed.
  const handleAnimationComplete = useCallback(() => {
    setDisplayedIndex(targetIndex);
    setActiveIndex(targetIndex);
    setRotateY(0);
    setIsFlipping(false);
  }, [targetIndex]);

  const current = customers[displayedIndex];
  const target = customers[targetIndex];

  return (
    <div className="w-full flex flex-col">
      {/* Book area */}
      <div
        className="w-full h-[620px] max-md:h-auto max-md:min-h-[400px] flex max-md:flex-col relative"
        style={{ perspective: 2000 }}
      >
        {/* ===== LEFT PAGE (static base) ===== */}
        <div className="w-1/2 max-md:w-full max-md:min-h-[300px] bg-light relative flex flex-col p-10 max-md:p-6">
          <div className="h-[120px] max-md:h-[80px] flex items-start shrink-0">
            <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
              {current.name} ({current.abbreviation})
            </h1>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
              <Image
                src={current.logo}
                alt={`${current.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* ===== RIGHT PAGE (static base) ===== */}
        <div className="w-1/2 max-md:w-full max-md:min-h-[300px] bg-beige relative">
          <div className="absolute inset-0 p-10 max-md:p-6 overflow-y-auto">
            <h2 className="text-h5 text-primary-80 mb-6">About</h2>
            <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
              {current.about}
            </div>
          </div>
        </div>

        {/* ===== FORWARD: turning page at BOOK level (spans both halves) ===== */}
        {/* Starts covering the right half, hinges at the spine (left edge = center of book),
            rotates to -180 to lay flat on the left half. Not clipped by either panel. */}
        {isFlipping && flipDirection === 'next' && (
          <>
            {/* Underneath layer: target about on right side */}
            <div className="absolute top-0 right-0 w-1/2 h-full z-[1] bg-beige p-10 max-md:p-6 overflow-y-auto">
              <h2 className="text-h5 text-primary-80 mb-6">About</h2>
              <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                {target.about}
              </div>
            </div>

            {/* The turning page — positioned on right half, hinges on its left edge (the spine) */}
            <motion.div
              className="absolute top-0 right-0 w-1/2 h-full z-[3]"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
              }}
              animate={{ rotateY }}
              transition={flipTransition}
              onUpdate={handleAnimationUpdate}
              onAnimationComplete={handleAnimationComplete}
            >
              {/* Front face: current about */}
              <div
                className="absolute inset-0 bg-beige p-10 max-md:p-6 overflow-y-auto"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h2 className="text-h5 text-primary-80 mb-6">About</h2>
                <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                  {current.about}
                </div>
              </div>
              {/* Back face: target logo (lands on left side) */}
              <div
                className="absolute inset-0 bg-light flex flex-col p-10 max-md:p-6"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="h-[120px] max-md:h-[80px] flex items-start shrink-0">
                  <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
                    {target.name} ({target.abbreviation})
                  </h1>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
                    <Image
                      src={target.logo}
                      alt={`${target.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* ===== REVERSE: turning page at BOOK level (spans both halves) ===== */}
        {/* Starts covering the left half, hinges at the spine (right edge = center of book),
            rotates to 180 to lay flat on the right half. */}
        {isFlipping && flipDirection === 'prev' && (
          <>
            {/* Underneath layer: target logo on left side */}
            <div className="absolute top-0 left-0 w-1/2 h-full z-[1] bg-light flex flex-col p-10 max-md:p-6">
              <div className="h-[120px] max-md:h-[80px] flex items-start shrink-0">
                <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
                  {target.name} ({target.abbreviation})
                </h1>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
                  <Image
                    src={target.logo}
                    alt={`${target.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* The turning page — positioned on left half, hinges on its right edge (the spine) */}
            <motion.div
              className="absolute top-0 left-0 w-1/2 h-full z-[3]"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'right center',
              }}
              animate={{ rotateY }}
              transition={flipTransition}
              onUpdate={handleAnimationUpdate}
              onAnimationComplete={handleAnimationComplete}
            >
              {/* Front face: current logo */}
              <div
                className="absolute inset-0 bg-light flex flex-col p-10 max-md:p-6"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="h-[120px] max-md:h-[80px] flex items-start shrink-0">
                  <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
                    {current.name} ({current.abbreviation})
                  </h1>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
                    <Image
                      src={current.logo}
                      alt={`${current.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Back face: target about (lands on right side) */}
              <div
                className="absolute inset-0 bg-beige p-10 max-md:p-6 overflow-y-auto"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <h2 className="text-h5 text-primary-80 mb-6">About</h2>
                <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                  {target.about}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between px-10 max-md:px-6 py-6">
        <span className="text-body-1 text-gray-100">
          {activeIndex + 1}/{customers.length}
        </span>

        <div className="flex gap-2 flex-1 mx-6">
          {customers.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to customer ${index + 1}`}
              className={`h-[4px] flex-1 rounded-sm transition-colors duration-300 cursor-pointer ${
                index === activeIndex ? 'bg-primary-80' : 'bg-gray-40'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleArrowClick('prev')}
            aria-label="Previous customer"
            disabled={isFlipping}
            className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-gray-40 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-60 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => handleArrowClick('next')}
            aria-label="Next customer"
            disabled={isFlipping}
            className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-primary-80 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
