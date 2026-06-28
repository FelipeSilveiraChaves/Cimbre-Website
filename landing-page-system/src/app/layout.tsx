import type { Metadata } from "next";
import { gabarito, hanken, googleSansFlex } from "@/lib/fonts";
import "./globals.css";
import Navbar from "./components/navbar";
import SupportButton from "./components/fab";
import MetaPixel from "./components/MetaPixel";
import TrackingCapture from "@/app/utils/trackingCapture";
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
        className={`${gabarito.variable} ${hanken.variable} ${googleSansFlex.variable} font-base flex min-h-screen flex-col bg-[#F8FCFF] font-(--font-hanken) antialiased`}
      >
        <TrackingCapture />
        <GoogleAnalytics />
        <MetaPixel />
        <Navbar />
        <main className="flex min-h-screen flex-1">{children}</main>
        <SupportButton href="https://wa.me/5553999255355?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20Cimbre%20e%20fiquei%20interessado.%20Quero%20entender%20melhor%20como%20funciona%20e%20se%20faz%20sentido%20para%20mim." />
        <Analytics />
      </body>
    </html>
  );
}
