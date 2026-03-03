import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-lg bg-primary-80 px-8 py-4 text-body-1 font-semibold text-white transition-colors hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {children}
        <span aria-hidden="true">&rarr;</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${className}`}>
      {children}
      <span aria-hidden="true">&rarr;</span>
    </button>
  );
}
