import { Gabarito, Hanken_Grotesk } from "next/font/google";

export const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-gabarito",
});

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hanken",
});
