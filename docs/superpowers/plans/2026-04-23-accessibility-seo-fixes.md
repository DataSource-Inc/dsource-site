# Accessibility & SEO Fixes Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close the accessibility and SEO gaps flagged in the datasourceinc.com audit — skip link, nav labels, aria-expanded, canonical + Open Graph metadata, robots.txt, sitemap.xml, per-page titles.

**Architecture:** All changes are scoped to the existing Next.js 16 App Router site. SEO fixes use Next's metadata API (`metadata` export + file conventions `robots.ts`, `sitemap.ts`). Accessibility fixes are inline JSX/attribute edits in `src/components/layout/*` and `src/components/ui/InsightCard.tsx`. No new dependencies.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind v4, TypeScript.

**Verification approach:** This repo has no test framework — verification is `npm run build` (catches type + compile errors), `npm run lint`, and a manual browser check per task. Where a step says "Verify in browser," open `npm run dev` at `http://localhost:3000` and confirm the specific behavior described.

**Canonical site URL:** `https://datasourceinc.com` — used as `metadataBase` for OG tags and sitemap. Update the constant if the production URL differs.

---

## Chunk 1: SEO Infrastructure

### Task 1: robots.txt

**Files:**
- Create: `src/app/robots.ts`

Next.js generates `/robots.txt` from this file at build time.

- [ ] **Step 1: Create the robots route**

Write `src/app/robots.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://datasourceinc.com/sitemap.xml",
  };
}
```

- [ ] **Step 2: Verify it builds and serves**

Run: `npm run build`
Expected: build completes with `/robots.txt` listed in the route summary.

Then run: `npm run dev` and open `http://localhost:3000/robots.txt`
Expected: plain text with `User-Agent: *`, `Allow: /`, and the `Sitemap:` line.

- [ ] **Step 3: Commit**

```bash
git add src/app/robots.ts
git commit -m "seo: add robots.txt via next metadata route"
```

---

### Task 2: XML sitemap

**Files:**
- Create: `src/app/sitemap.ts`

Static routes plus dynamic insight slugs sourced from `src/data/insights.ts`.

- [ ] **Step 1: Create the sitemap route**

Write `src/app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";

const BASE_URL = "https://datasourceinc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/why-abis",
    "/customers",
    "/contact",
    "/privacy-policy",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...insightRoutes];
}
```

- [ ] **Step 2: Verify it builds and serves**

Run: `npm run build`
Expected: build succeeds, `/sitemap.xml` appears in route list.

Run: `npm run dev` and open `http://localhost:3000/sitemap.xml`
Expected: XML listing 5 static URLs plus one `<url>` per insight slug.

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "seo: add sitemap.xml covering static pages and insight slugs"
```

---

### Task 3: Root metadata — canonical, Open Graph, better title template

**Files:**
- Modify: `src/app/layout.tsx:8-12`

Current metadata is a bare `title` + `description`. Replace with `metadataBase`, a `title.template` so per-page titles compose cleanly, `alternates.canonical`, and a full `openGraph` block.

- [ ] **Step 1: Replace the metadata export**

In `src/app/layout.tsx`, replace lines 8-12 with:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://datasourceinc.com"),
  title: {
    default: "ABIS Personnel Security Platform | DataSource Inc.",
    template: "%s | DataSource Inc.",
  },
  description:
    "DataSource provides ABIS, a comprehensive solution for Federal Personnel Security offices.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "DataSource Inc.",
    title: "ABIS Personnel Security Platform | DataSource Inc.",
    description:
      "DataSource provides ABIS, a comprehensive solution for Federal Personnel Security offices.",
    url: "https://datasourceinc.com",
    images: [
      {
        url: "/dsource-logo.png",
        width: 1200,
        height: 630,
        alt: "DataSource Inc.",
      },
    ],
  },
};
```

- [ ] **Step 2: Verify build and rendered `<head>`**

Run: `npm run build && npm run dev`

