# Payload Blog CMS Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Payload CMS to the existing DataSource Next site so editors can manage blog posts, insight articles, and article media without code changes.

**Architecture:** Payload runs inside the existing Next app under an `(payload)` route group. Public pages keep fixed DataSource templates and fetch published CMS content through a small server-only query layer with draft-mode bypass and ISR-style cache invalidation. Railway hosts the app and MongoDB databases; Cloudinary stores and delivers uploaded media through the community `payload-cloudinary` adapter.

**Tech Stack:** Next.js App Router, React, TypeScript, pnpm, Payload CMS 3, Railway MongoDB, Cloudinary, `@payloadcms/db-mongodb`, `@payloadcms/richtext-lexical`, `payload-cloudinary`, `@payloadcms/plugin-seo`, Next `unstable_cache`, `revalidatePath`, `draftMode`.

---

## File Structure

Create or modify these areas:

- `package.json`: switch scripts to pnpm-friendly Payload commands, remove Turbopack from production build, add Payload dependencies.
- `pnpm-lock.yaml`: canonical lockfile after dependency install.
- `package-lock.json`: remove once pnpm is canonical.
- `next.config.ts`: wrap with Payload `withPayload`, keep needed Next config, add remote image patterns for Cloudinary public media.
- `.env.example`: document local/dev/prod variables without secrets.
- `src/payload.config.ts`: main Payload config using MongoDB, Cloudinary, collections, plugins, editor config.
- `src/app/(payload)/admin/[[...segments]]/page.tsx`: Payload admin route.
- `src/app/(payload)/admin/[[...segments]]/not-found.tsx`: Payload admin not found route.
- `src/app/(payload)/api/[...slug]/route.ts`: Payload REST route.
- `src/app/(payload)/api/graphql/route.ts`: Payload GraphQL route.
- `src/app/(payload)/api/graphql-playground/route.ts`: Payload GraphQL playground route.
- `src/app/(payload)/layout.tsx`: Payload admin route-group layout.
- `src/app/(frontend)/api/preview/route.ts`: draft preview entrypoint.
- `src/app/(frontend)/api/exit-preview/route.ts`: draft preview exit.
- `src/collections/Users.ts`: auth users/admins/authors.
- `src/collections/Media.ts`: R2-backed upload collection.
- `src/collections/Insights.ts`: editable version of existing insight articles.
- `src/collections/BlogPosts.ts`: new blog post collection.
- `src/collections/Categories.ts`: blog categories, if useful in the UI.
- `src/access/isAdmin.ts`: admin write access helper.
- `src/access/publishedOnly.ts`: public published-read helper.
- `src/fields/slug.ts`: reusable slug field.
- `src/fields/richText.ts`: reusable Lexical rich text field.
- `src/utilities/formatSlug.ts`: slug formatting helper.
- `src/utilities/formatPreviewURL.ts`: preview URL helper.
- `src/lib/payload/queries.ts`: server-only Payload query functions.
- `src/lib/payload/cache.ts`: cached query wrappers and cache keys.
- `src/lib/payload/paths.ts`: public route path helpers.
- `src/lib/payload/revalidate.ts`: collection hook helpers for `revalidatePath`.
- `src/components/cms/RichText.tsx`: minimal Lexical renderer.
- `src/components/cms/CMSImage.tsx`: media renderer around `next/image`.
- `src/components/cms/ArticleBody.tsx`: shared article body renderer.
- `src/app/insights/[slug]/page.tsx`: switch from static data to Payload.
- `src/components/home/InsightsSection.tsx`: switch from hardcoded insight cards to Payload data.
- `src/app/blog/page.tsx`: new blog index.
- `src/app/blog/[slug]/page.tsx`: new blog detail.
- `src/app/sitemap.ts`: include CMS-backed insight and blog routes.
- `src/scripts/seedInsights.ts`: seed existing insight content into Payload.
- `src/scripts/seedAdmin.ts`: optional first admin helper for development.
- `src/payload-types.ts`: generated Payload types.
- `src/app/(payload)/admin/importMap.js`: generated Payload import map.
- `README.md`: update local dev and deployment instructions.

