import { type ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-h2 text-primary-80 max-md:text-[32px] max-md:leading-[1.25] ${className}`}
    >
      {children}
    </h2>
  );
}
