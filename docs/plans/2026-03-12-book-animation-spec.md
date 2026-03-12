# Book Page Turn Animation Spec

## Overview

The CustomerCycler component displays customer information in a **book layout** — left page shows customer logo/name, right page shows "About" text. Navigating between customers triggers a **page turn animation** that mimics turning a page in a physical book.

## Layout

```
┌─────────────────┬─────────────────┐
│                 │                 │
│   Customer A    │   Customer A    │
│   Logo + Name   │   About Text    │
│   (left page)   │   (right page)  │
│                 │                 │
└─────────────────┴─────────────────┘
         ▲ spine (center hinge)
```

- **Left page:** Customer name, abbreviation, and logo. Background: `bg-light`.
- **Right page:** "About" heading + about text. Background: `bg-beige`.
- **Spine/hinge:** The vertical center line where left and right pages meet. This is the axis of rotation.

## Forward Animation (Next Customer)

The right page swings **left** around the center spine, like turning a page forward in a book.

### What you see during the turn:

1. **Start state:** Left = Customer A logo | Right = Customer A about
2. **Page begins turning:** The right page (A's about) starts rotating left around the spine (`rotateY` from `0deg` toward `-180deg`). The `transformOrigin` is the **left edge** of the right page (i.e., the spine).
3. **Midpoint (~90deg):** The page is edge-on. At this moment:
   - The **back face** of the turning page is about to become visible.
   - The back face shows **Customer B's logo/name** (the new left page content).
   - **Underneath** the turning page, **Customer B's about text** is revealed on the right side.
4. **End state:** Left = Customer B logo (back of turned page) | Right = Customer B about (was underneath)

### Content layering (forward):

```
Layer 1 (top, the turning page):
  - Front face: Customer A about  (visible 0°–90°)
  - Back face:  Customer B logo   (visible 90°–180°)

Layer 2 (underneath, stationary):
  - Right side:  Customer B about (revealed as page lifts)
  - Left side:   Customer A logo  (covered by landing page)
```

## Reverse Animation (Previous Customer)

The left page swings **right** around the center spine, like turning a page backward.

### What you see during the turn:

1. **Start state:** Left = Customer B logo | Right = Customer B about
2. **Page begins turning:** The left page (B's logo) starts rotating right around the spine (`rotateY` from `0deg` toward `180deg`). The `transformOrigin` is the **right edge** of the left page (i.e., the spine).
3. **Midpoint (~90deg):** The page is edge-on. At this moment:
   - The **back face** of the turning page is about to become visible.
   - The back face shows **Customer A's about text** (the new right page content).
   - **Underneath** the turning page, **Customer A's logo/name** is revealed on the left side.
4. **End state:** Left = Customer A logo (was underneath) | Right = Customer A about (back of turned page)

### Content layering (reverse):

```
Layer 1 (top, the turning page):
  - Front face: Customer B logo   (visible 0°–90°)
  - Back face:  Customer A about  (visible 90°–180°)

Layer 2 (underneath, stationary):
  - Left side:   Customer A logo  (revealed as page lifts)
  - Right side:  Customer B about (covered by landing page)
```

## Timing & Easing

- **Duration:** ~600–800ms total. Fast enough to feel snappy, slow enough to read as a page turn.
- **Easing:** Use a Framer Motion tween with `easeInOut`, or a spring with moderate stiffness and low damping. The turn should accelerate into the middle and decelerate as it lands.
- **No shadows or lighting effects.** Keep it flat and clean.

## State Management

- Use Framer Motion's `onUpdate` callback to detect when the rotation crosses the midpoint (~90deg) for content swaps, instead of hardcoded `setTimeout`.
- The animation must be **non-interruptible** while in progress (disable nav buttons during flip).
- Auto-cycle every 5 seconds. Manual navigation pauses auto-cycle for 10 seconds.

## Technology

- **Framer Motion** (`motion` components, `useAnimation` or `animate` prop)
- CSS `perspective` on the parent for 3D depth
- `transformStyle: preserve-3d` and `backfaceVisibility: hidden` on page faces
- `rotateY` transform for the page turn

## Navigation Controls

Unchanged from current implementation:
- Dot indicators (progress bars) for direct navigation
- Left/right arrow buttons
- Counter showing "X/5"

## Existing Data

The component receives `customers: Customer[]` where each customer has: `name`, `abbreviation`, `logo` (image path), `about` (text string). Currently 5 customers.

## Files

- Component: `src/components/customers/CustomerCycler.tsx`
- CSS: `src/app/globals.css` (remove old `page-turn-next`/`page-turn-prev` keyframes)
- Data: `src/data/customers.ts` (unchanged)
