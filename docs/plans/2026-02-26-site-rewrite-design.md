# DataSource Inc. Site Rewrite — Design Document

**Date**: 2026-02-26
**Branch**: `redesign`
**Figma**: https://www.figma.com/design/qKJMEcHvdhPaYg4XM0Vpfc/DataSource.Inc-Website-Design?node-id=2469-870

## Overview

Complete ground-up rewrite of the DataSource Inc. website. All existing pages, components, and styling are replaced with a new design system and component architecture matching the Figma designs.

## Decisions

- **Approach**: Clean slate — delete all existing `src/` content, keep project shell
- **Tech stack**: Next.js 15 (App Router) + React 19 + Tailwind v4 + TypeScript (unchanged)
- **Font**: RF Dewi (self-hosted via `next/font/local`), DM Sans as placeholder until font files arrive
- **Content**: All static/hardcoded, no CMS
- **Contact form**: UI only, submission wired up later
- **Videos**: YouTube embeds
- **Customer pages**: Single `/customers` page with animated client-side cycler component
- **Insight articles**: Reusable template driven by data objects

## Design System

### Colors

| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| primary-100    | `#063858` | Darkest blue, footer bg      |
| primary-80     | `#084C79` | Main brand blue, headings     |
| primary-10     | `#CEDBE4` | Light blue tint, accents      |
| gray-100       | `#5A6C75` | Body text                     |
| gray-60        | `#9CA7AC` | Secondary text                |
| gray-40        | `#BDC4C8` | Borders, dividers             |
| white          | `#FFFFFF` | Backgrounds                   |
| light          | `#F2F0EE` | Off-white section backgrounds |
| beige          | `#E9E8E7` | Card backgrounds              |

### Typography

| Style      | Desktop          | Mobile           |
|------------|------------------|------------------|
| H1         | 64px / 1.1 / -2  | 36px / 1.25 / -2 |
| H2         | 50px / 1.2 / -2  | 32px / 1.25 / -2 |
| H3         | 40px / 1.25 / -2 | 28px / 1.25 / -2 |
| H4         | 32px / 1.25 / -2 | —                 |
| H5         | 24px / 1.2       | —                 |
| H6         | 20px / 1.2       | —                 |
| Text Big   | 18px / 1.4       | —                 |
| Body 1     | 16px / 1.4       | —                 |
| Body 2     | 14px / 1.4       | —                 |

Format: size / line-height / letter-spacing (px)

## Pages

| Route              | Description                                      | Figma Node    |
|--------------------|--------------------------------------------------|---------------|
| `/`                | Home — hero, video, insights, architecture       | `2630:3962`   |
| `/why-abis`        | Stats (25+, 31+) + 5 numbered reasons            | `2630:5689`   |
| `/customers`       | Single page with animated agency cycler           | `2630:5950`   |
| `/insights/[slug]` | 6 personnel security insight articles             | `2630:4059`   |
| `/contact`         | Contact info + request form (Demo/Info/Paper)     | `2630:7421`   |
| `/privacy-policy`  | Legal text content                                | `2630:7525`   |

## File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Home
│   ├── globals.css             # @theme tokens + base styles
│   ├── why-abis/page.tsx
│   ├── customers/page.tsx
│   ├── insights/[slug]/page.tsx
│   ├── contact/page.tsx
│   └── privacy-policy/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── StatCard.tsx
│   │   ├── InsightCard.tsx
│   │   └── VideoEmbed.tsx
│   ├── home/                   # Home-specific sections
│   ├── customers/
│   │   └── CustomerCycler.tsx  # 'use client'
│   └── contact/
│       └── RequestForm.tsx     # 'use client'
├── data/
│   ├── customers.ts
│   └── insights.ts
└── lib/
    └── fonts.ts                # Font config
```

## Components

### Shared Layout
- **Header**: Logo left, nav right (Home, Why ABIS, Customers, Contact Us). Active page underlined. Mobile: hamburger icon triggers MobileMenu.
- **Footer**: Logo + nav links (Home, Why ABIS, Customers, Contact Us, Privacy Policy) + LinkedIn icon.
- **MobileMenu**: Overlay with nav links, close button.

### UI Components
- **Button**: Dark blue (`primary-80`) with white text and arrow icon. Hover darkens to `primary-100`.
- **SectionHeading**: Consistent H2 styling for section titles.
- **StatCard**: Large number (134px "Numbers" style) + description text + icon, bordered card.
- **InsightCard**: 3D/isometric icon + title link, used in grid layouts.
- **VideoEmbed**: YouTube iframe with aspect-ratio container.

### Client Components
- **CustomerCycler**: Animated carousel cycling through agency logos (IRS, LOC, SBA, USITC, CFPB). "Book" flip transition using CSS transforms + interval timer.
- **RequestForm**: Tabbed form (Demo / More Information / White Paper) with fields: Agency/Bureau Name, Full Name and Title, Email Address, Comments (optional). Submit button UI only.

## Build Order

1. Design tokens + `globals.css` + font setup
2. Header + Footer + MobileMenu + root layout
3. Home page
4. Why ABIS page
5. Customers page + CustomerCycler
6. Insight article pages
7. Contact page + RequestForm
8. Privacy Policy page
9. Responsive polish across all pages

## Notes

- Build mobile-first, scale up with Tailwind `md:`/`lg:` breakpoints
- Each Figma page has explicit mobile designs to reference
- Existing `public/` assets (logos) retained and augmented as needed
- Figma example prompts preserved in `docs/figma/` for per-page reference
