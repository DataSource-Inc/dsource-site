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
      className={`group block bg-beige px-8 py-10 transition-shadow hover:shadow-md ${
        horizontalOnMobile ? "max-md:flex max-md:items-center max-md:gap-4" : ""
      }`}
    >
      {/* Icon / Image */}
      <div
        className={`flex items-center justify-center h-36 ${
          horizontalOnMobile
            ? "mb-12 max-md:mb-0 max-md:shrink-0 max-md:h-16 max-md:w-16"
            : "mb-12"
        }`}
      >
        <Image src={icon} alt="" width={144} height={144} className="h-full w-auto" />
      </div>

      {/* Title */}
      <h3 className="text-big text-primary-80 transition-colors group-hover:underline">
        {title}
      </h3>
    </Link>
  );
}
