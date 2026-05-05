import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { organizationSchema, websiteSchema, jsonLd } from "@/lib/structured-data";
import "./globals.css";

const SITE_TITLE = "ABIS Personnel Security Software | DataSource Inc.";
const SITE_DESCRIPTION =
  "ABIS by DataSource is Personnel Security software for Federal agencies — automating background investigations, Continuous Vetting, and Trusted Workforce 2.0 workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.datasourceinc.com"),
  title: {
    default: SITE_TITLE,
    template: "%s | DataSource Inc.",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "DataSource Inc.",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://www.datasourceinc.com",
    images: [
      {
        url: "/dsource-logo.png",
        width: 1200,
        height: 630,
        alt: "DataSource Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/dsource-logo.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema)} />
      </head>
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
