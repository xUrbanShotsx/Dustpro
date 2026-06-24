import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "DustPro - Dust Management Systems",
    template: "%s | DustPro",
  },
  description:
    "Australian-made dust management systems for mining, roads, and industrial sites. Biodegradable, environmentally responsible products serving clients since 2009.",
  keywords: [
    "dust suppression",
    "dust management",
    "DustLoc",
    "WetDown",
    "RoadPro",
    "TrackShield",
    "mining dust control",
    "NSW",
    "Australia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-dp-bg text-dp-text">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