Do not add a generic page builder in this phase. Keep existing marketing pages code-owned.

---

## Chunk 1: Project Prep And Dependency Baseline

### Task 1: Standardize On pnpm

**Files:**
- Modify: `package.json`
- Delete: `package-lock.json`
- Verify: `pnpm-lock.yaml`

- [ ] **Step 1: Confirm current package manager drift**

Run:

```bash
ls package-lock.json pnpm-lock.yaml
```

Expected: both files currently exist.

- [ ] **Step 2: Add package manager metadata**

Modify `package.json` to include a pnpm package manager entry. Use the locally installed pnpm version:

```bash
pnpm --version
```

Then add:

```json
{
  "packageManager": "pnpm@<detected-version>"
}
```

- [ ] **Step 3: Remove npm lockfile**

Run:

```bash
rm package-lock.json
pnpm install
```

Expected: `pnpm-lock.yaml` is updated and `package-lock.json` is gone.

- [ ] **Step 4: Verify existing app still works**

Run:

```bash
pnpm lint
pnpm build
```

Expected: both pass before Payload is added. If build fails for unrelated existing issues, record them before continuing.

- [ ] **Step 5: Commit prep**

```bash
git add package.json pnpm-lock.yaml package-lock.json
git commit -m "chore: standardize on pnpm"
```

### Task 2: Add Payload Dependencies And Compatible Scripts

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

- [ ] **Step 1: Install Payload packages**

Run:

```bash
pnpm add payload @payloadcms/next @payloadcms/db-mongodb @payloadcms/richtext-lexical @payloadcms/plugin-seo payload-cloudinary graphql sharp cross-env
```

Expected: dependencies are added.

- [ ] **Step 2: Add Payload scripts**

Modify `package.json` scripts:

```json
{
  "dev": "cross-env NODE_OPTIONS=--no-deprecation next dev",
  "build": "cross-env NODE_OPTIONS=--no-deprecation next build",
  "start": "next start",
  "lint": "eslint",
  "payload": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload",
  "generate:types": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types",
  "generate:importmap": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:importmap",
  "seed:insights": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload run src/scripts/seedInsights.ts",
  "seed:admin": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload run src/scripts/seedAdmin.ts"
}
```

Important: remove `--turbopack` from `build` initially. Revisit Turbopack only after Payload admin builds cleanly.

- [ ] **Step 3: Verify package install**

Run:

```bash
pnpm install
pnpm payload --help
```

Expected: Payload CLI help prints.

- [ ] **Step 4: Commit dependency baseline**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add payload cms dependencies"
```

---

## Chunk 2: Payload Shell

### Task 3: Add Environment Documentation

**Files:**
- Create: `.env.example`
- Do not commit real `.env` secrets.

- [ ] **Step 1: Add environment template**

Create `.env.example`:

```dotenv
# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
PAYLOAD_PUBLIC_APP_URL=http://localhost:3000
PAYLOAD_SECRET=replace-with-long-random-secret
NEXT_PRIVATE_DRAFT_SECRET=replace-with-long-random-secret

# Railway MongoDB
DATABASE_URI=mongodb://localhost:27017/dsource-site

# Cloudinary
CLOUDINARY_CLOUD_NAME=replace-me
CLOUDINARY_API_KEY=replace-me
CLOUDINARY_API_SECRET=replace-me
CLOUDINARY_FOLDER=dsource-media

# Existing contact form
RESEND_API_KEY=replace-me
CONTACT_TO_EMAIL=replace-me
CONTACT_FROM_EMAIL=replace-me
```

- [ ] **Step 2: Commit env docs**

```bash
git add .env.example
git commit -m "docs: add cms environment template"
```

### Task 4: Add Payload Route Group

**Files:**
- Create: `src/app/(payload)/admin/[[...segments]]/page.tsx`
- Create: `src/app/(payload)/admin/[[...segments]]/not-found.tsx`
- Create: `src/app/(payload)/api/[...slug]/route.ts`
- Create: `src/app/(payload)/api/graphql/route.ts`
- Create: `src/app/(payload)/api/graphql-playground/route.ts`
- Create: `src/app/(payload)/layout.tsx`

- [ ] **Step 1: Add Payload admin page**

Use the current Payload Next pattern:

```tsx
import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config, params, searchParams })