Open `http://localhost:3000`, view page source, confirm:
- `<title>ABIS Personnel Security Platform | DataSource Inc.</title>`
- `<link rel="canonical" href="https://datasourceinc.com/"/>`
- `<meta property="og:title" ...>`, `<meta property="og:image" ...>` present

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "seo: add canonical, openGraph, and title template to root metadata"
```

---

### Task 4: Per-page metadata overrides

Each static page gets a `metadata` export so Google/LinkedIn preview each page distinctly. The `template` from Task 3 appends `| DataSource Inc.` automatically — each page supplies only its own title fragment.

**Files:**
- Modify: `src/app/page.tsx` (home)
- Modify: `src/app/why-abis/page.tsx`
- Modify: `src/app/customers/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/privacy-policy/page.tsx`

Note: `src/app/insights/[slug]/page.tsx` already has `generateMetadata` — leave it alone, but add a canonical line to it in Step 6.

- [ ] **Step 1: Home page metadata**

The root layout already covers the home page title well, but we need an explicit canonical. The home page is a server component, so add an export at the top of `src/app/page.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "ABIS Personnel Security Platform | DataSource Inc.",
  },
  alternates: { canonical: "/" },
};
```

(Use `absolute` to skip the `%s | DataSource Inc.` template for the home page.)

- [ ] **Step 2: Why ABIS page metadata**

Add to top of `src/app/why-abis/page.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why ABIS",
  description:
    "How ABIS streamlines Personnel Security operations for Federal agencies — built on 20+ years of direct experience supporting PS offices.",
  alternates: { canonical: "/why-abis" },
  openGraph: {
    title: "Why ABIS | DataSource Inc.",
    url: "https://datasourceinc.com/why-abis",
  },
};
```

- [ ] **Step 3: Customers page metadata**

Add to top of `src/app/customers/page.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Federal agencies that rely on DataSource's ABIS platform for Personnel Security workflows.",
  alternates: { canonical: "/customers" },
  openGraph: {
    title: "Customers | DataSource Inc.",
    url: "https://datasourceinc.com/customers",
  },
};
```

- [ ] **Step 4: Contact page metadata**

Note: if the contact page is a client component (`"use client"`), `metadata` cannot be exported from it. If so, wrap the form in a server-component page and move the interactive form to a separate client component, OR add a `layout.tsx` under `src/app/contact/` that exports the metadata.

Check first: `head -3 src/app/contact/page.tsx` — if it starts with `"use client"`, create `src/app/contact/layout.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DataSource to learn more about the ABIS Personnel Security platform.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | DataSource Inc.",
    url: "https://datasourceinc.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

Otherwise add the same `metadata` export to `src/app/contact/page.tsx` directly.

- [ ] **Step 5: Privacy policy metadata**

Add to top of `src/app/privacy-policy/page.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DataSource Inc. privacy policy.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | DataSource Inc.",
    url: "https://datasourceinc.com/privacy-policy",
  },
};
```

- [ ] **Step 6: Add canonical to insight pages**

In `src/app/insights/[slug]/page.tsx`, extend the existing `generateMetadata` return (around line 19-22) to include the canonical:

```typescript
return {
  title: `${insight.title} | DataSource Inc.`,
  description: insight.excerpt,
  alternates: { canonical: `/insights/${slug}` },
  openGraph: {
    title: `${insight.title} | DataSource Inc.`,
    description: insight.excerpt,
    url: `https://datasourceinc.com/insights/${slug}`,
  },
};
```

- [ ] **Step 7: Verify build and titles**

Run: `npm run build`
Expected: all pages compile. No TypeScript errors.

Run: `npm run dev` and hit each route. In each tab, confirm the browser tab title changes per page (e.g. "Why ABIS | DataSource Inc.", "Customers | DataSource Inc.").

- [ ] **Step 8: Commit**

```bash
git add src/app/page.tsx src/app/why-abis/page.tsx src/app/customers/page.tsx src/app/contact/ src/app/privacy-policy/page.tsx src/app/insights/[slug]/page.tsx
git commit -m "seo: add per-page titles, descriptions, canonicals, and og tags"
```

---

## Chunk 2: Accessibility Fixes

### Task 5: Skip navigation link

**Files:**
- Modify: `src/app/layout.tsx:24`
- Modify: `src/app/globals.css` (if no `.sr-only` utility — Tailwind v4 provides one; verify before adding)

- [ ] **Step 1: Add the skip link and target ID**

In `src/app/layout.tsx`, replace the body content (lines 21-26) with:

```tsx
<body className="font-sans flex flex-col min-h-screen">
  <a
    href="#main"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-primary-80 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
  >
    Skip to main content
  </a>
  <ScrollToTop />
  <Header />
  <main id="main" className="flex-1">{children}</main>
  <Footer />
</body>
```

- [ ] **Step 2: Verify in browser**

Run: `npm run dev`, load the home page, press Tab once. Expected: a visible "Skip to main content" pill appears top-left. Pressing Enter jumps focus to `<main>`.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "a11y: add skip-to-main-content link"
```

---

### Task 6: Label all `<nav>` elements

**Files:**
- Modify: `src/components/layout/Header.tsx:38`
- Modify: `src/components/layout/MobileMenu.tsx:80`
- Modify: `src/components/layout/Footer.tsx:28`

