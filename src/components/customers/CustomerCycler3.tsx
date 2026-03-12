'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Customer } from '@/data/customers';

interface CustomerCyclerProps {
  customers: Customer[];
}

/** Renders the logo content for a customer */
function LogoContent({ customer }: { customer: Customer }) {
  return (
    <>
      <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
        {customer.name} ({customer.abbreviation})
      </h1>
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
          <Image
            src={customer.logo}
            alt={`${customer.name} logo`}
            width={380}
            height={380}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </div>
    </>
  );
}

/** Renders the about content for a customer */
function AboutContent({ customer }: { customer: Customer }) {
  return (
    <>
      <h2 className="text-h5 text-primary-80 mb-6">About</h2>
      <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
        {customer.about}
      </div>
    </>
  );
}

export default function CustomerCycler({ customers }: CustomerCyclerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'reverse'>('forward');
  const [flipKey, setFlipKey] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const isPausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Track if flipping was triggered, to avoid race with setIsFlipping
  const isFlippingRef = useRef(false);

  const FLIP_DURATION = 0.65;

  const triggerFlip = useCallback(
    (newIndex: number, direction: 'forward' | 'reverse') => {
      if (isFlippingRef.current) return;
      isFlippingRef.current = true;
      setTargetIndex(newIndex);
      setFlipDirection(direction);
      setIsFlipping(true);
      setFlipKey((k) => k + 1);
    },
    []
  );

  const goToNext = useCallback(() => {
    const next = (activeIndex + 1) % customers.length;
    triggerFlip(next, 'forward');
  }, [activeIndex, customers.length, triggerFlip]);

  const goToPrev = useCallback(() => {
    const prev = (activeIndex - 1 + customers.length) % customers.length;
    triggerFlip(prev, 'reverse');
  }, [activeIndex, customers.length, triggerFlip]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index === activeIndex || isFlippingRef.current) return;
      const direction = index > activeIndex ? 'forward' : 'reverse';
      triggerFlip(index, direction);
    },
    [activeIndex, triggerFlip]
  );

  // Auto-cycle
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current && !isFlippingRef.current) {
        const next = (activeIndex + 1) % customers.length;
        triggerFlip(next, 'forward');
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex, customers.length, triggerFlip]);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
  }, []);

  const handleDotClick = (index: number) => {
    goToIndex(index);
    pauseAutoPlay();
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') goToPrev();
    else goToNext();
    pauseAutoPlay();
  };

  const onFlipComplete = () => {
    setActiveIndex(targetIndex);
    setIsFlipping(false);
    isFlippingRef.current = false;
  };

  const current = customers[activeIndex];
  const target = customers[targetIndex];
  const displayIndex = isFlipping ? targetIndex : activeIndex;

  return (
    <div className="w-full h-[720px] max-md:h-auto max-md:min-h-[500px] flex max-md:flex-col">
      {/* Left half - Logo page with navigation */}
      <div className="w-1/2 max-md:w-full max-md:min-h-[350px] relative flex flex-col justify-between p-10 max-md:p-6">
        {/* Logo area with page-turn animation */}
        <div className="flex-1 flex flex-col relative" style={{ perspective: 1200 }}>
          {/* Static underneath: for reverse turns, show target logo */}
          {isFlipping && flipDirection === 'reverse' && (
            <div className="absolute inset-0 z-0 flex flex-col">
              <LogoContent customer={target} />
            </div>
          )}

          {/* Current logo (static base layer) */}
          <div className="absolute inset-0 z-10 flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
            <LogoContent customer={current} />
          </div>

          {/* Turning page for REVERSE: left page swings right around right edge */}
          <AnimatePresence>
            {isFlipping && flipDirection === 'reverse' && (
              <motion.div
                key={`left-flip-${flipKey}`}
                className="absolute inset-0 z-20"
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'right center',
                }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                transition={{ duration: FLIP_DURATION, ease: 'easeInOut' }}
                onAnimationComplete={onFlipComplete}
              >
                {/* Front face: current logo */}
                <div
                  className="absolute inset-0 flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <LogoContent customer={current} />
                </div>
                {/* Back face: target about (mirrored) */}
                <div
                  className="absolute inset-0 bg-beige p-10 max-md:p-6 overflow-y-auto"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <AboutContent customer={target} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between relative z-30">
          <span className="text-body-1 text-gray-100">
            {displayIndex + 1}/{customers.length}
          </span>

          <div className="flex gap-2 flex-1 mx-6">
            {customers.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                disabled={isFlipping}
                aria-label={`Go to customer ${index + 1}`}
                className={`h-[4px] flex-1 rounded-sm transition-colors duration-300 cursor-pointer ${
                  index === displayIndex ? 'bg-primary-80' : 'bg-gray-40'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleArrowClick('prev')}
              disabled={isFlipping}
              aria-label="Previous customer"
              className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-gray-40 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-60 disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => handleArrowClick('next')}
              disabled={isFlipping}
              aria-label="Next customer"
              className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-primary-80 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary-100 disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right half - About page with page-turn animation */}
      <div
        className="w-1/2 max-md:w-full bg-beige p-10 max-md:p-6 overflow-y-auto relative"
        style={{ perspective: 1200 }}
      >
        {/* Static underneath: for forward turns, show target about */}
        {isFlipping && flipDirection === 'forward' && (
          <div className="absolute inset-0 z-0 bg-beige p-10 max-md:p-6 overflow-y-auto">
            <AboutContent customer={target} />
          </div>
        )}

        {/* Current about (static base layer) */}
        <div
          className="relative z-10"
          style={{
            backfaceVisibility: 'hidden',
            ...(isFlipping && flipDirection === 'forward'
              ? { position: 'absolute' as const, inset: 0, padding: 'inherit' }
              : {}),
          }}
        >
          <AboutContent customer={current} />
        </div>

        {/* Turning page for FORWARD: right page swings left around left edge */}
        <AnimatePresence>
          {isFlipping && flipDirection === 'forward' && (
            <motion.div
              key={`right-flip-${flipKey}`}
              className="absolute inset-0 z-20"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
              }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              transition={{ duration: FLIP_DURATION, ease: 'easeInOut' }}
              onAnimationComplete={onFlipComplete}
            >
              {/* Front face: current about */}
              <div
                className="absolute inset-0 bg-beige p-10 max-md:p-6 overflow-y-auto"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <AboutContent customer={current} />
              </div>
              {/* Back face: target logo (mirrored) */}
              <div
                className="absolute inset-0 flex flex-col p-10 max-md:p-6"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <LogoContent customer={target} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
