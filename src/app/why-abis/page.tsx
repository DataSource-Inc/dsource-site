import StatCard from "@/components/ui/StatCard";

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

function GlobeIcon() {
  return (
    <svg
      width="113"
      height="130"
      viewBox="0 0 113 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[113px] h-[130px] max-md:w-[59px] max-md:h-[68px]"
      aria-hidden="true"
    >
      <circle
        cx="56.5"
        cy="65"
        r="50"
        stroke="#084C79"
        strokeWidth="2.5"
        fill="none"
      />
      <ellipse
        cx="56.5"
        cy="65"
        rx="25"
        ry="50"
        stroke="#084C79"
        strokeWidth="2.5"
        fill="none"
      />
      <line
        x1="6.5"
        y1="45"
        x2="106.5"
        y2="45"
        stroke="#084C79"
        strokeWidth="2.5"
      />
      <line
        x1="6.5"
        y1="85"
        x2="106.5"
        y2="85"
        stroke="#084C79"
        strokeWidth="2.5"
      />
      <line
        x1="56.5"
        y1="15"
        x2="56.5"
        y2="115"
        stroke="#084C79"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="140"
      height="143"
      viewBox="0 0 140 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[140px] h-[143px] max-md:w-[66px] max-md:h-[68px]"
      aria-hidden="true"
    >
      {/* Gear outer */}
      <path
        d="M70 10 L78 2 L86 10 L92 6 L96 16 L104 14 L104 24 L112 26 L108 34 L116 40 L110 46 L116 54 L108 56 L112 66 L104 66 L104 76 L96 74 L92 84 L86 80 L78 88 L70 80 L62 88 L54 80 L48 84 L44 74 L36 76 L36 66 L28 66 L32 56 L24 54 L30 46 L24 40 L32 34 L28 26 L36 24 L36 14 L44 16 L48 6 L54 10 L62 2 Z"
        stroke="#084C79"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="70" cy="45" r="18" stroke="#084C79" strokeWidth="2.5" fill="none" />
      {/* Code brackets */}
      <path
        d="M45 100 L30 115 L45 130"
        stroke="#084C79"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M95 100 L110 115 L95 130"
        stroke="#084C79"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="78"
        y1="98"
        x2="62"
        y2="132"
        stroke="#084C79"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
          <StatCard
            number="25+"
            description="Years of Subject Matter Expertise in Federal Agency Personnel Security"
            icon={<GlobeIcon />}
          />
          <StatCard
            number="31+"
            description="Years of Software Development Experience"
            icon={<CodeIcon />}
          />
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
