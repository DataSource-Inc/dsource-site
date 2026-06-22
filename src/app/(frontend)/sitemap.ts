import type { MetadataRoute } from "next";

import {
  fetchPublishedBlogPosts,
  fetchPublishedInsights,
} from "@/lib/payload/queries";

const BASE_URL = "https://datasourceinc.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [insights, blogPosts] = await Promise.all([
    fetchPublishedInsights(),
    fetchPublishedBlogPosts(),
  ]);

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
    lastModified: new Date(insight.updatedAt),
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }));

  return [...staticRoutes, ...insightRoutes, ...blogRoutes];
}
