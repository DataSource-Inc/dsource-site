interface StatCardProps {
  number: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

export default function StatCard({
  number,
  description,
  iconSrc,
  iconAlt,
}: StatCardProps) {
  return (
    <div className="flex flex-col gap-10 overflow-clip bg-beige py-8 pl-8 pr-10 max-md:gap-6 max-md:px-5 max-md:py-6">
      {/* Top row: number + icon */}
      <div className="flex items-center justify-between">
        <p className="text-[134px] leading-[1.2] text-primary-80 max-md:text-[64px]">
          {number}
        </p>
        <img
          src={iconSrc}
          alt={iconAlt}
          className="h-[130px] max-md:h-[68px]"
        />
      </div>

      {/* Description */}
      <p className="text-h5 leading-[1.2] text-primary-100">{description}</p>
    </div>
  );
}
