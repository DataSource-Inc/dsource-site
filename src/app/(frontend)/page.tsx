import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection3";
import TrustedWorkforceSection from "@/components/home/TrustedWorkforceSection";
import InsightsSection from "@/components/home/InsightsSection";
import ArchitectureSection from "@/components/home/ArchitectureSection";

export const metadata: Metadata = {
  title: {
    absolute: "ABIS Personnel Security Software | DataSource Inc.",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedWorkforceSection />
      <InsightsSection />
      <ArchitectureSection />
    </>
  );
}
