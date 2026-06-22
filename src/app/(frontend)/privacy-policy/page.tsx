import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DataSource is committed to protecting your privacy. Read our Privacy Policy to learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | DataSource Inc.",
    url: "https://datasourceinc.com/privacy-policy",
  },
};

const sections = [
  {
    heading: "Collection of your Personal Information",
    body: (
      <>
        <p>
          DataSource automatically collects information about your computer
          hardware and software, including your IP address (considered personally
          identifiable information), browser type, access times and referring
          website addresses. This information is used by DataSource for the
          operation of the service, to maintain quality of the service, and to
          provide general statistics regarding use of the DataSource website. We
          also collect personally identifiable information provided by you,
          including: Name, Title and Email address.
        </p>
        <p>
          DataSource encourages you to review the privacy statements of websites
          you choose to link to from the DataSource website so that you can
          understand how those websites collect, use and share your information.
          DataSource is not responsible for the privacy statements or other
          content on websites outside of the DataSource website.
        </p>
      </>
    ),
  },
  {
    heading: "Use of your Personal Information",
    body: (
      <>
        <p>
          DataSource collects and uses your personal information to operate the
          DataSource website and deliver the services you have requested.
          DataSource also uses your personally identifiable information to inform
          you of other products or services available from DataSource. DataSource
          may also contact you via surveys to learn about your opinion of current
          services or of potential new services that may be offered.
        </p>
        <p>
          DataSource does not sell, rent or lease its customer lists to third
          parties.
        </p>
        <p>
          DataSource does not collect, use or disclose sensitive personal
          information, such as race, religion, or political affiliations.
        </p>
        <p>
          DataSource keeps track of the web pages our customers visit within the
          DataSource website to determine which DataSource services are the most
          popular. This data is used to deliver customized content and
          advertising within the DataSource website to customers whose behavior
          indicates that they are interested in a particular subject area.
        </p>
        <p>
          The DataSource website will disclose your personal information, without
          notice, only if required to do so by law or in the good faith belief
          that such action is necessary to: (a) conform to the edicts of the law
          or comply with legal process served on DataSource or the site; (b)
          protect and defend the rights or property of DataSource; and, (c) act
          under exigent circumstances to protect the personal safety of users of
          DataSource, or the public.
        </p>
      </>
    ),
  },
  {
    heading: "Use of Cookies",
    body: (
      <>
        <p>
          The DataSource website uses &quot;cookies&quot; to help you personalize
          your online experience. A cookie is a text file that is placed on your
          hard disk by a web page server. Cookies cannot be used to run programs
          or deliver viruses to your computer. Cookies are uniquely assigned to
          you and can only be read by a web server in the domain that issued the
          cookie to you.
        </p>
        <p>
          One of the primary purposes of cookies is to provide a convenience
          feature to save you time. The purpose of a cookie is to tell the web
          server that you have returned to a specific page. For example, if you
          personalize DataSource pages, or register with a DataSource site or
          services, a cookie helps DataSource recall your specific information on
          subsequent visits.
        </p>
        <p>
          You have the ability to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. If you choose to decline
          cookies, you may not be able to fully experience the interactive
          features of the DataSource services or websites you visit.
        </p>
      </>
    ),
  },
  {
    heading: "Security of your Personal Information",
    body: (
      <p>
        DataSource secures your personal information from unauthorized access,
        use or disclosure. DataSource secures the personally identifiable
        information you provide on computer servers in a controlled, secure
        environment, protected from unauthorized access, use or disclosure.
      </p>
    ),
  },
  {
    heading: "Changes to this Statement",
    body: (
      <p>
        DataSource will occasionally update this Statement of Privacy to reflect
        company and customer feedback. DataSource encourages you to periodically
        review this Statement to be informed of how DataSource is protecting your
        information.
      </p>
    ),
  },
  {
    heading: "Contact Information",
    body: (
      <p>
        DataSource welcomes your comments regarding this Statement of Privacy. If
        you believe that DataSource has not adhered to this Statement, please
        contact DataSource at{" "}
        <a
          href="mailto:lklotzsche@datasourceinc.com"
          className="underline hover:text-primary-80 transition-colors"
        >
          lklotzsche@datasourceinc.com
        </a>
        . We will use commercially reasonable efforts to promptly determine and
        remedy the problem.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        {/* Header: Title + Intro */}
        <div className="flex max-md:flex-col justify-between items-start gap-8 max-md:gap-6">
          {/* Left: Title and date */}
          <div className="flex flex-col gap-4 shrink-0">
            <h1 className="text-h1 text-primary-100 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]">
              Privacy Policy
            </h1>
            <p className="text-big text-gray-100">January 2026</p>
          </div>

          {/* Right: Intro paragraph */}
          <div className="max-w-[692px] pt-3 max-md:pt-0">
            <p className="text-h5 text-primary-100 leading-[1.2] max-md:text-big max-md:leading-[1.4]">
              DataSource is committed to protecting your privacy and developing
              technology that gives you the most powerful and safe online
              experience. This Statement of Privacy applies to the DataSource
              website and governs data collection and usage. By using the
              DataSource website, you consent to the data practices described in
              this statement.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-40 my-16 max-md:my-10" />

        {/* Sections */}
        <div className="flex flex-col gap-14 max-md:gap-10">
          {sections.map((section) => (
            <div
              key={section.heading}
              className="flex max-md:flex-col justify-between items-start gap-8 max-md:gap-4"
            >
              {/* Section heading */}
              <h2 className="text-h4 text-primary-100 tracking-[-0.64px] w-[488px] shrink-0 max-md:w-full max-md:text-[24px] max-md:leading-[1.2]">
                {section.heading}
              </h2>

              {/* Section body */}
              <div className="max-w-[692px] text-big text-gray-100 leading-[1.4] [&>p]:mb-4 [&>p:last-child]:mb-0 max-md:text-body-1">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
