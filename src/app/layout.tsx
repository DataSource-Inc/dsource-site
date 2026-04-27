import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://datasourceinc.com"),
  title: {
    default: "ABIS Personnel Security Software | DataSource Inc.",
    template: "%s | DataSource Inc.",
  },
  description:
    "ABIS by DataSource is Personnel Security software for Federal agencies — automating background investigations, Continuous Vetting, and Trusted Workforce 2.0 workflows.",
  keywords: [
    "Federal Personnel Security",
    "Personnel Security Software",
    "Background Investigation System",
    "Automated Background Investigation System",
    "ABIS software",
    "ABIS system",
    "ABIS Personnel Security",
    "DataSource ABIS software",
    "Automated Background Investigation System ABIS",
    "Personnel Security Case Management System",
    "Security Clearance Management System",
    "Federal Case Management Software",
    "Government Personnel Security System",
    "Background Investigation Automation",
    "Trusted Workforce 2.0",
    "Federal Background Investigations",
    "DCSA integration",
    "Continuous Vetting",
    "Continuous Vetting (CV)",
    "Rap Back integration",
    "eDelivery integration",
    "Federal Security Clearance Process",
    "Government Adjudication System",
    "Personnel Vetting Software",
    "Federal HR Security Systems",
    "OPM compliance Personnel Security",
    "SEAD 3 self-reporting",
    "NBIS integration",
    "Automated adjudication",
    "Personnel Security workflow automation",
    "Case tracking and management system",
    "Security clearance processing automation",
    "Integrated Personnel Security platform",
    "End-to-end background investigation system",
    "Personnel Security reporting and analytics",
    "PII secure case management",
    "Role-based access control system",
    "Audit trail security software",
    "Zero Trust security software",
    "API integration government systems",
    "Reduce Personnel Security workload",
    "Improve background investigation efficiency",
    "Streamline security clearance process",
    "Reduce time-to-hire federal employees",
    "Automate Personnel Security processes",
    "Eliminate manual security workflows",
    "Increase Personnel Security efficiency",
    "Save cost in Personnel Security operations",
    "Improve compliance in federal security programs",
    "USA Staffing integration",
    "HRConnect integration",
    "ServiceNow integration government",
    "Federal HR system integration",
    "Security system interoperability",
    "Government software integration platform",
    "Personnel Security subject matter expertise",
    "Federal security process experts",
    "Government security software provider",
    "Personnel Security best practices",
    "Trusted Workforce implementation support",
    "best personnel security system for federal agencies",
    "automated background investigation system for government",
    "case management system for security clearances",
    "software for federal background investigations",
    "how to improve personnel security efficiency",
    "tools for Trusted Workforce 2.0 implementation",
    "secure system for managing PII in background investigations",
    "federal personnel security workflow automation software",
    "DataSource Inc",
    "PersonnelSecurity",
    "TrustedWorkforce",
    "FederalIT",
    "GovTech",
    "SecurityClearance",
    "BackgroundInvestigations",
    "NationalSecurity",
    "IndustrialSecurity",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "DataSource Inc.",
    title: "ABIS Personnel Security Software | DataSource Inc.",
    description:
      "ABIS by DataSource is Personnel Security software for Federal agencies — automating background investigations, Continuous Vetting, and Trusted Workforce 2.0 workflows.",
    url: "https://datasourceinc.com",
    images: [
      {
        url: "/dsource-logo.png",
        width: 1200,
        height: 630,
        alt: "DataSource Inc.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth`}>
      <body className="font-sans flex flex-col min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-primary-80 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
