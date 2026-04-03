import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main className="flex-1 overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}