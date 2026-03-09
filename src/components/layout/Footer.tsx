import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/why-abis", label: "Why ABIS" },
  { href: "/customers", label: "Customers" },
  { href: "/insights/trusted-workforce-productivity", label: "Insights" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-gray-40/30">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-10 pb-8 pt-4 max-md:flex-col max-md:items-start max-md:gap-6 max-md:px-4">
        {/* Logo */}
        <Link href="/" className="relative shrink-0">
          <Image
            src="/dsource-logo2.png"
            alt="DataSource Inc."
            width={202}
            height={40}
          />
        </Link>

        {/* Desktop: single row of links + LinkedIn */}
        <nav className="hidden items-center gap-14 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-body-1 leading-[1.4] text-gray-100 transition-colors hover:text-primary-80"
            >
              {label}
            </Link>
          ))}

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/datasourceinc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DataSource on LinkedIn"
            className="text-gray-100 transition-colors hover:text-primary-80"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </nav>

        {/* Mobile: two columns of links */}
        <div className="flex gap-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-body-1 leading-[1.4] text-gray-100 hover:text-primary-80"
            >
              Home
            </Link>
            <Link
              href="/why-abis"
              className="text-body-1 leading-[1.4] text-gray-100 hover:text-primary-80"
            >
              Why ABIS
            </Link>
            <Link
              href="/customers"
              className="text-body-1 leading-[1.4] text-gray-100 hover:text-primary-80"
            >
              Customers
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/insights/trusted-workforce-productivity"
              className="text-body-1 leading-[1.4] text-gray-100 hover:text-primary-80"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="text-body-1 leading-[1.4] text-gray-100 hover:text-primary-80"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-body-1 leading-[1.4] text-gray-100 hover:text-primary-80"
            >
              Privacy Policy
            </Link>
            <a
              href="https://www.linkedin.com/company/datasource-incorporated"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DataSource on LinkedIn"
              className="text-gray-100 transition-colors hover:text-primary-80"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