export default RootPage({ config })
```

- [ ] **Step 2: Add Payload API routes**

Use Payload's Next handlers for REST, GraphQL, and GraphQL playground. Check the installed `@payloadcms/next` package examples if exports differ from the demo.

- [ ] **Step 3: Add route-group layout**

Create a minimal layout that renders `{children}` and imports Payload admin styles if required by the installed version.

- [ ] **Step 4: Generate import map after config exists**

Do not run this until `src/payload.config.ts` exists in Task 8.

---

## Chunk 3: Access, Fields, Collections

### Task 5: Add Access Helpers

**Files:**
- Create: `src/access/isAdmin.ts`
- Create: `src/access/publishedOnly.ts`

- [ ] **Step 1: Implement admin helper**

```ts
import type { Access, FieldAccess } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes('admin'))
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes('admin'))
}
```

- [ ] **Step 2: Implement published read helper**

```ts
import type { Access } from 'payload'

export const publishedOnly: Access = ({ req: { user } }) => {
  if (user?.roles?.includes('admin')) return true

  return {
    _status: {
      equals: 'published',
    },
  }
}
```

### Task 6: Add Slug And Rich Text Field Helpers

**Files:**
- Create: `src/utilities/formatSlug.ts`
- Create: `src/fields/slug.ts`
- Create: `src/fields/richText.ts`

- [ ] **Step 1: Implement slug formatter**

```ts
import type { FieldHook } from 'payload'

const format = (value: string): string =>
  value
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string') return format(value)

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback]
      if (typeof fallbackData === 'string') return format(fallbackData)
    }

    return value
  }
```

- [ ] **Step 2: Implement slug field**

```ts
import type { Field } from 'payload'

import { formatSlug } from '@/utilities/formatSlug'

export const slugField = (fieldToUse = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  index: true,
  required: true,
  unique: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [formatSlug(fieldToUse)],
  },
})
```

- [ ] **Step 3: Implement rich text helper**

```ts
import type { RichTextField } from 'payload'

export const richTextField = (overrides: Partial<RichTextField> = {}): RichTextField => ({
  name: 'content',
  type: 'richText',
  required: true,
  ...overrides,
})
```

### Task 7: Add Collections

**Files:**
- Create: `src/collections/Users.ts`
- Create: `src/collections/Media.ts`
- Create: `src/collections/Categories.ts`
- Create: `src/collections/Insights.ts`
- Create: `src/collections/BlogPosts.ts`
- Create: `src/lib/payload/revalidate.ts`
- Create: `src/lib/payload/paths.ts`
- Create: `src/utilities/formatPreviewURL.ts`

- [ ] **Step 1: Add route path helpers**

```ts
export const insightPath = (slug: string) => `/insights/${slug}`
export const blogPostPath = (slug: string) => `/blog/${slug}`
```

- [ ] **Step 2: Add revalidation helper**

```ts
import { revalidatePath } from 'next/cache'

export const revalidateInsight = (slug?: string | null) => {
  revalidatePath('/')
  revalidatePath('/insights')
  if (slug) revalidatePath(`/insights/${slug}`)
}

