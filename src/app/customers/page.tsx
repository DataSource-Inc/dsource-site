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
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="size-[136px] max-md:size-[80px]"
                    />
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
