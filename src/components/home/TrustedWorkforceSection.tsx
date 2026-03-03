import SectionHeading from "@/components/ui/SectionHeading";
import VideoEmbed from "@/components/ui/VideoEmbed";

export default function TrustedWorkforceSection() {
  return (
    <section className="py-24 max-md:py-16">
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4">
        {/* Section heading */}
        <SectionHeading>How ABIS Supports Trusted Workforce</SectionHeading>

        {/* Two-column layout */}
        <div className="mt-10 flex gap-10 max-md:flex-col max-md:gap-8">
          {/* Left: Quote + Attribution */}
          <div className="flex flex-1 flex-col gap-4 min-w-0">
            <p className="text-h5 text-primary-80 leading-[1.2]">
              Addressing how ABIS functions to meet the new demands and
              challenges of Trusted Workforce.
            </p>
            <p className="text-body-1 text-gray-100">
              Chris Zinkl, Director, ABIS Operations
            </p>
          </div>

          {/* Right: Video embed */}
          <div className="w-[773px] shrink-0 max-md:w-full">
            <VideoEmbed
              videoId="eAN6wayu3O8"
              title="How ABIS Supports Trusted Workforce"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
