import { DM_Sans } from "next/font/google";

// Placeholder for RF Dewi — swap to next/font/local when font files are available
// RF Dewi: weight 400, similar geometric sans-serif proportions
export const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});
