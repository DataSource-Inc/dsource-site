# DataSource Inc. Site Rewrite — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Completely rewrite the DataSource Inc. website from the ground up, matching the new Figma designs with a new design system, component library, and page layouts.

**Architecture:** Next.js 15 App Router with React 19 server components by default, client components only where interactivity requires it (CustomerCycler, RequestForm, MobileMenu). Tailwind v4 CSS-first design tokens. Static content hardcoded in data files.

**Tech Stack:** Next.js 15, React 19, Tailwind v4, TypeScript, next/font

**Design Doc:** `docs/plans/2026-02-26-site-rewrite-design.md`

**Figma Reference Prompts:** `docs/figma/<page>/examplePrompt.md` — each contains the Figma node URL for that page

---

## Task 0: Clean Slate — Delete Old Code

Delete all existing source code. Keep project shell and config.

**Step 1: Delete old source files**

```bash
rm -rf src/app/abis src/app/about src/app/careers src/app/clients src/app/contact src/app/home src/app/services
rm -rf src/components
rm -rf src/lib
rm src/app/page.tsx
rm src/app/layout.tsx
rm src/app/globals.css
```

**Step 2: Delete old tailwind config (will be replaced by CSS-first approach)**

```bash
rm tailwind.config.ts
```

**Step 3: Create new directory structure**

```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/components/home
mkdir -p src/components/customers
mkdir -p src/components/contact
mkdir -p src/data
mkdir -p src/lib
```

**Step 4: Verify clean state**

```bash
find src -type f
```

Expected: Only `src/app/favicon.ico` remains.

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: clean slate — remove all old source code for site rewrite"
```

---

## Task 1: Design Tokens + Font Setup + globals.css

Set up the design system foundation: colors, typography, and font loading.

**Files:**
- Create: `src/app/globals.css`
- Create: `src/lib/fonts.ts`

**Step 1: Create `src/lib/fonts.ts`**

Use DM Sans from Google Fonts as RF Dewi placeholder. When RF Dewi font files arrive, switch to `next/font/local`.

```typescript
import { DM_Sans } from "next/font/google";

// Placeholder for RF Dewi — swap to next/font/local when font files are available
// RF Dewi: weight 400, similar geometric sans-serif proportions
export const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});
```

**Step 2: Create `src/app/globals.css`**

Define all design tokens using Tailwind v4 `@theme` directive. Include base typography styles.

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-primary-100: #063858;
  --color-primary-80: #084C79;
  --color-primary-10: #CEDBE4;

  --color-gray-100: #5A6C75;
  --color-gray-60: #9CA7AC;
  --color-gray-40: #BDC4C8;

  --color-light: #F2F0EE;
  --color-beige: #E9E8E7;

  /* Font family */
  --font-sans: var(--font-sans);
}

/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  color: var(--color-gray-100);
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Step 3: Verify build compiles**

```bash
npx next build
```

Expected: Build succeeds (no pages yet, just globals).

**Step 4: Commit**

```bash
git add src/lib/fonts.ts src/app/globals.css
git commit -m "feat: add design system tokens and font configuration"
```

---

## Task 2: Root Layout + Header + Footer

Build the shared layout shell that wraps every page.

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/MobileMenu.tsx`
- Create: `src/components/layout/Footer.tsx`

**Figma reference:** Header and Footer are visible on every page screenshot. Header node: `2630:3977`. Footer is the bottom bar on every page.

**Step 1: Create `src/components/layout/Header.tsx`**

Server component with nav links. The mobile hamburger triggers MobileMenu (client component).

- Logo: DataSource Inc. logo (`/dsource-logo2.png`) linked to `/`
- Nav links: Home (`/`), Why ABIS (`/why-abis`), Customers (`/customers`), Contact Us (`/contact`)
- Active page: underline style (use `usePathname()` in a client wrapper if needed)
- Mobile: hamburger icon at `md` breakpoint and below

**Step 2: Create `src/components/layout/MobileMenu.tsx`**

`'use client'` component. Overlay menu triggered by hamburger button. Shows nav links with close (X) button. Uses `useState` for open/close.

**Step 3: Create `src/components/layout/Footer.tsx`**

Server component. Contains:
- DataSource logo
- Nav links: Home, Why ABIS, Customers, Contact Us, Privacy Policy
- LinkedIn icon (link to DataSource LinkedIn)
- Centered layout, dark text on white background

**Step 4: Create `src/app/layout.tsx`**

Root layout that:
- Loads the font via `fontSans.variable` on `<html>`
- Imports `globals.css`
- Wraps children with `<Header />` and `<Footer />`
- Sets metadata (title, description, OpenGraph)

