import type { Metadata } from "next";
import { gabarito, hanken } from "@/lib/fonts";
import "./globals.css";
import Navbar from "./components/navbar";
import SupportButton from "./components/fab";
import MetaPixel from "./components/MetaPixel";
import GoogleAnalytics from "./components/GoogleAnalyticsPixel";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Cimbre",
  description: "É mais facil do que parece",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${gabarito.variable} ${hanken.variable} font-base flex min-h-screen flex-col bg-[#F8FCFF] font-(--font-hanken) antialiased`}
      >
        <GoogleAnalytics />
        <MetaPixel />
        <Navbar />
        <main className="flex min-h-screen flex-1 pt-32.5">{children}</main>
        <SupportButton href="/contact" />
        <Analytics />
      </body>
    </html>
  );
}