export const revalidateBlogPost = (slug?: string | null) => {
  revalidatePath('/')
  revalidatePath('/blog')
  if (slug) revalidatePath(`/blog/${slug}`)
}
```

- [ ] **Step 3: Add `Users` collection**

Fields: `firstName`, `lastName`, `roles`, optional `photo`.

Access: admins create/update/delete; authenticated users can read users needed for author display, or public read only selected author fields.

- [ ] **Step 4: Add `Media` collection**

Fields: required `alt`, optional `caption`.

Upload config:

```ts
upload: {
  imageSizes: [
    { name: 'thumbnail', width: 400 },
    { name: 'card', width: 800 },
    { name: 'hero', width: 1600 },
  ],
  mimeTypes: ['image/*'],
}
```

Access: public read, admin writes.

- [ ] **Step 5: Add `Categories` collection**

Fields: `title`, `slug`, optional `description`.

Keep this blog-focused. Insights do not need categories initially.

- [ ] **Step 6: Add `Insights` collection**

Fields:

- `title`
- `slug`
- `excerpt`
- `cardIcon` upload to `media`, optional but recommended
- `featuredImage` upload to `media`, optional
- `content` rich text
- `publishedAt`
- `displayOrder`
- `relatedInsights` self relationship, optional

Admin:

- `useAsTitle: 'title'`
- preview/live preview URL points to `/insights/:slug`

Access:

- public published reads
- admin writes

Versions:

```ts
versions: {
  drafts: true,
}
```

Hooks:

- revalidate current slug on change
- revalidate previous slug on slug change
- revalidate listing and detail on delete

- [ ] **Step 7: Add `BlogPosts` collection**

Fields:

- `title`
- `slug`
- `excerpt`
- `featuredImage`
- `content` rich text
- `authors` relationship to `users`, hasMany
- `category` relationship to `categories`, optional
- `publishedAt`
- `relatedPosts` self relationship, optional

Same access, drafts, preview, and revalidation pattern as `Insights`.

### Task 8: Add Payload Config

**Files:**
- Create: `src/payload.config.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Configure Payload**

Use MongoDB:

```ts
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor, UploadFeature } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { cloudinaryStorage } from 'payload-cloudinary'
import path from 'path'
import { fileURLToPath } from 'url'

import { BlogPosts } from './collections/BlogPosts'
import { Categories } from './collections/Categories'
import { Insights } from './collections/Insights'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: dirname,
    },
    user: Users.slug,
  },
  collections: [Users, Media, Categories, Insights, BlogPosts],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      UploadFeature({
        collections: {
          media: true,
        },
      }),
    ],
  }),
  plugins: [
    seoPlugin({
      collections: ['insights', 'blog-posts'],
      uploadsCollection: 'media',
    }),
    cloudinaryStorage({
      collections: {
        media: {
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
      config: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
        api_key: process.env.CLOUDINARY_API_KEY || '',
        api_secret: process.env.CLOUDINARY_API_SECRET || '',
      },
      folder: process.env.CLOUDINARY_FOLDER || 'dsource-media',
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
```

Adjust exact `cloudinaryStorage` options against the installed Payload package before committing.

- [ ] **Step 2: Wrap Next config**

Modify `next.config.ts` to use `withPayload`. Add `images.remotePatterns` for `res.cloudinary.com/<cloud-name>`.

- [ ] **Step 3: Generate Payload artifacts**

Run:

```bash
pnpm generate:importmap
pnpm generate:types
```

Expected:

- `src/app/(payload)/admin/importMap.js` generated
- `src/payload-types.ts` generated

- [ ] **Step 4: Run type/lint/build**

```bash
pnpm lint
pnpm build
```

Expected: build may require a valid `DATABASE_URI`. Use dev MongoDB.

- [ ] **Step 5: Commit Payload shell**

```bash
git add next.config.ts src package.json pnpm-lock.yaml .env.example
git commit -m "feat: add payload cms shell"
```

---

## Chunk 4: Frontend Query And Rendering

### Task 9: Add Payload Query Layer

**Files:**
- Create: `src/lib/payload/queries.ts`
- Create: `src/lib/payload/cache.ts`

- [ ] **Step 1: Implement raw query functions**

Functions:

- `fetchPublishedInsights()`
- `fetchInsightBySlug(slug, draft)`
- `fetchPublishedBlogPosts()`
- `fetchBlogPostBySlug(slug, draft)`
- `fetchPublishedInsightSlugs()`
- `fetchPublishedBlogSlugs()`

Each should call `getPayload({ config })`, use `depth`, `select`, `_status`, and `publishedAt <= now` for published results.

