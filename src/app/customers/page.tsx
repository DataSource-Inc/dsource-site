import { customers } from "@/data/customers";
import CustomerCycler from "@/components/customers/CustomerCycler";

const supportItems = [
  {
    icon: "/icons/partnership.svg",
    title: "True Partnership with Customers",
    description:
      "We know that everyone says it, but we truly do partner with our customers. We answer when customers call. We talk through ideas and the best way to implement a new feature or capability. Our customers have good ideas and we want to continue making ABIS the best it can be, so our common goals foster a productive partnership.",
  },
  {
    icon: "/icons/roundtables.svg",
    title: "Collaborative User Roundtables",
    description:
      'We meet periodically with our customers to share ideas and solutions, to identify and plan new capabilities, how some tasks can be automated, and of course, to plan for Trusted Workforce initiatives. We have found these user sessions ("roundtables") to be helpful and to contribute to the value ABIS provides.',
  },
  {
    icon: "/icons/expertise.svg",
    title: "Deep Expertise in Personnel Security",
    description:
      "We stay aware of what is going on in Personnel Security. It is a domain that seems to always be changing. Personnel Security is also integrated in so many business functions that opportunities for new automated interfaces often appear. Our team is knowledgeable enough to recognize those opportunities and make good suggestions.",
  },
  {
    icon: "/icons/reporting.svg",
    title: "Transparent Progress Reporting",
    description:
      "We provide transparency into our status and progress for customer requested enhancements so that they can be aware of what we are working on and what stage we're in. This helps Personnel Security planning efforts and enables them to provide accurate reporting to their management.",
  },
];

function PartnershipIcon() {
  return (
    <svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-[136px] max-md:size-[80px]"
      aria-hidden="true"
    >
      {/* Two people at table */}
      <rect
        x="20"
        y="80"
        width="96"
        height="4"
        rx="2"
        stroke="#084C79"
        strokeWidth="2"
      />
      <circle cx="45" cy="50" r="12" stroke="#084C79" strokeWidth="2" fill="none" />
      <path
        d="M30 80 C30 65 60 65 60 80"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="91" cy="50" r="12" stroke="#084C79" strokeWidth="2" fill="none" />
      <path
        d="M76 80 C76 65 106 65 106 80"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="58"
        y="80"
        width="4"
        height="30"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="74"
        y="80"
        width="4"
        height="30"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function RoundtablesIcon() {
  return (
    <svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-[136px] max-md:size-[80px]"
      aria-hidden="true"
    >
      {/* People in discussion */}
      <circle cx="68" cy="40" r="14" stroke="#084C79" strokeWidth="2" fill="none" />
      <path
        d="M48 75 C48 58 88 58 88 75"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="35" cy="55" r="10" stroke="#084C79" strokeWidth="2" fill="none" />
      <path
        d="M20 85 C20 72 50 72 50 85"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="101" cy="55" r="10" stroke="#084C79" strokeWidth="2" fill="none" />
      <path
        d="M86 85 C86 72 116 72 116 85"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="30"
        y="90"
        width="76"
        height="20"
        rx="4"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function ExpertiseIcon() {
  return (
    <svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-[136px] max-md:size-[80px]"
      aria-hidden="true"
    >
      {/* Shield with lock */}
      <path
        d="M68 20 L108 40 V76 C108 100 68 116 68 116 C68 116 28 100 28 76 V40 Z"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="54"
        y="62"
        width="28"
        height="24"
        rx="4"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="68" cy="56" r="10" stroke="#084C79" strokeWidth="2" fill="none" />
      <circle cx="68" cy="74" r="3" fill="#084C79" />
    </svg>
  );
}

function ReportingIcon() {
  return (
    <svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-[136px] max-md:size-[80px]"
      aria-hidden="true"
    >
      {/* Chart with upward trend */}
      <rect
        x="20"
        y="30"
        width="96"
        height="76"
        rx="4"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
      />
      <rect x="36" y="70" width="12" height="24" fill="#084C79" opacity="0.3" />
      <rect x="56" y="58" width="12" height="36" fill="#084C79" opacity="0.5" />
      <rect x="76" y="46" width="12" height="48" fill="#084C79" opacity="0.7" />
      <rect x="96" y="38" width="12" height="56" fill="#084C79" opacity="0.9" />
      <polyline
        points="42,66 62,54 82,42 102,34"
        stroke="#084C79"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="102" cy="34" r="3" fill="#084C79" />
    </svg>
  );
}

const iconComponents = [
  PartnershipIcon,
  RoundtablesIcon,
  ExpertiseIcon,
  ReportingIcon,
];

export default function CustomersPage() {
  return (
    <section className="bg-light">
      {/* Hero with CustomerCycler */}
      <CustomerCycler customers={customers} />

      {/* Supporting Our Customers Section */}
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-[150px] max-md:pt-20 pb-20 max-md:pb-14">
        <h2 className="text-h2 text-primary-80 tracking-[-1px] max-md:text-[32px] max-md:leading-[1.25] max-md:tracking-[-1px]">
          Supporting Our Customers
        </h2>

        {/* 2x2 Grid of support items */}
        <div className="mt-14 max-md:mt-10 grid grid-cols-2 max-md:grid-cols-1">
          {supportItems.map((item, index) => {
            const IconComponent = iconComponents[index];
            // Determine border classes based on position in 2x2 grid
            const isLeft = index % 2 === 0;
            const isTop = index < 2;
            const isLast = index === supportItems.length - 1;
            const borderClasses = [
              // Desktop: top row gets bottom padding, bottom row gets top padding
              isTop ? "pb-10" : "pt-10",
              isLeft ? "pr-10 max-md:pr-0" : "pl-10 max-md:pl-0",
              // Desktop: top row border-bottom
              isTop ? "border-b border-gray-40" : "",
              // Desktop: left column border-right
              isLeft ? "border-r max-md:border-r-0 border-gray-40" : "",
              // Mobile: all items except last get bottom border + padding
              !isLast ? "max-md:border-b max-md:border-gray-40 max-md:pb-10" : "",
              // Mobile: all items except first get top padding
              index > 0 ? "max-md:pt-10" : "",
            ].join(" ");

            return (
              <div key={item.title} className={borderClasses}>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-6">
                    <IconComponent />
                    <h3 className="text-h5 text-primary-80 leading-[1.2]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body-1 text-gray-100 leading-[1.4]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
