import type { Metadata } from "next";
import Link from "next/link";

import CMSImage from "@/components/cms/CMSImage";
import { getCachedBlogPosts } from "@/lib/payload/cache";

export const metadata: Metadata = {
  title: "Blog | DataSource Inc.",
  description:
    "Updates and perspectives from DataSource on personnel security, federal workforce technology, and ABIS.",
  alternates: { canonical: "/blog" },
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default async function BlogPage() {
  const posts = await getCachedBlogPosts();

  return (
    <main className="bg-light">
      <section className="mx-auto max-w-[1200px] px-10 pb-20 pt-14 max-md:px-4 max-md:pb-14 max-md:pt-10">
        <div className="max-w-[760px]">
          <h1 className="text-h2 text-primary-80 max-md:text-[36px] max-md:leading-[1.2]">
            Blog
          </h1>
          <p className="mt-6 text-big leading-[1.45] text-gray-100">
            Practical notes on personnel security operations, federal workforce
            technology, and the systems that keep agencies moving.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex min-h-full flex-col bg-white transition-colors hover:bg-beige"
            >
              {typeof post.featuredImage !== "string" && (
                <div className="aspect-[4/3] overflow-hidden bg-beige">
                  <CMSImage
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    media={post.featuredImage}
                    size="card"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-7">
                <time className="text-body-2 text-gray-80">
                  {formatDate(post.publishedAt)}
                </time>
                <h2 className="mt-4 text-big text-primary-80">{post.title}</h2>
                <p className="mt-4 text-body-1 leading-[1.55] text-gray-100">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