```typescript
import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "DataSource Inc.",
  description: "DataSource provides ABIS, a comprehensive solution for Federal Personnel Security offices.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Step 5: Create placeholder `src/app/page.tsx`**

Minimal page so the build works:

```typescript
export default function Home() {
  return <div className="p-8"><h1 className="text-primary-80">DataSource Inc.</h1></div>;
}
```

**Step 6: Verify**

```bash
npx next build
```

Expected: Build succeeds. Opening in browser shows header, placeholder content, footer.

**Step 7: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx src/components/layout/
git commit -m "feat: add root layout with Header, Footer, and MobileMenu"
```

---

## Task 3: UI Components (Button, SectionHeading, StatCard, InsightCard, VideoEmbed)

Build the reusable UI component library before tackling pages.

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/StatCard.tsx`
- Create: `src/components/ui/InsightCard.tsx`
- Create: `src/components/ui/VideoEmbed.tsx`

**Step 1: Create `Button.tsx`**

Props: `children`, `href` (optional, renders as `<a>` if present), `onClick`, `variant` (default `"primary"`).

- Primary: `bg-primary-80 text-white` with arrow icon (→), hover `bg-primary-100`
- Padding, rounded corners per Figma (the button instance is 285x56)

**Step 2: Create `SectionHeading.tsx`**

Props: `children`, optional `className`.

- Renders an `<h2>` with the H2 typography scale: `text-[50px] leading-[1.2] tracking-[-2px]` on desktop, `text-[32px] leading-[1.25]` on mobile
- Color: `text-primary-80`

**Step 3: Create `StatCard.tsx`**

Props: `number` (string like "25+"), `description` (string), `icon` (ReactNode).

- Large number display (134px per Figma "Numbers" style)
- Description text below
- Icon in corner
- Bordered card with `border-primary-10` background tint

**Step 4: Create `InsightCard.tsx`**

Props: `title`, `slug`, `icon` (image src or ReactNode).

- Card with icon image + title
- Links to `/insights/[slug]`
- Used in grid layouts on Home page and insight listings

**Step 5: Create `VideoEmbed.tsx`**

Props: `videoId` (YouTube ID), `title`.

- 16:9 aspect ratio container
- YouTube iframe embed
- Accessible title attribute

**Step 6: Verify build**

```bash
npx next build
```

**Step 7: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add UI components — Button, SectionHeading, StatCard, InsightCard, VideoEmbed"
```

---

## Task 4: Home Page

Implement the full Home page matching Figma node `2630:3962`.

**Files:**
- Rewrite: `src/app/page.tsx`
- Create: home-specific section components in `src/components/home/` as needed

**Figma reference:** `docs/figma/home/examplePrompt.md` → node `2630:3962`

Use `mcp__figma-desktop__get_design_context` with nodeId `2630:3962` to get exact layout details.

**Home page sections (top to bottom):**

1. **Hero Section** — Full-width background image/pattern, large heading "Take the Heavy Lifting out of Trusted Workforce with ABIS", ABIS logo badge, subtitle "More than a Case Management System", description text, "Request a Demo" CTA button
2. **How ABIS Supports Trusted Workforce** — Section heading, left text block (quote attribution: "Chris Zinkl, Director, ABIS Operations"), right video embed (YouTube)
3. **Personnel Security Insights** — Large quote with quote marks (❝), attribution with avatar (Pamela Anderson, President & CEO), grid of 4 insight cards with 3D icons
4. **Managing Security Processes with ABIS Architecture** — Left: video embed with play button, Right: description text with speaker attribution

**Step 1: Build hero section**

Reference the Figma closely for the background treatment (appears to be a world map/globe watermark pattern behind the hero).

**Step 2: Build "How ABIS Supports" section**

Two-column layout: text left, video right. Use `VideoEmbed` component.

**Step 3: Build "Personnel Security Insights" section**

Quote block with large quotation marks, avatar, attribution. Below: 4-column grid of `InsightCard` components.

**Step 4: Build "Managing Security Processes" section**

Two-column: video left, text right. Use `VideoEmbed` component.

**Step 5: Assemble in `src/app/page.tsx`**

Compose all sections. Ensure proper spacing between sections.

**Step 6: Verify**

```bash
npx next build
```

Check in browser: all sections visible, responsive at mobile breakpoints.

**Step 7: Commit**

```bash
git add src/app/page.tsx src/components/home/
git commit -m "feat: implement Home page with hero, video, insights, and architecture sections"
```

---

## Task 5: Data Files (Customers + Insights)

Create the data files that drive dynamic content.

**Files:**
- Create: `src/data/customers.ts`
- Create: `src/data/insights.ts`

**Step 1: Create `src/data/customers.ts`**

