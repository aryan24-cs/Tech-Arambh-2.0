import type { Metadata } from "next";
import { Cinzel, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import LoadingScreen from "@/components/common/LoadingScreen";
import StickyApply from "@/components/common/StickyApply";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Aarambh 2.0 | 24-Hour Hackathon — Aravali College",
  description:
    "Tech Aarambh 2.0 — Arrows of Innovation, Bows of Code. A 24-hour hackathon by Aravali College of Engineering & Management. March 20–21, 2026. ₹50,000 prize pool.",
  keywords: [
    "hackathon",
    "tech-aarambh",
    "aravali college",
    "coding",
    "innovation",
    "2026",
  ],
  openGraph: {
    title: "Tech Aarambh 2.0 | 24-Hour Hackathon",
    description:
      "Arrows of Innovation, Bows of Code. Join the ultimate 24-hour hackathon — March 20–21, 2026. ₹50,000 prize pool.",
    type: "website",
    locale: "en_IN",
    siteName: "Tech Aarambh 2.0",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Aarambh 2.0 | 24-Hour Hackathon",
    description:
      "Arrows of Innovation, Bows of Code. Join the ultimate 24-hour hackathon — March 20–21, 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${rajdhani.variable} antialiased`}
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <Navbar />
        {children}
        <StickyApply />
      </body>
    </html>
  );
}
