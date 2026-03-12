# Hero Section Animation Spec

## Overview

The hero section reveals its elements in a choreographed 4-phase sequence on page load. Each phase has a configurable **delay** (when it starts) and **duration** (how long the animation takes). These should be defined as a single timing config object at the top of the component for easy tuning.

## Timing Config

```ts
const TIMING = {
  logo:    { delay: 0,    duration: 0.5 },
  heading: { delay: 0.4,  duration: 0.5 },
  dots:    { delay: 0.4,  duration: 0.8 },
  subtext: { delay: 0.9,  duration: 0.4 },
};
```

All values in seconds. Adjusting any `delay` or `duration` should be the only thing needed to retune the sequence.

## Phase 1: Logo Entrance

- **Element:** ABIS logo image (currently between heading and subtitle)
- **NOTE:** For this animation, the logo should appear FIRST and ALONE, visually above the heading. During the animation sequence the logo is the first thing you see centered on screen. After the full sequence completes, the layout settles into its final state with heading on top, logo below.
- **Effect:** Fade in + scale up from `0.85` to `1.0`
- **Easing:** `easeOut`
- **The logo is the ONLY visible element at the start.** Everything else is hidden (opacity 0) until its phase begins.

## Phase 2: Heading Entrance

- **Element:** H1 "Take the Heavy Lifting out of Trusted Workforce with ABIS"
- **Effect:** Fade in + scale up from `0.9` to `1.0`
- **Easing:** `easeOut`
- **Starts at `TIMING.heading.delay`**, overlapping with Phase 3.

## Phase 3: Dot Maps Slide In

- **Elements:** Left and right `hero-dots.png` decorative images
- **Effect:** Slide in from outside (translateX) + fade from `0` to `0.6` opacity
- **Left:** slides from `-40%` to `0` on X axis
- **Right:** slides from `40%` to `0` on X axis (mirrored)
- **Easing:** `easeOut`
- **Starts at `TIMING.dots.delay`** — same time as heading.

## Phase 4: Subtext + CTA Fade In

- **Elements:** Tag pill ("More than a Case Management System"), description paragraph, and "Request a Demo" button
- **Effect:** Fade in (`opacity: 0 → 1`) + slight upward translate (`translateY: 12px → 0`)
- **Easing:** `easeOut`
- **Starts at `TIMING.subtext.delay`** — after heading/dots are mostly done.

## Technology

- **Framer Motion** `motion.div` with `initial` / `animate` props
- Each element wrapped in a `motion.div` (or use `motion(Image)` for the logo)
- `transition: { delay, duration, ease }` pulled from the `TIMING` config
- No `AnimatePresence` needed — this is a one-shot entrance animation on mount

## Important Notes

- All elements start at `opacity: 0` (invisible) and animate to their final state
- The dots should animate to `opacity: 0.6` (not 1.0) — they're decorative background
- The component must become `'use client'` since it will use Framer Motion
- Remove the old CSS keyframe animations (`animate-slide-in-left`, `animate-slide-in-right`) from the dots — Framer Motion handles it now
- Keep all existing responsive classes (`max-md:` prefixes)
- Keep the existing layout/positioning — only add animation behavior

## Files

- Component: `src/components/home/HeroSection.tsx`
- CSS cleanup: `src/app/globals.css` (remove `slide-in-left`, `slide-in-right` keyframes and utilities)
