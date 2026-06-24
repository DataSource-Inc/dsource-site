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
          <h1 className="flex items-center gap-4 text-h2 text-primary-80 max-md:text-[36px] max-md:leading-[1.2]">
            <span
              aria-label="News discussion"
              role="img"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-10 text-primary-80 max-md:size-10"
            >
              <svg
                aria-hidden="true"
                className="size-7 max-md:size-6"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 21.5H8a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v8.5a4 4 0 0 1-4 4h-7.25L9 26v-4.5h-.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                />
                <path
                  d="M11 12.75h8M11 16.25h5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.25"
                />
              </svg>
            </span>
            News
          </h1>
          <p className="mt-6 text-h5 leading-[1.45] text-primary-80 max-md:text-big">
            <span className="block">What&apos;s Happening In:</span>
            <span className="mt-2 block">
              Personnel Security Operations, Federal Workforce Technology, and
            </span>
            <span className="block">
              The Systems that keep Agencies Running Smoothly...
            </span>
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
                  className="inline-flex justify-self-end rounded-lg bg-primary-80 px-5 py-3 text-body-1 font-semibold text-white transition-colors hover:bg-primary-100 max-md:justify-self-start"
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
