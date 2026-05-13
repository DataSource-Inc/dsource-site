'use client';

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Button from "@/components/ui/Button";

// ── Timing config ──
const TIMING = {
  logo:    { delay: 0,    duration: 0.8 },
  heading: { delay: 0.25, duration: 0.7 },
  dots:    { delay: 0.5,  duration: 0.9 },
  subtext: { delay: 0.65, duration: 0.6 },
} as const;

type Phase = keyof typeof TIMING;

type AnimState = { opacity: number; scale?: number; x?: number; y?: number };

function fadeIn(phase: Phase, ready: boolean, custom?: { initial: AnimState; animate: AnimState }) {
  const { delay, duration } = TIMING[phase];
  const ease = [0.25, 0.1, 0.25, 1] as const;

  const defaults: Record<Phase, { initial: AnimState; animate: AnimState }> = {
    logo: {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
    },
    heading: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    },
    dots: {
      initial: { opacity: 0, x: -80 },
      animate: { opacity: 0.6, x: 0 },
    },
    subtext: {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
    },
  };

  const { initial, animate } = custom ?? defaults[phase];

  return { initial, animate: ready ? animate : initial, transition: { delay, duration, ease } };
}

export default function HeroSection() {
  // contentReady gates text/CTA — fires after hydration so LCP element (h1) is never blocked by an image download.
  // logoReady gates the logo + decorative dots, gated on logo onLoad so dots don't animate before layout settles.
  const [contentReady, setContentReady] = useState(false);
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => setContentReady(true), []);
  const handleLogoLoad = useCallback(() => setLogoReady(true), []);

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative  overflow-hidden">
      {/* Decorative dotted world map - left side */}
      <m.div
        {...fadeIn('dots', logoReady)}
        className="absolute left-[-26%] top-[35%] w-[50%] h-[55%] pointer-events-none max-md:hidden"
        aria-hidden="true"
      >
        <Image
          src="/hero-dots.webp"
          alt=""
          fill
          quality={40}
          sizes="(max-width: 768px) 0px, 49vw"
          className="object-contain"
        />
      </m.div>
      {/* Decorative dotted world map - right side (mirrored) */}
      <m.div
        {...fadeIn('dots', logoReady, {
          initial: { opacity: 0, x: -80 },
          animate: { opacity: 0.6, x: 0 },
        })}
        className="absolute right-[-20%] top-[35%] w-[50%] h-[55%] pointer-events-none scale-x-[-1] max-md:hidden"
        aria-hidden="true"
      >
        <Image
          src="/hero-dots.webp"
          alt=""
          fill
          quality={40}
          sizes="(max-width: 768px) 0px, 49vw"
          className="object-contain"
        />
      </m.div>

      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        <div className="flex flex-col items-center text-center max-w-[987px] mx-auto gap-[52px] max-md:gap-10">
          {/* Main heading */}
          <m.h1
            {...fadeIn('heading', contentReady)}
            className="text-h1 text-primary-80 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]"
          >
            Take the Heavy Lifting out of Trusted Workforce with ABIS
          </m.h1>

          {/* ABIS logo + subtitle block */}
          <div className="flex flex-col items-center gap-16 max-md:gap-10">
            {/* ABIS Logo */}
            <m.div {...fadeIn('logo', logoReady)}>
              <Image
                src="/abis-logo.png"
                alt="ABIS Personnel Security"
                width={240}
                height={86}
                priority
                sizes="(max-width: 768px) 161px, 240px"
                className="max-md:w-[161px] max-md:h-auto"
                onLoad={handleLogoLoad}
              />
            </m.div>

            {/* Subtitle area */}
            <m.div
              {...fadeIn('subtext', contentReady)}
              className="flex flex-col items-center gap-8 max-md:gap-6"
            >
              {/* Tag pill */}
              <div className="bg-beige px-3 py-[5px] flex items-center justify-center">
                <span className="text-body-2 text-gray-100">
                  More than a Case Management System
                </span>
              </div>

              {/* Description */}
              <p className="text-body-1 text-gray-100 max-w-[535px] max-md:max-w-full">
                ABIS (Automated Background Investigation System) includes standard case management functionality, such as
                workflow and document management, but much more than that, ABIS
                automates every Personnel Security-specific task for Federal
                agencies.
              </p>
            </m.div>
          </div>

          {/* CTA Button */}
          <m.div {...fadeIn('subtext', contentReady)}>
            <Button href="/contact" className="w-[285px] justify-between max-md:w-full">
              Request a Demo
            </Button>
          </m.div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