- [ ] **Step 2: Implement cached wrappers**

Use `unstable_cache` for published reads. Draft reads should call raw queries directly.

Use cache keys like:

- `['insights']`
- `['insight', slug]`
- `['blog-posts']`
- `['blog-post', slug]`

- [ ] **Step 3: Verify with a temporary smoke script**

Run a Payload script or route-level build after seeding content. Do not keep temporary files.

### Task 10: Add Minimal CMS Render Components

**Files:**
- Create: `src/components/cms/RichText.tsx`
- Create: `src/components/cms/CMSImage.tsx`
- Create: `src/components/cms/ArticleBody.tsx`

- [ ] **Step 1: Add rich text renderer**

Use `@payloadcms/richtext-lexical/react`.

Support:

- paragraphs
- headings
- links
- lists
- uploads/media

Do not add custom complex blocks yet.

- [ ] **Step 2: Add CMS image component**

Render Payload media through `next/image` when width/height/url are available. Fall back to plain `img` only if necessary.

- [ ] **Step 3: Add article body wrapper**

Keep styling consistent with the current insight page typography in `src/app/insights/[slug]/page.tsx`.

### Task 11: Convert Insights To Payload

**Files:**
- Modify: `src/app/insights/[slug]/page.tsx`
- Modify: `src/components/home/InsightsSection.tsx`
- Optional delete later: `src/data/insights.ts`

- [ ] **Step 1: Replace static detail query**

Use `fetchInsightBySlug(slug, draft)` instead of `insights.find`.

- [ ] **Step 2: Replace `generateStaticParams`**

Use `fetchPublishedInsightSlugs()`.

- [ ] **Step 3: Replace metadata generation**

Prefer SEO plugin `meta` fields, fallback to `title` and `excerpt`.

- [ ] **Step 4: Replace homepage cards**

Fetch published insights sorted by `displayOrder`, then `publishedAt`.

- [ ] **Step 5: Keep route behavior**

If no insight is found, call `notFound()`.

### Task 12: Add Blog Routes

**Files:**
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Build blog listing**

Use existing design language: restrained section, article cards, featured image, title, excerpt, date, category if present.

- [ ] **Step 2: Build blog detail page**

Use same article body renderer as insights, with blog-specific header metadata.

- [ ] **Step 3: Add static params and metadata**

Use Payload query layer. Draft mode bypasses cached reads.

- [ ] **Step 4: Add navigation link if desired**

Modify `src/components/layout/Header.tsx` only if the site should expose Blog in primary navigation now.

### Task 13: Update Sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Replace static insight sitemap data**

Query CMS insights.

- [ ] **Step 2: Add blog sitemap entries**

Query CMS blog posts.

- [ ] **Step 3: Keep static routes unchanged**

Do not introduce `next-sitemap`.

---

## Chunk 5: Preview, Seed, And Deployment

### Task 14: Add Preview Routes

**Files:**
- Create: `src/app/(frontend)/api/preview/route.ts`
- Create: `src/app/(frontend)/api/exit-preview/route.ts`
- Modify: collections preview config if needed.

- [ ] **Step 1: Add preview route**

Follow the demo pattern: require `url`, require `NEXT_PRIVATE_DRAFT_SECRET`, authenticate Payload user, enable `draftMode`, redirect.

- [ ] **Step 2: Add exit preview route**

Disable `draftMode` and return a simple response.

- [ ] **Step 3: Verify from admin preview**

Create a draft blog post and verify preview shows unpublished content only after entering draft mode.

### Task 15: Seed Existing Insights

**Files:**
- Create: `src/scripts/seedInsights.ts`
- Optional create: `src/scripts/seedAdmin.ts`

- [ ] **Step 1: Map static content**

Read from current `src/data/insights.ts`.

Map:

- `title`
- `slug`
- `excerpt`
- `sections` into rich text content
- existing icons/images into media records where practical
- `_status: 'published'`
- `publishedAt`
- `displayOrder`

- [ ] **Step 2: Make seed idempotent**

