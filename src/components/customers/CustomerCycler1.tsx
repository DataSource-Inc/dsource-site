'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Customer } from '@/data/customers';

interface CustomerCyclerProps {
  customers: Customer[];
}

type FlipDirection = 'next' | 'prev';

export default function CustomerCycler({ customers }: CustomerCyclerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  // What's currently visible on each page (swapped at midpoint)
  const [displayedLogo, setDisplayedLogo] = useState(0);
  const [displayedAbout, setDisplayedAbout] = useState(0);

  // Flip state
  const [flipTarget, setFlipTarget] = useState<number | null>(null);
  const [flipDirection, setFlipDirection] = useState<FlipDirection>('next');

  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Start a flip ────────────────────────────────────────────────────
  const flipTo = useCallback(
    (nextIndex: number, direction: FlipDirection) => {
      if (isFlipping || nextIndex === activeIndex) return;
      setIsFlipping(true);
      setFlipTarget(nextIndex);
      setFlipDirection(direction);
      setActiveIndex(nextIndex);
    },
    [isFlipping, activeIndex],
  );

  const goToNext = useCallback(() => {
    const next = (activeIndex + 1) % customers.length;
    flipTo(next, 'next');
  }, [activeIndex, customers.length, flipTo]);

  const goToPrev = useCallback(() => {
    const prev = (activeIndex - 1 + customers.length) % customers.length;
    flipTo(prev, 'prev');
  }, [activeIndex, customers.length, flipTo]);

  // ── Auto-cycle ──────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || isFlipping) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isFlipping, goToNext]);

  // ── Manual navigation pause ─────────────────────────────────────────
  const pauseAutoCycle = useCallback(() => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), 10000);
  }, []);

  const handleDotClick = (index: number) => {
    if (isFlipping || index === activeIndex) return;
    const direction = index > activeIndex ? 'next' : 'prev';
    flipTo(index, direction);
    pauseAutoCycle();
  };

  const handleArrowClick = (direction: FlipDirection) => {
    if (isFlipping) return;
    if (direction === 'prev') goToPrev();
    else goToNext();
    pauseAutoCycle();
  };

  // Cleanup pause timer on unmount
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const handleLogoMidpoint = useCallback(() => {
    if (flipTarget !== null) setDisplayedLogo(flipTarget);
  }, [flipTarget]);

  const handleAboutMidpoint = useCallback(() => {
    if (flipTarget !== null) setDisplayedAbout(flipTarget);
  }, [flipTarget]);

  const handleFlipComplete = useCallback(() => {
    setIsFlipping(false);
    setFlipTarget(null);
  }, []);

  const logoCustomer = customers[displayedLogo];
  const aboutCustomer = customers[displayedAbout];

  const showFlip = isFlipping && flipTarget !== null;

  return (
    <div
      className="w-full h-[720px] max-md:h-auto max-md:min-h-[500px] flex max-md:flex-col"
      style={{ perspective: 1200 }}
    >
      {/* ── Left Page: Logo side ─────────────────────────────────── */}
      <div className="w-1/2 max-md:w-full max-md:min-h-[350px] relative flex flex-col justify-between p-10 max-md:p-6 overflow-hidden">
        {/* Static content underneath */}
        <LeftPageContent customer={logoCustomer} />

        {/* Flipping overlay for logo page */}
        {showFlip && (
          <FlippingPage
            key={`logo-${flipTarget}`}
            direction={flipDirection}
            side="logo"
            frontContent={<LeftPageContent customer={customers[displayedLogo]} />}
            backContent={<LeftPageContent customer={customers[flipTarget]} />}
            onMidpoint={handleLogoMidpoint}
            onComplete={() => {}}
          />
        )}

        {/* Navigation controls (always on top) */}
        <div className="flex items-center justify-between relative z-10">
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
              className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-gray-40 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-60 disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => handleArrowClick('next')}
              aria-label="Next customer"
              disabled={isFlipping}
              className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-primary-80 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary-100 disabled:opacity-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Right Page: About side ───────────────────────────────── */}
      <div className="w-1/2 max-md:w-full bg-beige p-10 max-md:p-6 overflow-y-auto relative">
        {/* Static content underneath */}
        <RightPageContent customer={aboutCustomer} />

        {/* Flipping overlay for about page */}
        {showFlip && (
          <FlippingPage
            key={`about-${flipTarget}`}
            direction={flipDirection}
            side="about"
            frontContent={<RightPageContent customer={customers[displayedAbout]} />}
            backContent={<RightPageContent customer={customers[flipTarget]} />}
            onMidpoint={handleAboutMidpoint}
            onComplete={handleFlipComplete}
          />
        )}
      </div>
    </div>
  );
}

// ── Left Page Content ───────────────────────────────────────────────────
function LeftPageContent({ customer }: { customer: Customer }) {
  return (
    <>
      <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
        {customer.name} ({customer.abbreviation})
      </h1>
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={customer.logo}
              alt={`${customer.name} logo`}
              width={380}
              height={380}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// ── Right Page Content ──────────────────────────────────────────────────
function RightPageContent({ customer }: { customer: Customer }) {
  return (
    <div>
      <h2 className="text-h5 text-primary-80 mb-6">About</h2>
      <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
        {customer.about}
      </div>
    </div>
  );
}

// ── Flipping Page ───────────────────────────────────────────────────────
function FlippingPage({
  direction,
  side,
  frontContent,
  backContent,
  onMidpoint,
  onComplete,
}: {
  direction: FlipDirection;
  side: 'logo' | 'about';
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  onMidpoint: () => void;
  onComplete: () => void;
}) {
  const controls = useAnimation();
  const midpointReached = useRef(false);

  // Forward (next): page swings from right to left
  //   - transformOrigin: "left center" (hinges on the spine/center)
  //   - rotates from 0 to -180
  // Reverse (prev): page swings from left to right
  //   - transformOrigin: "right center" (hinges on the spine/center)
  //   - rotates from 0 to 180
  const isForward = direction === 'next';
  const targetRotation = isForward ? -180 : 180;
  const origin = isForward ? 'left center' : 'right center';
  const bgClass = side === 'about' ? 'bg-beige' : 'bg-white';

  useEffect(() => {
    controls.start({
      rotateY: targetRotation,
      transition: { duration: 0.7, ease: 'easeInOut' },
    });
  }, [controls, targetRotation]);

  return (
    <motion.div
      className="absolute inset-0 z-[5]"
      style={{
        transformOrigin: origin,
        transformStyle: 'preserve-3d',
      }}
      initial={{ rotateY: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        const angle = Math.abs(Number(latest.rotateY) || 0);
        if (angle >= 90 && !midpointReached.current) {
          midpointReached.current = true;
          onMidpoint();
        }
      }}
      onAnimationComplete={onComplete}
    >
      {/* Front face — shows the OLD content */}
      <div
        className={`absolute inset-0 ${bgClass} p-10 max-md:p-6 flex flex-col justify-between overflow-hidden`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {frontContent}
      </div>

      {/* Back face — shows the NEW content (rotated 180 so it reads correctly when flipped) */}
      <div
        className={`absolute inset-0 ${bgClass} p-10 max-md:p-6 flex flex-col justify-between overflow-hidden`}
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        {backContent}
      </div>
    </motion.div>
  );
}
