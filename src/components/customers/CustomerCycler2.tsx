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
    duration: 0.8,
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

  const handleAnimationUpdate = useCallback(
    (latest: { rotateY?: number }) => {
      if (hasCrossedMidpoint.current) return;
      const r = latest.rotateY ?? 0;
      const pastMidpoint = flipDirection === 'next' ? r <= -90 : r >= 90;
      if (pastMidpoint) {
        hasCrossedMidpoint.current = true;
        setDisplayedIndex(targetIndex);
        setActiveIndex(targetIndex);
      }
    },
    [flipDirection, targetIndex],
  );

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
        <div className="w-1/2 max-md:w-full max-md:min-h-[300px] bg-light relative flex flex-col p-10 max-md:p-6 overflow-hidden">
          {/* Static left content - shown normally, swaps at midpoint via displayedIndex */}
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

          {/* REVERSE: turning page overlays the ENTIRE left panel */}
          {isFlipping && flipDirection === 'prev' && (
            <>
              {/* Underneath: target logo (revealed as page lifts) */}
              <div className="absolute inset-0 z-[1] bg-light flex flex-col p-10 max-md:p-6">
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

              {/* The turning page - full panel, hinged on right edge (the spine) */}
              <motion.div
                className="absolute inset-0 z-[2]"
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'right center',
                }}
                animate={{ rotateY }}
                transition={flipTransition}
                onUpdate={handleAnimationUpdate}
                onAnimationComplete={handleAnimationComplete}
              >
                {/* Front face: current logo (full page with bg) */}
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
                {/* Back face: target about (what you see when page lands on right) */}
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

        {/* ===== RIGHT PAGE (static base) ===== */}
        <div className="w-1/2 max-md:w-full max-md:min-h-[300px] bg-beige relative overflow-hidden">
          {/* Static right content */}
          <div className="absolute inset-0 p-10 max-md:p-6 overflow-y-auto">
            <h2 className="text-h5 text-primary-80 mb-6">About</h2>
            <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
              {current.about}
            </div>
          </div>

          {/* FORWARD: turning page overlays the ENTIRE right panel */}
          {isFlipping && flipDirection === 'next' && (
            <>
              {/* Underneath: target about (revealed as page lifts) */}
              <div className="absolute inset-0 z-[1] bg-beige p-10 max-md:p-6 overflow-y-auto">
                <h2 className="text-h5 text-primary-80 mb-6">About</h2>
                <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                  {target.about}
                </div>
              </div>

              {/* The turning page - full panel, hinged on left edge (the spine) */}
              <motion.div
                className="absolute inset-0 z-[2]"
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'left center',
                }}
                animate={{ rotateY }}
                transition={flipTransition}
                onUpdate={handleAnimationUpdate}
                onAnimationComplete={handleAnimationComplete}
              >
                {/* Front face: current about (full page with bg) */}
                <div
                  className="absolute inset-0 bg-beige p-10 max-md:p-6 overflow-y-auto"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <h2 className="text-h5 text-primary-80 mb-6">About</h2>
                  <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                    {current.about}
                  </div>
                </div>
                {/* Back face: target logo (what you see when page lands on left) */}
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
        </div>
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
