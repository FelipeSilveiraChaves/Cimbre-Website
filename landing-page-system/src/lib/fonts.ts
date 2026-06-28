import { Gabarito, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const googleSansFlex = localFont({
  src: "../../assets/fonts/GoogleSansFlex.woff2",
  display: "swap",
  variable: "--font-google-sans-flex",
  weight: "100 1000", // variable: cobre todo o range de peso
});

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
