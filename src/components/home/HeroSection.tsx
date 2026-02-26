import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-light overflow-hidden">
      {/* Decorative world map watermark - left side */}
      <div
        className="absolute left-[-30%] top-[40%] w-[55%] h-[50%] opacity-[0.08] bg-[url('/hero.jpg')] bg-contain bg-no-repeat bg-center pointer-events-none max-md:hidden"
        aria-hidden="true"
      />
      {/* Decorative world map watermark - right side (mirrored) */}
      <div
        className="absolute right-[-20%] top-[40%] w-[55%] h-[50%] opacity-[0.08] bg-[url('/hero.jpg')] bg-contain bg-no-repeat bg-center pointer-events-none scale-x-[-1] max-md:hidden"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4 pt-14 pb-20 max-md:pt-10 max-md:pb-14">
        <div className="flex flex-col items-center text-center max-w-[987px] mx-auto gap-[52px] max-md:gap-10">
          {/* Main heading */}
          <h1 className="text-h1 text-primary-80 tracking-[-1.28px] max-md:text-[32px] max-md:leading-[1.2]">
            Take the Heavy Lifting out of Trusted Workforce with ABIS
          </h1>

          {/* ABIS logo + subtitle block */}
          <div className="flex flex-col items-center gap-16 max-md:gap-10">
            {/* ABIS Logo */}
            <Image
              src="/abis-logo.png"
              alt="ABIS Personnel Security"
              width={240}
              height={86}
              className="max-md:w-[161px] max-md:h-auto"
            />

            {/* Subtitle area */}
            <div className="flex flex-col items-center gap-8 max-md:gap-6">
              {/* Tag pill */}
              <div className="bg-beige px-3 py-[5px] flex items-center justify-center">
                <span className="text-body-2 text-gray-100">
                  More than a Case Management System
                </span>
              </div>

              {/* Description */}
              <p className="text-body-1 text-gray-100 max-w-[535px] max-md:max-w-full">
                ABIS includes standard case management functionality, such as
                workflow and document management, but much more than that, ABIS
                automates every Personnel Security-specific task for Federal
                agencies.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button href="/contact" className="w-[285px] justify-between max-md:w-full">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