Screen readers need a distinct name for each landmark.

- [ ] **Step 1: Header desktop nav**

In `src/components/layout/Header.tsx`, change line 38:

```tsx
<nav aria-label="Primary" className="hidden items-center gap-14 md:flex">
```

- [ ] **Step 2: MobileMenu nav**

In `src/components/layout/MobileMenu.tsx`, change line 80:

```tsx
<nav aria-label="Mobile" className="flex flex-col gap-8 px-4 pt-52">
```

- [ ] **Step 3: Footer nav**

In `src/components/layout/Footer.tsx`, change line 28:

```tsx
<nav aria-label="Footer" className="hidden items-center gap-14 md:flex">
```

- [ ] **Step 4: Verify**

Run: `npm run build && npm run lint`
Expected: no errors.

In a browser with a screen reader or devtools accessibility panel, confirm three distinct landmarks: "Primary navigation", "Mobile navigation", "Footer navigation".

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/MobileMenu.tsx src/components/layout/Footer.tsx
git commit -m "a11y: label nav landmarks with aria-label"
```

---

### Task 7: Wire `aria-expanded` and `aria-controls` on the hamburger

**Files:**
- Modify: `src/components/layout/Header.tsx:59-80`
- Modify: `src/components/layout/MobileMenu.tsx:44`

The hamburger needs to announce open/closed state and point to the menu it controls.

- [ ] **Step 1: Add id + role to the MobileMenu container**

In `src/components/layout/MobileMenu.tsx`, change line 44 from:

```tsx
<div className="fixed inset-0 z-[100] bg-beige">
```

to:

```tsx
<div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile menu" className="fixed inset-0 z-[100] bg-beige">
```

- [ ] **Step 2: Add aria attributes to the hamburger button**

In `src/components/layout/Header.tsx`, replace the button (lines 60-80) so that the aria state tracks `mobileMenuOpen`:

```tsx
<button
  type="button"
  className="flex items-center justify-center md:hidden"
  onClick={() => setMobileMenuOpen(true)}
  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileMenuOpen}
  aria-controls="mobile-menu"
>
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 9H27M5 16H27M5 23H27"
      stroke="#063858"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</button>
```

- [ ] **Step 3: Verify in browser devtools**

Run: `npm run dev`, shrink viewport under `md`, inspect the hamburger button element. Closed state: `aria-expanded="false"`. Tap to open, inspect again: `aria-expanded="true"`, and the `<div id="mobile-menu">` is present in the DOM.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/MobileMenu.tsx
git commit -m "a11y: wire aria-expanded and aria-controls on mobile menu toggle"
```

---

### Task 8: Mark InsightCard decorative hover icons as aria-hidden

**Files:**
- Modify: `src/components/ui/InsightCard.tsx:36-46`

Both `<img>` tags are decorative duplicates (base + hover state of the same icon); the `<h3>` title provides the accessible name. `alt=""` is already present — adding `aria-hidden="true"` makes the intent explicit and silences scanner noise.

- [ ] **Step 1: Add aria-hidden to both icon images**

In `src/components/ui/InsightCard.tsx`, lines 36-46, add `aria-hidden="true"` to both `<img>` tags:

```tsx
{/* eslint-disable-next-line @next/next/no-img-element */}
<img
  src={icon}
  alt=""
  aria-hidden="true"
  className="h-full w-auto transition-opacity duration-300 group-hover:opacity-0"
/>
{/* eslint-disable-next-line @next/next/no-img-element */}
<img
  src={hoverIcon}
  alt=""
  aria-hidden="true"
  className="absolute inset-0 m-auto h-full w-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
/>
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/InsightCard.tsx
git commit -m "a11y: mark decorative insight icons as aria-hidden"
```

---

## Final Verification

After all tasks complete:

- [ ] **Full build passes**

Run: `npm run build && npm run lint`
Expected: zero errors, zero new warnings.

- [ ] **Smoke test each page in the browser**

Visit `/`, `/why-abis`, `/customers`, `/contact`, `/privacy-policy`, and one insight slug. For each:
- Tab from page load → skip link appears
- Browser tab title is page-specific
- View source → `<link rel="canonical">` and `<meta property="og:*">` present

- [ ] **Confirm /robots.txt and /sitemap.xml**

`http://localhost:3000/robots.txt` returns the rules.
`http://localhost:3000/sitemap.xml` lists every static route + every insight slug.

- [ ] **Deploy**

No remaining work in this plan. Merge / deploy per project workflow. After deploy, submit the sitemap at `https://datasourceinc.com/sitemap.xml` to Google Search Console.
