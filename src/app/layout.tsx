import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  opticalSizing: true,
});

export const metadata: Metadata = {
  title: "vedXdev",
  description: "Minimal dark portfolio by vedXdev (dev + design).",
  metadataBase: new URL("https://example.com"),
  icons:'/favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${epilogue.variable} antialiased bg-black text-white overflow-hidden`}>
        <SmoothCursor />
        <Navbar />
        <main className="h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}