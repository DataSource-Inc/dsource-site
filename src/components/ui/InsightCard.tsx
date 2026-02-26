import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  title: string;
  slug: string;
  icon: string;
}

export default function InsightCard({ title, slug, icon }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${slug}`}
      className="group block rounded-2xl border border-primary-10 bg-white p-6 transition-shadow hover:shadow-md"
    >
      {/* Icon / Image */}
      <div className="mb-4">
        <Image src={icon} alt="" width={48} height={48} />
      </div>

      {/* Title */}
      <h3 className="text-h6 font-semibold text-primary-80 transition-colors group-hover:underline">
        {title}
      </h3>
    </Link>
  );
}