```typescript
export interface Customer {
  name: string;
  abbreviation: string;
  logo: string;      // path in /public
  about: string;     // short description
  linkedIn?: string;
}

export const customers: Customer[] = [
  {
    name: "Internal Revenue Service",
    abbreviation: "IRS",
    logo: "/irs-logo.png",
    about: "...",  // Pull from Figma
  },
  // ... LOC, SBA, USITC, CFPB
];
```

**Step 2: Create `src/data/insights.ts`**

```typescript
export interface Insight {
  title: string;
  slug: string;
  icon: string;       // path to 3D icon image
  excerpt: string;
  content: string;    // full article content (can be JSX-friendly string)
  author?: string;
}

export const insights: Insight[] = [
  {
    title: "Breaking down how Trusted Workforce will increase productivity for Personnel Security offices",
    slug: "trusted-workforce-productivity",
    icon: "/insights/icon-1.png",
    excerpt: "...",
    content: "...",
  },
  // ... 5 more articles from Figma
];
```

**Step 3: Commit**

```bash
git add src/data/
git commit -m "feat: add customer and insight data files"
```

---

## Task 6: Why ABIS Page

Implement the Why ABIS page matching Figma node `2630:5689`.

**Files:**
- Create: `src/app/why-abis/page.tsx`

**Figma reference:** `docs/figma/whyAbis/examplePrompt.md` → node `2630:5689`

Use `mcp__figma-desktop__get_design_context` with nodeId `2630:5689` for exact layout.

**Page sections:**

1. **Page title** — "Why ABIS" in H1
2. **Stats row** — Two `StatCard` components: "25+ Years of Subject Matter Expertise..." and "31+ Years of Software Development Experience"
3. **Five Reasons section** — Left: section heading "Five Reasons Why ABIS is the Premier Solution for Federal Personnel Security Offices". Right: numbered list (1-5) with bold titles and body text descriptions

**Step 1: Build page layout**

Top: H1 title. Stats row with two cards side by side (stacked on mobile). Five reasons as a two-column layout.

**Step 2: Verify**

```bash
npx next build
```

**Step 3: Commit**

```bash
git add src/app/why-abis/
git commit -m "feat: implement Why ABIS page with stats and five reasons"
```

---

## Task 7: Customers Page + CustomerCycler

Implement the Customers page matching Figma node `2630:5950` with the animated cycler from `2630:7584`.

**Files:**
- Create: `src/app/customers/page.tsx`
- Create: `src/components/customers/CustomerCycler.tsx`

**Figma reference:** `docs/figma/customers/examplePrompt.md` → node `2630:5950`, animation node `2630:7584`

Use `mcp__figma-desktop__get_design_context` with nodeId `2630:5950` and `2630:7584`.

**Page sections:**

1. **Hero with CustomerCycler** — Left half: customer name + "About" link. Right half: animated book-style transition cycling through agency logos. Auto-advances on timer, manual navigation dots/arrows.
2. **Supporting Our Customers** — Grid of customer detail cards

**Step 1: Build `CustomerCycler.tsx`**

`'use client'` component. Props: accepts customers data array.

- Uses `useState` for active index, `useEffect` for auto-advance timer (e.g., 5 second interval)
- CSS transitions for the "book flip" effect: `transform`, `opacity` transitions
- Shows current customer logo and name
- Navigation indicators (dots or arrows)

**Step 2: Build page layout**

Server component page that imports `CustomerCycler` and renders the "Supporting Our Customers" section below.

**Step 3: Verify**

```bash
npx next build
```

Check in browser: animation cycles through customers, responsive on mobile.

**Step 4: Commit**

```bash
git add src/app/customers/ src/components/customers/
git commit -m "feat: implement Customers page with animated CustomerCycler"
```

---

## Task 8: Insight Article Pages

Implement the insight article detail pages matching Figma node `2630:4059`.

**Files:**
- Create: `src/app/insights/[slug]/page.tsx`

**Figma reference:** `docs/figma/home-personnelSecurityInsights/examplePrompt.md` → node `2630:4059`

Use `mcp__figma-desktop__get_design_context` with nodeId `2630:4059`.

**Page layout:**

1. **Header with breadcrumb/nav** — Page title (article title)
2. **Article content** — Long-form text content with section headings
3. **"More Personnel Security Insights"** — Grid of other `InsightCard` components at the bottom (linking to sibling articles)

**Step 1: Build dynamic route page**

Uses `params.slug` to look up the insight from `src/data/insights.ts`. Uses `generateStaticParams()` to pre-render all 6 articles at build time.

```typescript
import { insights } from "@/data/insights";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();
  // render...
}
```

**Step 2: Build "More Insights" section at bottom**

Filter out current article, display remaining as `InsightCard` grid.

**Step 3: Verify**

```bash
npx next build
```

Expected: All 6 insight pages generated statically.

**Step 4: Commit**

```bash
git add src/app/insights/
git commit -m "feat: implement insight article pages with static generation"
```

