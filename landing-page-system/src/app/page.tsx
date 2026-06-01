"use client";

import Link from "next/link";
import { Badge } from "./components/badge";
import { BlurReveal } from "./components/blurreview";
import Footer from "./components/footer";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col content-between items-center justify-center p-4">
        <h1 className="text-carbon-800 mb-8 pb-2 text-[40px] leading-none tracking-[-0.4px] sm:text-5xl">
          <BlurReveal delay={0.05}>Organização</BlurReveal>{" "}
          <BlurReveal delay={0.1}>é</BlurReveal>{" "}
          <BlurReveal delay={0.15}>o</BlurReveal>{" "}
          <BlurReveal delay={0.2}>ato</BlurReveal>{" "}
          <BlurReveal delay={0.25}>de</BlurReveal>{" "}
          <BlurReveal delay={0.3}>colocar</BlurReveal>{" "}
          <BlurReveal delay={0.35}>as</BlurReveal>
          <br className="hidden sm:block" />
          <BlurReveal delay={0.4}>coisas</BlurReveal>{" "}
          <BlurReveal delay={0.45}>em</BlurReveal>{" "}
          <BlurReveal delay={0.5}>seus</BlurReveal>{" "}
          <BlurReveal delay={0.55}>devidos</BlurReveal>{" "}
          <BlurReveal delay={0.6}>lugares</BlurReveal>
        </h1>
        <BlurReveal delay={0.8}>
          <motion.a
            href="/lp-1"
            aria-label="Comprar o curso Cimbre"
            whileHover={{ y: 1 }}
            whileTap={{ y: 4 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative z-10 flex h-14 w-60 items-center justify-center overflow-hidden rounded-[12px] bg-[#CBE9FF]"
          >
            <BorderBeam
              lightWidth={350}
              borderWidth={2}
              duration={3}
              lightColor="#0D99FF"
              className="border-[#CBE9FF] opacity-100"
            />
            <span className="text-[24px] leading-6 font-extrabold text-[#0D99FF]">
              Disponível Agora
            </span>
          </motion.a>
        </BlurReveal>
      </div>
      <Footer variant="light" />
    </div>
  );
}
