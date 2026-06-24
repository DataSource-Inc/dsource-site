import type { Metadata } from "next";
import Link from "next/link";

import { getCachedBlogPosts } from "@/lib/payload/cache";

export const metadata: Metadata = {
  title: "News | DataSource Inc.",
  description:
    "News and updates from DataSource on personnel security, federal workforce technology, and ABIS.",
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
    <section className="bg-light">
      <div className="mx-auto max-w-[1200px] px-10 pb-20 pt-14 max-md:px-4 max-md:pb-14 max-md:pt-10">
        <div className="max-w-[760px]">
          <h1 className="text-h2 text-primary-80 max-md:text-[36px] max-md:leading-[1.2]">
            News
          </h1>
          <p className="mt-6 text-big leading-[1.45] text-gray-100">
            Updates on personnel security operations, federal workforce
            technology, and the systems that keep agencies moving.
          </p>
        </div>

        <div className="mt-14 divide-y divide-gray-40/70 border-y border-gray-40/70">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article
                key={post.slug}
                className="grid grid-cols-[180px_1fr_auto] items-center gap-8 py-8 max-md:grid-cols-1 max-md:gap-3"
              >
                <time className="text-body-2 text-gray-80">
                  {formatDate(post.publishedAt)}
                </time>
                <h2 className="text-big text-primary-80">{post.title}</h2>
                <Link
                  href={`/blog/${post.slug}`}
                  className="justify-self-end text-body-1 font-semibold text-primary-80 underline-offset-4 transition-colors hover:text-primary-100 hover:underline max-md:justify-self-start"
                >
                  Read more
                </Link>
              </article>
            ))
          ) : (
            <p className="py-8 text-body-1 text-gray-100">
              No news posts have been published yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
