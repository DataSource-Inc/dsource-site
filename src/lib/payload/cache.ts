import "server-only";

import { unstable_cache } from "next/cache";

import {
  fetchBlogPostBySlug,
  fetchInsightBySlug,
  fetchPublishedBlogPosts,
  fetchPublishedBlogSlugs,
  fetchPublishedInsights,
  fetchPublishedInsightSlugs,
} from "./queries";

export const getCachedInsights = unstable_cache(
  fetchPublishedInsights,
  ["cms", "insights"],
);

export const getCachedInsightSlugs = unstable_cache(
  fetchPublishedInsightSlugs,
  ["cms", "insight-slugs"],
);

export function getCachedInsight(slug: string) {
  return unstable_cache(
    () => fetchInsightBySlug(slug, false),
    ["cms", "insight", slug],
  )();
}

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
