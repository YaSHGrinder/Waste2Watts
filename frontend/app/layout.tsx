import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Waste2Watts — Turn Food Waste Into Clean Energy",
  description:
    "Track your food waste impact. Power a sustainable future with biogas, fertilizer, and carbon credits.",
  keywords: ["food waste", "biogas", "sustainability", "carbon credits", "waste to energy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetBrains.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#060606] text-white antialiased font-[family-name:var(--font-dm-sans)]">
        <Navbar />
        <main className="flex-1 overflow-hidden">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
