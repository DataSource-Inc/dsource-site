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
