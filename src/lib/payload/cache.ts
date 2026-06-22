import "server-only";

import { unstable_cache } from "next/cache";

import {
  fetchBlogPostBySlug,
  fetchPublishedBlogPosts,
  fetchPublishedBlogSlugs,
} from "./queries";

export const getCachedBlogPosts = unstable_cache(
  fetchPublishedBlogPosts,
  ["cms", "blog-posts"],
);

export const getCachedBlogSlugs = unstable_cache(
  fetchPublishedBlogSlugs,
  ["cms", "blog-slugs"],
);

export function getCachedBlogPost(slug: string) {
  return unstable_cache(
    () => fetchBlogPostBySlug(slug, false),
    ["cms", "blog-post", slug],
  )();
}
