import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://datasourceinc.com"),
  title: {
    default: "ABIS Personnel Security Platform | DataSource Inc.",
    template: "%s | DataSource Inc.",
  },
  description:
    "DataSource provides ABIS, a comprehensive solution for Federal Personnel Security offices.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "DataSource Inc.",
    title: "ABIS Personnel Security Platform | DataSource Inc.",
    description:
      "DataSource provides ABIS, a comprehensive solution for Federal Personnel Security offices.",
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
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
