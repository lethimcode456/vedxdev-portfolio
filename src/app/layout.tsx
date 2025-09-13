import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/AnimatedBackground";
import Noise from "@/components/Noise";
import LandingAnimation from "@/components/LandingAnimation";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "vedXdev",
  description: "Minimal dark portfolio by vedXdev (dev + design).",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} antialiased bg-black text-white`}>
        <LandingAnimation />
        <AnimatedBackground />
        <Noise patternAlpha={10} blendMode="soft-light" />
        <CursorGlow />
        <Navbar />
        <main className="container-padding pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
