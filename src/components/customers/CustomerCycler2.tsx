'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Customer } from '@/data/customers';

interface CustomerCyclerProps {
  customers: Customer[];
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}

export default function CustomerCycler({ customers }: CustomerCyclerProps) {
  const isMobile = useIsMobile();

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

  const goToIndex = useCallback(
    (newIndex: number) => {
      setDisplayedIndex(newIndex);
      setActiveIndex(newIndex);
      setTargetIndex(newIndex);
    },
    [],
  );

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
    if (isMobile) {
      goToIndex(newIndex);
    } else {
      triggerFlip('next', newIndex);
    }
  }, [customers.length, displayedIndex, isMobile, goToIndex, triggerFlip]);

  const goToPrev = useCallback(() => {
    const newIndex = (displayedIndex - 1 + customers.length) % customers.length;
    if (isMobile) {
      goToIndex(newIndex);
    } else {
      triggerFlip('prev', newIndex);
    }
  }, [customers.length, displayedIndex, isMobile, goToIndex, triggerFlip]);

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
    if (index === displayedIndex) return;
    if (isMobile) {
      goToIndex(index);
    } else {
      if (isFlipping) return;
      const direction = index > displayedIndex ? 'next' : 'prev';
      triggerFlip(direction, index);
    }
    pauseAutoAdvance();
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (!isMobile && isFlipping) return;
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

  // Navigation controls (shared between mobile and desktop)
  const navigationControls = (
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
          disabled={!isMobile && isFlipping}
          className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-gray-40 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-60 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => handleArrowClick('next')}
          aria-label="Next customer"
          disabled={!isMobile && isFlipping}
          className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-primary-80 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );

  // Mobile: simple fade transition, no book flip
  if (isMobile) {
    return (
      <div className="w-full flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={displayedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo section */}
            <div className="bg-light p-6">
              <h1 className="text-h4 text-primary-80 tracking-[-1px] mb-6">
                {current.name} ({current.abbreviation})
              </h1>
              <div className="flex items-center justify-center">
                <div className="relative w-[200px] h-[200px]">
                  <Image
                    src={current.logo}
                    alt={`${current.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* About section */}
            <div className="bg-beige p-6">
              <h2 className="text-h5 text-primary-80 mb-4">About</h2>
              <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                {current.about}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {navigationControls}
      </div>
    );
  }

  // Desktop: book-flip animation
  return (
    <div className="w-full flex flex-col">
      {/* Book area */}
      <div
        className="w-full h-[620px] flex relative"
        style={{ perspective: 2000 }}
      >
        {/* ===== LEFT PAGE (static base) ===== */}
        <div className="w-1/2 bg-light relative flex flex-col p-10">
          <div className="h-[120px] flex items-start shrink-0">
            <h1 className="text-h3 text-primary-80 tracking-[-1px] max-w-[440px]">
              {current.name} ({current.abbreviation})
            </h1>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[360px] h-[360px]">
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
        <div className="w-1/2 bg-beige relative">
          <div className="absolute inset-0 p-10 overflow-y-auto">
            <h2 className="text-h5 text-primary-80 mb-6">About</h2>
            <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
              {current.about}
            </div>
          </div>
        </div>

        {/* ===== FORWARD: turning page at BOOK level (spans both halves) ===== */}
        {isFlipping && flipDirection === 'next' && (
          <>
            {/* Underneath layer: target about on right side */}
            <div className="absolute top-0 right-0 w-1/2 h-full z-[1] bg-beige p-10 overflow-y-auto">
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
                className="absolute inset-0 bg-beige p-10 overflow-y-auto"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h2 className="text-h5 text-primary-80 mb-6">About</h2>
                <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                  {current.about}
                </div>
              </div>
              {/* Back face: target logo (lands on left side) */}
              <div
                className="absolute inset-0 bg-light flex flex-col p-10"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="h-[120px] flex items-start shrink-0">
                  <h1 className="text-h3 text-primary-80 tracking-[-1px] max-w-[440px]">
                    {target.name} ({target.abbreviation})
                  </h1>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-[360px] h-[360px]">
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
        {isFlipping && flipDirection === 'prev' && (
          <>
            {/* Underneath layer: target logo on left side */}
            <div className="absolute top-0 left-0 w-1/2 h-full z-[1] bg-light flex flex-col p-10">
              <div className="h-[120px] flex items-start shrink-0">
                <h1 className="text-h3 text-primary-80 tracking-[-1px] max-w-[440px]">
                  {target.name} ({target.abbreviation})
                </h1>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-[360px] h-[360px]">
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
                className="absolute inset-0 bg-light flex flex-col p-10"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="h-[120px] flex items-start shrink-0">
                  <h1 className="text-h3 text-primary-80 tracking-[-1px] max-w-[440px]">
                    {current.name} ({current.abbreviation})
                  </h1>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-[360px] h-[360px]">
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
                className="absolute inset-0 bg-beige p-10 overflow-y-auto"
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

      {navigationControls}
    </div>
  );
}
