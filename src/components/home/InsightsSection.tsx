import Image from "next/image";
import InsightCard from "@/components/ui/InsightCard";

const INSIGHTS = [
  {
    title:
      "Breaking down how Trusted Workforce will improve productivity for Personnel Security offices",
    slug: "trusted-workforce-productivity",
    icon: "/insights/icon-1.svg",
  },
  {
    title:
      "How Personnel Security is at the hub of key operational processes for Federal Agencies",
    slug: "personnel-security-hub",
    icon: "/insights/icon-2.svg",
  },
  {
    title: "The benefits of Integration",
    slug: "benefits-of-integration",
    icon: "/insights/icon-3.svg",
  },
  {
    title: "How Personnel Security is always evolving",
    slug: "personnel-security-evolving",
    icon: "/insights/icon-4.svg",
  },
] as const;

export default function InsightsSection() {
  return (
    <section className=" py-24 max-md:py-16">
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4">
        {/* Top area: Title + Quote side-by-side on desktop */}
        <div className="flex items-start justify-between gap-5 max-md:flex-col max-md:gap-10">
          {/* Left: Section title */}
          <h2 className="text-h2 text-primary-80 max-w-[590px] shrink-0 max-md:text-[32px] max-md:leading-[1.25] max-md:tracking-[-1px] max-md:max-w-full">
            Personnel Security{" "}
            <br className="max-md:hidden" />
            Insights
          </h2>

          {/* Right: Quote block */}
          <div className="flex flex-col gap-7 pt-5 max-w-[590px] max-md:pt-0 max-md:max-w-full">
            {/* Quote icon */}
            <Image
              src="/icons/quote.svg"
              alt=""
              width={38}
              height={35}
              aria-hidden="true"
              className="shrink-0"
            />

            {/* Quote text */}
            <p className="text-big text-primary-80 leading-[1.4]">
              Personnel Security offices have a lot of work on their plates and
              Trusted Workforce is going to bring more. Because they regularly
              need information from Human Resources, Contracts, Security, and
              DCSA systems, they need the maximum amount of integration possible.
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="h-10 w-10 shrink-0 rounded-full bg-gray-40 overflow-hidden">
                <Image
                  src="/pam.png"               alt="Pamela Hopkins"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-body-1 text-gray-100">
                Pamela Hopkins, President &amp; CEO
              </p>
            </div>
          </div>
        </div>

        {/* Insight cards grid */}
        <div className="mt-16 grid grid-cols-4 gap-3 max-md:grid-cols-1 max-md:gap-3">
          {INSIGHTS.map((insight) => (
            <InsightCard
              key={insight.slug}
              title={insight.title}
              slug={insight.slug}
              icon={insight.icon}
              horizontalOnMobile
            />
          ))}
        </div>
      </div>
    </section>
  );
}
