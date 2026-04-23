import type { Metadata } from "next";
import StatCard from "@/components/ui/StatCard";

export const metadata: Metadata = {
  title: {
    absolute: "Why ABIS: Federal Personnel Security Software | DataSource",
  },
  description:
    "ABIS automates Federal Personnel Security workflows — background investigations, Continuous Vetting, adjudication, and Trusted Workforce 2.0 — built on 20+ years of PS expertise.",
  alternates: { canonical: "/why-abis" },
  openGraph: {
    title: "Why ABIS: Federal Personnel Security Software | DataSource",
    description:
      "ABIS automates Federal Personnel Security workflows — background investigations, Continuous Vetting, adjudication, and Trusted Workforce 2.0 — built on 20+ years of PS expertise.",
    url: "https://datasourceinc.com/why-abis",
  },
};

const stats = [
  {
    number: "25+",
    description:
      "Years of Subject Matter Expertise in Federal Agency Personnel Security",
    iconSrc: "/shield-globe.svg",
    iconAlt: "Shield with globe",
  },
  {
    number: "31+",
    description: "Years of Software Development Experience",
    iconSrc: "/gears.svg",
    iconAlt: "Interlocking gears",
  },
];

const reasons = [
  {
    number: "1",
    title:
      "ABIS was designed exclusively for Federal Personnel Security so it is eminently intuitive for the PS workforce.",
    body: "No workarounds. No unnecessary processes or screens or data. And, everything you expect to see is right there.",
  },
  {
    number: "2",
    title: "Comprehensive End-to-End Automation.",
    body: "ABIS is a comprehensive solution for Personnel Security. It automates all Personnel Security tasks across all tiers\u2014from pre-screening and adjudication to reporting\u2014reducing manual effort and improving accuracy. ABIS also provides advanced reporting and metrics capabilities.",
  },
  {
    number: "3",
    title: "Seamless Integration with Federal Systems.",
    body: "ABIS is optimally integrated with DCSA systems (eDelivery, Rap Back, CVS, OF79a, CE/CV) and major HR and contractor applications like USA Staffing, HRConnect, ServiceNow, CCURE, and others.",
  },
  {
    number: "4",
    title: "Dynamic, Configurable Architecture.",
    body: "ABIS allows agencies to adjust workflows, add case types, change case assignment methods, modify terminology, and much more without new code.",
  },
  {
    number: "5",
    title: "ABIS is up-to-date with Trusted Workforce.",
    body: "ABIS automates everything that can be automated in accordance with DCSA technical capabilities. We stay aware of what\u2019s coming and proactively plan new features so that our customers can effectively handle the TW workload.",
  },
];

export default function WhyAbisPage() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        {/* Page Title */}
        <h1 className="text-h1 text-primary-80 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]">
          Why ABIS
        </h1>

        {/* Stats Row */}
        <div className="mt-16 max-md:mt-10 grid grid-cols-2 max-md:grid-cols-1 gap-3">
          {stats.map((stat) => (
            <StatCard key={stat.number} {...stat} />
          ))}
        </div>

        {/* Five Reasons Section */}
        <div className="mt-[150px] max-md:mt-20 flex max-md:flex-col gap-[139px] max-md:gap-10">
          {/* Left column - Section heading */}
          <div className="shrink-0 max-md:shrink max-md:w-full pl-8 max-md:pl-0">
            <h2 className="text-h3 text-primary-80 tracking-[-0.8px] max-w-[439px] max-md:text-[28px] max-md:leading-[1.25] max-md:max-w-full">
              Five Reasons Why ABIS is the Premier Solution for Federal
              Personnel Security Offices
            </h2>
          </div>

          {/* Right column - Numbered list */}
          <div className="flex flex-col gap-14 max-md:gap-8 flex-1">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="flex max-md:flex-col gap-8 max-md:gap-4 items-start"
              >
                {/* Number */}
                <span className="text-h3 text-primary-80 tracking-[-0.8px] shrink-0 max-md:text-h3">
                  {reason.number}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <p className="text-h5 text-primary-80 leading-[1.2]">
                    {reason.title}
                  </p>
                  <p className="text-body-1 text-gray-100">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
