import SectionHeading from "@/components/ui/SectionHeading";
import VideoEmbed from "@/components/ui/VideoEmbed";

export default function ArchitectureSection() {
  return (
    <section className=" py-24 max-md:py-16">
      <div className="mx-auto max-w-[1200px] px-10 max-md:px-4">
        {/* Section heading */}
        <SectionHeading>
          Managing Security Processes with ABIS Architecture
        </SectionHeading>

        {/* Two-column layout (reversed from Section 2: video left, text right) */}
        <div className="mt-10 flex gap-10 max-md:flex-col-reverse max-md:gap-8">
          {/* Left: Video embed */}
          <div className="w-[773px] shrink-0 max-md:w-full">
            <VideoEmbed
              videoId="dQw4w9WgXcQ"
              title="Managing Security Processes with ABIS Architecture"
            />
          </div>

          {/* Right: Quote + Attribution */}
          <div className="flex flex-1 flex-col gap-4 min-w-0">
            <p className="text-h5 text-primary-80 leading-[1.2]">
              Addressing how ABIS manages Federal personnel security processes
              and security requirements.
            </p>
            <p className="text-body-1 text-gray-100">
              Hunter Hopkins, IT Specialist and
              <br />
              Kyle Jackson, ABIS Lead Architect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
