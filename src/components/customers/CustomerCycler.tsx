'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Customer } from '@/data/customers';

interface CustomerCyclerProps {
  customers: Customer[];
}

export default function CustomerCycler({ customers }: CustomerCyclerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const [leftIndex, setLeftIndex] = useState(0);
  const [frontAboutIndex, setFrontAboutIndex] = useState(0);
  const [backAboutIndex, setBackAboutIndex] = useState(0);

  const flipRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const triggerFlip = useCallback((newIndex: number, direction: 'next' | 'prev') => {
    if (isFlipping) return;

    // Back face gets the NEW about content
    setBackAboutIndex(newIndex);
    setFlipDirection(direction);
    setIsFlipping(true);

    // Midpoint: page is edge-on covering left side, safe to swap left content
    const mid = setTimeout(() => {
      setLeftIndex(newIndex);
    }, 450);
    timeoutsRef.current.push(mid);

    // End: page is at -180deg showing back face (new about).
    // Set front face to same content, then snap to 0deg — visually identical.
    const end = setTimeout(() => {
      // Update front to match back FIRST
      setFrontAboutIndex(newIndex);
      setIsFlipping(false);

      // Then snap rotation to 0 on next frame (content already matches)
      requestAnimationFrame(() => {
        const el = flipRef.current;
        if (el) {
          el.style.transition = 'none';
          el.style.transform = 'rotateY(0deg)';
          el.offsetHeight; // force reflow
          el.style.transition = '';
          el.style.transform = '';
        }
      });
    }, 900);
    timeoutsRef.current.push(end);
  }, [isFlipping]);

  const goToNext = useCallback(() => {
    const newIndex = (activeIndex + 1) % customers.length;
    setActiveIndex(newIndex);
    triggerFlip(newIndex, 'next');
  }, [activeIndex, customers.length, triggerFlip]);

  const goToPrev = useCallback(() => {
    const newIndex = (activeIndex - 1 + customers.length) % customers.length;
    setActiveIndex(newIndex);
    triggerFlip(newIndex, 'prev');
  }, [activeIndex, customers.length, triggerFlip]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  useEffect(() => {
    return clearAllTimeouts;
  }, []);

  const handleDotClick = (index: number) => {
    if (index === activeIndex || isFlipping) return;
    const direction = index > activeIndex ? 'next' : 'prev';
    setActiveIndex(index);
    triggerFlip(index, direction);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (isFlipping) return;
    if (direction === 'prev') goToPrev();
    else goToNext();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const leftCustomer = customers[leftIndex];
  const frontAbout = customers[frontAboutIndex];
  const backAbout = customers[backAboutIndex];

  const animationName = isFlipping
    ? flipDirection === 'next' ? 'page-turn-next' : 'page-turn-prev'
    : undefined;

  return (
    <div className="w-full flex flex-col">
      {/* Preload all customer logos so they don't cause layout shift */}
      <div className="hidden">
        {customers.map((c) => (
          <Image key={c.abbreviation} src={c.logo} alt="" width={380} height={380} priority />
        ))}
      </div>

      {/* Book area */}
      <div className="w-full h-[620px] max-md:h-auto max-md:min-h-[400px] flex max-md:flex-col" style={{ perspective: '2500px' }}>
        {/* Left half - Customer name + logo */}
        <div className="w-1/2 max-md:w-full max-md:min-h-[300px] bg-light relative flex flex-col p-10 max-md:p-6">
          <div className="h-[120px] max-md:h-[80px] flex items-start shrink-0">
            <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
              {leftCustomer.name} ({leftCustomer.abbreviation})
            </h1>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
              <Image
                src={leftCustomer.logo}
                alt={`${leftCustomer.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right half - bg-beige behind the flip so it matches */}
        <div className="w-1/2 max-md:w-full h-full max-md:min-h-[300px] relative bg-beige">
          {/* The flipping page */}
          <div
            ref={flipRef}
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
              animation: animationName ? `${animationName} 0.9s ease-in-out forwards` : undefined,
            }}
          >
            {/* Front face: current About */}
            <div
              className="absolute inset-0 bg-beige p-10 max-md:p-6 overflow-y-auto"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <h2 className="text-h5 text-primary-80 mb-6">About</h2>
              <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                {frontAbout.about}
              </div>
            </div>

            {/* Back face: new About (same layout, so snap from -180 to 0 is invisible) */}
            <div
              className="absolute inset-0 bg-beige p-10 max-md:p-6 overflow-y-auto"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <h2 className="text-h5 text-primary-80 mb-6">About</h2>
              <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                {backAbout.about}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls - always visible */}
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
            className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-gray-40 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-60"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => handleArrowClick('next')}
            aria-label="Next customer"
            className="w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] bg-primary-80 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary-100"
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
