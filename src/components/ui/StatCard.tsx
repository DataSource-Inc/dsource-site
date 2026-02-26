import { type ReactNode } from "react";

interface StatCardProps {
  number: string;
  description: string;
  icon: ReactNode;
}

export default function StatCard({ number, description, icon }: StatCardProps) {
  return (
    <div className="relative rounded-2xl border border-primary-10 bg-primary-10/20 p-6">
      {/* Icon in top-right corner */}
      <div className="absolute right-6 top-6">{icon}</div>

      {/* Large stat number */}
      <p className="text-[80px] font-bold leading-[1.2] text-primary-80 max-md:text-[56px]">
        {number}
      </p>

      {/* Description */}
      <p className="mt-2 text-body-1 text-gray-100">{description}</p>
    </div>
  );
}
