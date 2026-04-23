import type { Metadata } from "next";
import Image from "next/image";
import RequestForm from "@/components/contact/RequestForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DataSource to learn more about the ABIS Personnel Security platform.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | DataSource Inc.",
    url: "https://datasourceinc.com/contact",
  },
};

/* ── Inline SVG icons for contact info ── */

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.667 3.333H3.333c-.916 0-1.658.75-1.658 1.667l-.008 10c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V5c0-.917-.75-1.667-1.666-1.667zm0 3.334L10 10.833 3.333 6.667V5L10 9.167 16.667 5v1.667z"
        fill="#084C79"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.516 8.683a13.393 13.393 0 0 0 5.8 5.8l1.934-1.933a.879.879 0 0 1 .9-.217c.991.325 2.058.5 3.15.5a.836.836 0 0 1 .833.834v3.083a.836.836 0 0 1-.833.833A14.167 14.167 0 0 1 3.133 3.417.836.836 0 0 1 3.967 2.583H7.05a.836.836 0 0 1 .833.834c0 1.091.175 2.158.5 3.15a.879.879 0 0 1-.217.9L6.233 9.4l-.717-.717z"
        fill="#084C79"
      />
    </svg>
  );
}

function GsaIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#084C79"
        fontSize="8"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        GSA
      </text>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 1.667A5.838 5.838 0 0 0 4.167 7.5C4.167 12.083 10 18.333 10 18.333s5.833-6.25 5.833-10.833A5.838 5.838 0 0 0 10 1.667zm0 7.916a2.083 2.083 0 1 1 0-4.166 2.083 2.083 0 0 1 0 4.166z"
        fill="#084C79"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill="#084C79"
      />
    </svg>
  );
}

/* ── Icon badge wrapper ── */
function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex shrink-0 items-center justify-center size-[44px] bg-beige">
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        {/* Page Title */}
        <h1 className="text-h1 text-primary-80 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]">
          Contact Us
        </h1>

        {/* Two-column layout */}
        <div className="mt-14 max-md:mt-10 flex max-md:flex-col gap-10">
          {/* ── Left Column: Contact Info ── */}
          <div className="flex flex-col justify-between w-[367px] max-md:w-full shrink-0">
            {/* Name + Title */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-h5 text-primary-80 leading-[1.2]">
                    Lukas Klotzsche
                  </h2>
                  <a
                    href="https://www.linkedin.com/in/lukas-klotzsche/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lukas Klotzsche on LinkedIn"
                    className="text-primary-80 hover:text-primary-100 transition-colors"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <p className="text-body-1 leading-[1.4] text-gray-100">
                  Director of Sales and Marketing.
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <IconBadge>
                    <EmailIcon />
                  </IconBadge>
                  <a
                    href="mailto:lklotzsche@datasourceinc.com"
                    className="text-body-1 leading-[1.4] text-primary-80 hover:underline"
                  >
                    lklotzsche@datasourceinc.com
                  </a>
                </div>

                {/* Cell */}
                <div className="flex items-center gap-4">
                  <IconBadge>
                    <PhoneIcon />
                  </IconBadge>
                  <div className="flex flex-col gap-1">
                    <span className="text-body-2 leading-[1.4] text-gray-100">
                      Cell
                    </span>
                    <a
                      href="tel:561-502-2822"
                      className="text-body-1 leading-[1.4] text-primary-80 hover:underline"
                    >
                      561-502-2822
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-center gap-4">
                  <IconBadge>
                    <PhoneIcon />
                  </IconBadge>
                  <div className="flex flex-col gap-1">
                    <span className="text-body-2 leading-[1.4] text-gray-100">
                      Office
                    </span>
                    <a
                      href="tel:703-748-7180"
                      className="text-body-1 leading-[1.4] text-primary-80 hover:underline"
                    >
                      703-748-7180 ext. 705
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GSA Schedule Contract */}
            <div className="flex gap-4 mt-[102px] max-md:mt-10">
              <IconBadge>
                <GsaIcon />
              </IconBadge>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-body-2 leading-[1.4] text-gray-100">
                    GSA Schedule Contract
                  </span>
                  <a
                    href="https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=GS-35F-410GA&contractorName=DATASOURCE%2C+INC.&executeQuery=YES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-1 leading-[1.4] text-primary-80 hover:underline cursor-pointer"
                  >
                    GS-35F-410GA
                  </a>
                </div>
                <ul className="list-disc ml-6 text-body-1 leading-[1.4] text-primary-80 space-y-2">
                  <li>Software Licenses</li>
                  <li>Software Maintenance</li>
                  <li>IT Professional Services</li>
                </ul>
              </div>
            </div>

            {/* DataSource Address */}
            <div className="flex flex-col gap-6 mt-[102px] max-md:mt-10">
              <Image
                src="/dsource-logo2.png"
                alt="DataSource Inc."
                width={202}
                height={40}
              />
              <div className="flex items-start gap-4">
                <IconBadge>
                  <MapPinIcon />
                </IconBadge>
                <p className="text-body-1 leading-[1.4] text-primary-80">
                  1749 Old Meadow Road
                  <br />
                  Suite 350
                  <br />
                  McLean, VA 22102
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Request Form ── */}
          <div className="flex-1">
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
}
