import { insights } from "@/data/insights";
import { notFound } from "next/navigation";
import Link from "next/link";
import InsightCard from "@/components/ui/InsightCard";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};

  return {
    title: `${insight.title} | DataSource Inc.`,
    description: insight.excerpt,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const otherInsights = insights.filter((i) => i.slug !== slug);

  return (
    <section className="bg-light">
      {/* Article Header & Content */}
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        {/* Back Navigation */}
        <Link
          href="/#insights"
          className="inline-flex items-center gap-2 text-body-1 text-gray-100 hover:text-primary-80 transition-colors mb-10 max-md:mb-6"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Insights
        </Link>

        {/* Centered Article Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-[692px]">
            {/* Article Title */}
            <h1 className="text-h3 text-primary-80 tracking-[-0.8px] max-md:text-[28px] max-md:leading-[1.25]">
              {insight.title}
            </h1>

            {/* Icon / Illustration Area */}
            <div className="mt-16 max-md:mt-10 bg-beige rounded-lg relative h-[180px] overflow-hidden">
              {/* Decorative geometric lines */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/insights/geo-center.svg"
                alt=""
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[401px] pointer-events-none"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/insights/geo-right.svg"
                alt=""
                className="absolute right-[-200px] top-[-280px] w-[641px] h-[680px] -rotate-[124deg] -scale-y-100 pointer-events-none"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/insights/geo-left.svg"
                alt=""
                className="absolute left-[-267px] top-[-218px] w-[571px] h-[646px] -rotate-[120deg] pointer-events-none"
                aria-hidden="true"
              />
              {/* Icon */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={insight.icon}
                alt=""
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[135px] w-auto"
              />
            </div>

            {/* Article Body */}
            <div className="mt-16 max-md:mt-10 flex flex-col gap-8">
              {insight.sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h2 className="text-h5 text-primary-80">
                    {section.heading}
                  </h2>
                  {section.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full rounded-lg"
                    />
                  )}
                  {section.body && (
                    <p className="text-body-1 text-gray-100 leading-[1.6]">
                      {section.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* More Personnel Security Insights */}
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pb-20 max-md:pb-14">
        <h2 className="text-h2 text-primary-80 tracking-[-1px] max-md:text-[28px] max-md:leading-[1.25] max-md:tracking-[-0.5px]">
          More Personnel Security Insights:
        </h2>

        <div className="mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-3">
          {otherInsights.map((other) => (
            <InsightCard
              key={other.slug}
              title={other.title}
              slug={other.slug}
              icon={other.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
