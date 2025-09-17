import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataSource Inc. - Trusted Background Investigation System Provider",
  description: "DataSource provides ABIS, a comprehensive case management system for Federal Personnel Security offices, along with software engineering and project management services.",
  keywords: "ABIS, background investigation, federal security clearance, personnel security, case management system",
  authors: [{ name: "DataSource Inc." }],
  openGraph: {
    title: "DataSource Inc. - Trusted Background Investigation System Provider",
    description: "Leading provider of background investigation systems for Federal Government Personnel Security Departments",
    type: "website",
    url: "https://datasourceinc.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased flex flex-col min-h-full`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
