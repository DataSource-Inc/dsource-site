"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/why-abis", label: "Why ABIS" },
  { href: "/customers", label: "Customers" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-10 max-md:px-4">
        {/* Logo */}
        <Link href="/" className="relative shrink-0">
          <Image
            src="/dsource-logo.png"
            alt="DataSource Inc."
            width={202}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-14 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`text-body-1 leading-[1.4] transition-colors ${
                  isActive
                    ? "font-bold text-primary-80"
                    : "text-gray-100 hover:text-primary-80"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9H27M5 16H27M5 23H27"
              stroke="#063858"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
