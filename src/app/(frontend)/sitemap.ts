import type { MetadataRoute } from "next";

import { insights } from "@/data/insights";
import { fetchPublishedBlogPosts } from "@/lib/payload/queries";

const BASE_URL = "https://www.datasourceinc.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await fetchPublishedBlogPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/why-abis",
    "/customers",
    "/blog",
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

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }));

  return [...staticRoutes, ...insightRoutes, ...blogRoutes];
}
