"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

export default function HomeButton() {
  return (
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
  );
}
