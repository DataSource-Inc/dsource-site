"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/why-abis", label: "Why ABIS" },
  { href: "/customers", label: "Customers" },
  { href: "/contact", label: "Contact Us" },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-beige">
      {/* Top bar: logo + close */}
      <div className="flex items-center justify-between px-4 py-4">
        <Link href="/" onClick={onClose} className="relative shrink-0">
          <Image
            src="/dsource-logo2.png"
            alt="DataSource Inc."
            width={162}
            height={32}
          />
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center justify-center"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8L24 24M24 8L8 24"
              stroke="#063858"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-8 px-4 pt-52">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="text-h4 leading-[1.25] tracking-[-0.64px] text-primary-80"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
