'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Customer } from '@/data/customers';

interface CustomerCyclerProps {
  customers: Customer[];
}

export default function CustomerCycler({ customers }: CustomerCyclerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % customers.length);
  }, [customers.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + customers.length) % customers.length);
  }, [customers.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Resume auto-advance after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') goToPrev();
    else goToNext();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const current = customers[activeIndex];

  return (
    <div className="w-full h-[720px] max-md:h-auto max-md:min-h-[500px] flex max-md:flex-col">
      {/* Left half - Customer name, logo, navigation */}
      <div className="w-1/2 max-md:w-full max-md:min-h-[350px] bg-beige relative flex flex-col justify-between p-10 max-md:p-6">
        {/* Customer name */}
        <h1 className="text-h3 max-md:text-h4 text-primary-80 tracking-[-1px] max-w-[440px]">
          {current.name} ({current.abbreviation})
        </h1>

        {/* Customer logo */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="relative w-[360px] h-[360px] max-md:w-[240px] max-md:h-[240px]">
            {customers.map((customer, index) => (
              <div
                key={customer.abbreviation}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out"
                style={{ opacity: index === activeIndex ? 1 : 0 }}
              >
                <Image
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  width={280}
                  height={280}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between">
          {/* Counter */}
          <span className="text-body-1 text-gray-100">
            {activeIndex + 1}/{customers.length}
          </span>

          {/* Progress dots */}
          <div className="flex gap-2 flex-1 mx-6">
            {customers.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to customer ${index + 1}`}
                className={`h-[4px] flex-1 rounded-sm transition-colors duration-300 cursor-pointer ${
                  index === activeIndex
                    ? 'bg-primary-80'
                    : 'bg-gray-40'
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
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

      {/* Right half - About section */}
      <div className="w-1/2 max-md:w-full bg-light p-10 max-md:p-6 overflow-y-auto">
        <div className="relative">
          {customers.map((customer, index) => (
            <div
              key={customer.abbreviation}
              className="transition-opacity duration-500 ease-in-out"
              style={{
                opacity: index === activeIndex ? 1 : 0,
                position: index === activeIndex ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                right: 0,
              }}
            >
              <h2 className="text-h5 text-primary-80 mb-6">About</h2>
              <div className="text-body-1 text-gray-100 whitespace-pre-line leading-[1.4]">
                {customer.about}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
