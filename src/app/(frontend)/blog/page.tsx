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
    <section>
      <div className="mx-auto max-w-[1200px] px-10 pb-14 pt-14 max-md:px-4 max-md:pb-10 max-md:pt-10">
        <div className="max-w-full">
          <div className="flex items-center gap-7 max-md:gap-4">
            <h1 className="text-h1 text-primary-80 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]">
              News
            </h1>
            <div
              aria-label="News discussion"
              role="img"
              className="flex size-24 shrink-0 items-center justify-center rounded-full bg-primary-10 text-primary-80 max-md:size-20"
            >
              <svg
                aria-hidden="true"
                className="size-14 max-md:size-11"
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
            </div>
          </div>
          <p className="mt-8 text-h3 text-primary-80 tracking-[-0.8px] max-md:text-[28px] max-md:leading-[1.25]">
            <span className="block">What&apos;s Happening In:</span>
            <span className="mt-2 block">
              Personnel Security Operations, Federal Workforce{" "}
              {/* <span className="whitespace-nowrap"> */}
                Technology, and Systems that keep Agencies Running Smoothly...
                {/* </span> */}
            {/* </span> */}
            {/* <span className="block"> */}
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-10 pb-20 max-md:px-4 max-md:pb-14">
        <div className="rounded-lg bg-light px-8 py-12 max-md:px-4 max-md:py-8">
          <div className="divide-y divide-gray-40/70 border-y border-gray-40/70">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post.slug}
                  className="grid grid-cols-[180px_1fr_auto] items-center gap-8 py-8 max-md:grid-cols-1 max-md:gap-3"
                >
                  <time className="text-body-2 text-gray-80">
                    {formatDate(post.publishedAt)}
                  </time>
                  <h2 className="text-big text-black">{post.title}</h2>
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
      </div>
    </section>
  );
}
