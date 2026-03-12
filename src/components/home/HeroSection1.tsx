'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const TIMING = {
  logo:    { delay: 0,    duration: 0.8 },
  heading: { delay: 0.2,  duration: 0.8 },
  dots:    { delay: 0.4,  duration: 1.0 },
  subtext: { delay: 0.6,  duration: 0.8 },
};

export default function HeroSection() {
  return (
    <section className="relative  overflow-hidden">
      {/* Decorative dotted world map - left side */}
      <motion.div
        className="absolute left-[-26%] top-[35%] w-[50%] h-[55%] pointer-events-none max-md:hidden"
        aria-hidden="true"
        initial={{ opacity: 0, x: '-40%' }}
        animate={{ opacity: 0.6, x: '0%' }}
        transition={{ delay: TIMING.dots.delay, duration: TIMING.dots.duration, ease: 'easeOut' }}
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
        className="absolute right-[-20%] top-[35%] w-[50%] h-[55%] pointer-events-none scale-x-[-1] max-md:hidden"
        aria-hidden="true"
        initial={{ opacity: 0, x: '-40%' }}
        animate={{ opacity: 0.6, x: '0%' }}
        transition={{ delay: TIMING.dots.delay, duration: TIMING.dots.duration, ease: 'easeOut' }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: TIMING.heading.delay, duration: TIMING.heading.duration, ease: 'easeOut' }}
          >
            <h1 className="text-h1 text-primary-80 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]">
              Take the Heavy Lifting out of Trusted Workforce with ABIS
            </h1>
          </motion.div>

          {/* ABIS logo + subtitle block */}
          <div className="flex flex-col items-center gap-16 max-md:gap-10">
            {/* ABIS Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: TIMING.logo.delay, duration: TIMING.logo.duration, ease: 'easeOut' }}
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
              className="flex flex-col items-center gap-8 max-md:gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: TIMING.subtext.delay, duration: TIMING.subtext.duration, ease: 'easeOut' }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TIMING.subtext.delay + 0.1, duration: TIMING.subtext.duration, ease: 'easeOut' }}
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
