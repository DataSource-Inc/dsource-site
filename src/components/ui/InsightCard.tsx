import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  title: string;
  slug: string;
  icon: string;
  /** When true, the card renders horizontally (icon left, text right) on mobile */
  horizontalOnMobile?: boolean;
}

export default function InsightCard({
  title,
  slug,
  icon,
  horizontalOnMobile = false,
}: InsightCardProps) {
  return (
    <Link
      href={`/insights/${slug}`}
      className={`group block rounded-2xl border border-primary-10 bg-white p-6 transition-shadow hover:shadow-md ${
        horizontalOnMobile ? "max-md:flex max-md:items-center max-md:gap-4" : ""
      }`}
    >
      {/* Icon / Image */}
      <div className={`${horizontalOnMobile ? "mb-4 max-md:mb-0 max-md:shrink-0" : "mb-4"}`}>
        <Image src={icon} alt="" width={48} height={48} />
      </div>

      {/* Title */}
      <h3 className="text-h6 font-semibold text-primary-80 transition-colors group-hover:underline">
        {title}
      </h3>
    </Link>
  );
}
