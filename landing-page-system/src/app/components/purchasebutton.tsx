"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { buildCheckoutUrl } from "@/app/utils/buildCheckoutUrl";

export default function BuyButton() {
  const [href, setHref] = useState(process.env.NEXT_PUBLIC_CHECKOUT_URL || "#");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";
    setHref(buildCheckoutUrl(base));
  }, []);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Comprar o curso Cimbre"
      whileHover={{ y: 1 }}
      whileTap={{ y: 4 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="relative z-10 flex h-14 w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#0D99FF]"
    >
      <BorderBeam
        lightWidth={180}
        borderWidth={2}
        duration={2}
        lightColor="#E0FE78"
        className="border-[#0D99FF] opacity-100"
      />
      <span className="text-[24px] leading-6 font-extrabold text-[#F5F7FA]">
        COMPRAR
      </span>
    </motion.a>
  );
}