For each insight slug:

- find existing by slug
- update if present
- create if absent

- [ ] **Step 3: Run seed locally against dev MongoDB**

```bash
pnpm seed:insights
```

Expected: four insight documents exist in Payload.

### Task 16: Railway And R2 Deployment Setup

**Files:**
- Modify: `README.md`
- Optional create: `railway.json` if needed after testing.

- [ ] **Step 1: Provision services**

In Railway:

- app service
- dev MongoDB
- production MongoDB

In Cloudflare:

- Cloudinary cloud name
- Cloudinary API key
- Cloudinary API secret
- optional Cloudinary folder name

- [ ] **Step 2: Set Railway variables**

Development environment:

- `DATABASE_URI` points to dev MongoDB
- `CLOUDINARY_CLOUD_NAME` points to the Cloudinary account
- `NEXT_PUBLIC_SITE_URL` points to dev URL

Production environment:

- `DATABASE_URI` points to production MongoDB
- `CLOUDINARY_CLOUD_NAME` points to the Cloudinary account
- `NEXT_PUBLIC_SITE_URL` points to production URL

Both:

- `PAYLOAD_SECRET`
- `NEXT_PRIVATE_DRAFT_SECRET`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `CLOUDINARY_FOLDER`
- existing Resend/contact vars

- [ ] **Step 3: Configure build/start**

Use:

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

Do not run destructive seeds in production deploy.

- [ ] **Step 4: Keep one app instance initially**

ISR/cache invalidation is simplest on one Railway instance. If scaling horizontally later, add a shared cache handler.

### Task 17: Verification

**Files:**
- No new files required unless tests are added.

- [ ] **Step 1: Local admin smoke test**

Run:

```bash
pnpm dev
```

Verify:

- `/admin` loads
- admin user can log in
- media upload works
- insight edit saves
- blog post publish saves

- [ ] **Step 2: Public route smoke test**

Verify:

- `/`
- `/insights/trusted-workforce-productivity`
- `/blog`
- `/blog/<new-post-slug>`
- `/sitemap.xml`

- [ ] **Step 3: Cache/revalidation test**

Publish a blog post, then verify:

- listing updates
- detail page appears
- editing title/excerpt revalidates listing and detail
- deleting/unpublishing removes public route or returns 404

- [ ] **Step 4: Production build**

```bash
pnpm lint
pnpm build
pnpm start
```

Expected: production server works locally with dev MongoDB and R2 credentials.

- [ ] **Step 5: Browser verification**

Use browser automation to capture desktop and mobile screenshots of:

- home insights section
- insight detail page
- blog listing
- blog detail page
- admin media upload flow if practical

### Task 18: Final Cleanup

**Files:**
- Modify: `README.md`
- Optional delete: `src/data/insights.ts` after seed and query migration are complete.

- [ ] **Step 1: Remove unused static insight data**

Only delete `src/data/insights.ts` after all imports are gone.

Run:

```bash
rg "data/insights|insights" src
```

Confirm no stale imports.

- [ ] **Step 2: Update README**

Document:

- pnpm usage
- local MongoDB/dev Railway MongoDB
- R2 setup
- Payload admin
- seed commands
- Railway deployment env vars
- draft preview behavior

- [ ] **Step 3: Final verification**

```bash
pnpm lint
pnpm build
```

- [ ] **Step 4: Commit final integration**

```bash
git add .
git commit -m "feat: add payload blog cms"
```

---

## Execution Notes

- Use dev MongoDB for all local development. Production MongoDB should only be touched by production deploys/admin users.
- Do not commit `.env`.
- Use R2 from the start for media in deployed environments. Local disk uploads are acceptable only for temporary local experiments.
- Keep the CMS scope small: blog posts, insights, and media. Existing marketing pages stay code-owned.
- Start with one Railway app instance. Add a shared Next cache handler only if horizontal scaling becomes necessary.
- Treat generated files (`payload-types.ts`, `admin/importMap.js`) as committed source artifacts unless the team decides otherwise.