---

## Task 9: Contact Page + RequestForm

Implement the Contact Us page matching Figma node `2630:7421`.

**Files:**
- Create: `src/app/contact/page.tsx`
- Create: `src/components/contact/RequestForm.tsx`

**Figma reference:** `docs/figma/contactUs/examplePrompt.md` → node `2630:7421`

Use `mcp__figma-desktop__get_design_context` with nodeId `2630:7421`.

**Page layout (two columns on desktop, stacked on mobile):**

**Left column — Contact Info:**
1. "Contact Us" H1
2. Lukas Klotzsche, Director of Sales and Marketing + LinkedIn icon
3. Email: lklotzsche@datasourceinc.com
4. Cell: 561-502-2822
5. Office: 703-748-7180 ext. 705
6. GSA Schedule Contract: GS-35F-4100A (Software Licenses, Software Maintenance, IT Professional Services)
7. DataSource Inc. address: 1749 Old Meadow Road, Suite 350, McLean, VA 22102

**Right column — Request Form:**
1. Tab bar: Demo (default selected) | More Information | White Paper
2. Fields: Agency/Bureau Name, Full Name and Title, Email Address, Comments (optional textarea)
3. Submit Request button (primary style with arrow)

**Step 1: Build `RequestForm.tsx`**

`'use client'` component. Uses `useState` for active tab and form field values. Submit handler is a no-op (UI only).

**Step 2: Build contact page layout**

Two-column grid with contact info left, form right.

**Step 3: Verify**

```bash
npx next build
```

**Step 4: Commit**

```bash
git add src/app/contact/ src/components/contact/
git commit -m "feat: implement Contact Us page with request form"
```

---

## Task 10: Privacy Policy Page

Implement the Privacy Policy page matching Figma node `2630:7525`.

**Files:**
- Create: `src/app/privacy-policy/page.tsx`

**Figma reference:** `docs/figma/privacyPolicy/examplePrompt.md` → node `2630:7525`

Use `mcp__figma-desktop__get_design_context` with nodeId `2630:7525`.

**Page layout:**

1. "Privacy Policy" H1 + date "January 2025"
2. Intro paragraph
3. Sections with H3 headings:
   - Collection of your Personal Information
   - Use of your Personal Information
   - Use of Cookies
   - Security of your Personal Information
   - Changes to this Statement
   - Contact Information

All static text content, pulled from Figma design context.

**Step 1: Build page**

Simple content page with proper heading hierarchy and spacing.

**Step 2: Verify**

```bash
npx next build
```

**Step 3: Commit**

```bash
git add src/app/privacy-policy/
git commit -m "feat: implement Privacy Policy page"
```

---

## Task 11: Responsive Polish

Final pass across all pages to ensure mobile designs match Figma.

**Files:**
- Modify: All page and component files as needed

**Step 1: Audit each page at mobile viewport (375px)**

Check against Figma mobile designs:
- Home mobile: node `2630:3962` (right side of screenshot)
- Why ABIS mobile: node `2630:5689` (right side)
- Customers mobile: node `2630:5950` (right side)
- Contact mobile: node `2630:7421` (right side)
- Privacy Policy mobile: node `2630:7525` (right side)

**Step 2: Fix breakpoint issues**

Common fixes:
- Stack columns on mobile (remove grid cols)
- Reduce heading sizes (H1 64→36, H2 50→32, H3 40→28)
- Adjust padding/margins
- Mobile menu works correctly
- Video embeds scale properly

**Step 3: Verify full build**

```bash
npx next build
```

Expected: Clean build, no errors.

**Step 4: Commit**

```bash
git add -A
git commit -m "fix: responsive polish across all pages for mobile viewports"
```

---

## Summary

| Task | Description | Key Files |
|------|-------------|-----------|
| 0 | Clean slate | Delete `src/` contents |
| 1 | Design tokens + fonts | `globals.css`, `lib/fonts.ts` |
| 2 | Layout shell | `layout.tsx`, Header, Footer, MobileMenu |
| 3 | UI components | Button, SectionHeading, StatCard, InsightCard, VideoEmbed |
| 4 | Home page | `page.tsx`, home section components |
| 5 | Data files | `data/customers.ts`, `data/insights.ts` |
| 6 | Why ABIS page | `why-abis/page.tsx` |
| 7 | Customers page | `customers/page.tsx`, CustomerCycler |
| 8 | Insight articles | `insights/[slug]/page.tsx` |
| 9 | Contact page | `contact/page.tsx`, RequestForm |
| 10 | Privacy Policy | `privacy-policy/page.tsx` |
| 11 | Responsive polish | All files |

Each task produces a working commit. Tasks 0-3 must be sequential (each depends on the previous). Tasks 4-10 can be built in any order after Task 3. Task 11 is the final pass.
