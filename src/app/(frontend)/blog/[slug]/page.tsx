import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import ArticleBody from "@/components/cms/ArticleBody";
import CMSImage from "@/components/cms/CMSImage";
import {
  getCachedBlogPost,
  getCachedBlogPosts,
} from "@/lib/payload/cache";
import { getMediaURL } from "@/lib/payload/media";
import { fetchBlogPostBySlug } from "@/lib/payload/queries";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export async function generateStaticParams() {
  const posts = await getCachedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { isEnabled: draft } = await draftMode();
  const post = draft
    ? await fetchBlogPostBySlug(slug, true)
    : await getCachedBlogPost(slug);

  if (!post) return {};

  const image =
    post.meta?.image && typeof post.meta.image !== "string"
      ? getMediaURL(post.meta.image)
      : post.featuredImage && typeof post.featuredImage !== "string"
        ? getMediaURL(post.featuredImage)
        : "";
  const description =
    post.meta?.description || `News from DataSource: ${post.title}`;

  return {
    title: `${post.meta?.title || post.title} | DataSource Inc.`,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.meta?.title || post.title} | DataSource Inc.`,
      description,
      images: image ? [{ url: image }] : undefined,
      url: `https://datasourceinc.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled: draft } = await draftMode();
  const post = draft
    ? await fetchBlogPostBySlug(slug, true)
    : await getCachedBlogPost(slug);

  if (!post) notFound();

  return (
    <section className="bg-light">
      <article className="mx-auto max-w-[1200px] px-10 pb-20 pt-14 max-md:px-4 max-md:pb-14 max-md:pt-10">
        <div className="mx-auto max-w-[760px]">
          <time className="text-body-1 text-gray-80">
            {formatDate(post.publishedAt)}
          </time>
          <h1 className="mt-5 text-h3 text-primary-80 tracking-[-0.8px] max-md:text-[32px] max-md:leading-[1.2]">
            {post.title}
          </h1>
        </div>

        {post.featuredImage && typeof post.featuredImage !== "string" && (
          <div className="mx-auto mt-12 max-w-[920px] overflow-hidden rounded-lg bg-beige">
            <CMSImage
              className="h-auto w-full"
              media={post.featuredImage}
              priority
              size="hero"
            />
          </div>
        )}

        <div className="mx-auto mt-14 max-w-[760px]">
          <ArticleBody content={post.content} />
        </div>
      </article>
    </section>
  );
}
