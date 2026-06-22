import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import InsightCard from "@/components/ui/InsightCard";
import ArticleBody from "@/components/cms/ArticleBody";
import CMSImage from "@/components/cms/CMSImage";
import { getCachedInsight, getCachedInsights } from "@/lib/payload/cache";
import { getMediaURL } from "@/lib/payload/media";
import { fetchInsightBySlug } from "@/lib/payload/queries";

const FALLBACK_ICONS = [
  "/insights/icon-1.svg",
  "/insights/icon-2.svg",
  "/insights/icon-3.svg",
  "/insights/icon-4.svg",
];

export async function generateStaticParams() {
  const insights = await getCachedInsights();
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled: draft } = await draftMode();
  const insight = draft
    ? await fetchInsightBySlug(slug, true)
    : await getCachedInsight(slug);
  if (!insight) return {};

  return {
    title: `${insight.meta?.title || insight.title} | DataSource Inc.`,
    description: insight.meta?.description || insight.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: `${insight.meta?.title || insight.title} | DataSource Inc.`,
      description: insight.meta?.description || insight.excerpt,
      url: `https://datasourceinc.com/insights/${slug}`,
      images:
        insight.meta?.image && typeof insight.meta.image !== "string"
          ? [{ url: getMediaURL(insight.meta.image) }]
          : undefined,
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled: draft } = await draftMode();
  const insight = draft
    ? await fetchInsightBySlug(slug, true)
    : await getCachedInsight(slug);
  if (!insight) notFound();

  const allInsights = await getCachedInsights();
  const otherInsights = allInsights.filter((i) => i.slug !== slug);
  const icon = getMediaURL(insight.cardIcon, "card");

  return (
    <section className="bg-light">
      {/* Article Header & Content */}
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        {/* Centered Article Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-[692px]">
            {/* Article Title */}
            <h1 className="text-h3 text-primary-80 tracking-[-0.8px] max-md:text-[28px] max-md:leading-[1.25]">
              {insight.title}
            </h1>

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
              {icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={icon}
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[135px] w-auto"
                />
              )}
            </div>

            {insight.featuredImage && typeof insight.featuredImage !== "string" && (
              <CMSImage
                className="mt-10 h-auto w-full rounded-lg"
                media={insight.featuredImage}
                priority
                size="hero"
              />
            )}

            {/* Article Body */}
            <div className="mt-16 max-md:mt-10">
              <ArticleBody content={insight.content} />
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
          {otherInsights.map((other, index) => (
            <InsightCard
              key={other.slug}
              title={other.title}
              slug={other.slug}
              icon={getMediaURL(other.cardIcon, "card") || FALLBACK_ICONS[index % FALLBACK_ICONS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
