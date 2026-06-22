import "server-only";

import config from "@payload-config";
import { getPayload } from "payload";

import type { BlogPost } from "@/payload-types";
import type { Where } from "payload";

const hasDatabase = Boolean(process.env.DATABASE_URI);

async function getPayloadClient() {
  if (!hasDatabase) return null;
  return getPayload({ config });
}

function slugWhere(slug: string): Where {
  return {
    slug: {
      equals: slug,
    },
  };
}

function publishedWhere(slug?: string): Where {
  const now = new Date().toISOString();
  const and: Where[] = [];

  if (slug) {
    and.push(slugWhere(slug));
  }

  and.push({
    _status: {
      equals: "published",
    },
  });

  and.push({
    publishedAt: {
      less_than_equal: now,
    },
  });

  return { and };
}

export async function fetchPublishedBlogPosts(): Promise<BlogPost[]> {
  const payload = await getPayloadClient();
  if (!payload) return [];

  const result = await payload.find({
    collection: "blog-posts",
    depth: 2,
    limit: 100,
    sort: "-publishedAt",
    where: publishedWhere(),
  });

  return result.docs;
}

export async function fetchPublishedBlogSlugs(): Promise<Pick<BlogPost, "slug">[]> {
  const payload = await getPayloadClient();
  if (!payload) return [];

  const result = await payload.find({
    collection: "blog-posts",
    depth: 0,
    limit: 300,
    select: {
      slug: true,
    },
    where: publishedWhere(),
  });

  return result.docs;
}

export async function fetchBlogPostBySlug(
  slug: string,
  draft = false,
): Promise<BlogPost | null> {
  const payload = await getPayloadClient();
  if (!payload) return null;

  const result = await payload.find({
    collection: "blog-posts",
    depth: 2,
    draft,
    limit: 1,
    overrideAccess: draft,
    where: draft ? slugWhere(slug) : publishedWhere(slug),
  });

  return result.docs[0] || null;
}
