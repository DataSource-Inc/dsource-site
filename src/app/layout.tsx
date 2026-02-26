import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Datasource",
  description: "Datasource site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
