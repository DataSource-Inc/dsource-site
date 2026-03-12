'use client';

import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

/* ── Timing config (tweak these to taste) ── */
const TIMING = {
  logo:    { delay: 0.1, duration: 0.7 },
  heading: { delay: 0.15, duration: 0.6 },
  dots:    { delay: 0.0, duration: 0.8 },
  subtext: { delay: 0.0, duration: 0.5 },
};

export default function HeroSection() {
  const logoCtrl    = useAnimation();
  const headingCtrl = useAnimation();
  const dotsLeftCtrl  = useAnimation();
  const dotsRightCtrl = useAnimation();
  const subtextCtrl = useAnimation();

  useEffect(() => {
    async function sequence() {
      // Phase 1 — logo
      await logoCtrl.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: TIMING.logo.delay,
          duration: TIMING.logo.duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      });

      // Phase 2 — heading
      await headingCtrl.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: TIMING.heading.delay,
          duration: TIMING.heading.duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      });

      // Phase 3 — dots (left + right in parallel)
      await Promise.all([
        dotsLeftCtrl.start({
          opacity: 0.6,
          x: '0%',
          transition: {
            delay: TIMING.dots.delay,
            duration: TIMING.dots.duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }),
        dotsRightCtrl.start({
          opacity: 0.6,
          x: '0%',
          transition: {
            delay: TIMING.dots.delay,
            duration: TIMING.dots.duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }),
      ]);

      // Phase 4 — subtext + button
      await subtextCtrl.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: TIMING.subtext.delay,
          duration: TIMING.subtext.duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      });
    }

    sequence();
  }, [logoCtrl, headingCtrl, dotsLeftCtrl, dotsRightCtrl, subtextCtrl]);

  return (
    <section className="relative  overflow-hidden">
      {/* Decorative dotted world map - left side */}
      <motion.div
        initial={{ opacity: 0, x: '-40%' }}
        animate={dotsLeftCtrl}
        className="absolute left-[-26%] top-[35%] w-[50%] h-[55%] pointer-events-none max-md:hidden"
        aria-hidden="true"
      >
        <Image
          src="/hero-dots.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>
      {/* Decorative dotted world map - right side (mirrored) */}
      <motion.div
        initial={{ opacity: 0, x: '-40%' }}
        animate={dotsRightCtrl}
        className="absolute right-[-20%] top-[35%] w-[50%] h-[55%] pointer-events-none scale-x-[-1] max-md:hidden"
        aria-hidden="true"
      >
        <Image
          src="/hero-dots.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        <div className="flex flex-col items-center text-center max-w-[987px] mx-auto gap-[52px] max-md:gap-10">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headingCtrl}
            className="text-h1 text-primary-80 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]"
          >
            Take the Heavy Lifting out of Trusted Workforce with ABIS
          </motion.h1>

          {/* ABIS logo + subtitle block */}
          <div className="flex flex-col items-center gap-16 max-md:gap-10">
            {/* ABIS Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={logoCtrl}
            >
              <Image
                src="/abis-logo.png"
                alt="ABIS Personnel Security"
                width={240}
                height={86}
                className="max-md:w-[161px] max-md:h-auto"
              />
            </motion.div>

            {/* Subtitle area */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={subtextCtrl}
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
                ABIS includes standard case management functionality, such as
                workflow and document management, but much more than that, ABIS
                automates every Personnel Security-specific task for Federal
                agencies.
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={subtextCtrl}
          >
            <Button href="/contact" className="w-[285px] justify-between max-md:w-full">
              Request a Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
