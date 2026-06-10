"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { buildCheckoutUrl } from "@/app/utils/buildCheckoutUrl";
import { fireCheckoutButtonClick } from "@/app/utils/metaEvents";

export default function BuyButton() {
  const [href, setHref] = useState(process.env.NEXT_PUBLIC_CHECKOUT_URL || "#");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";
    setHref(buildCheckoutUrl(base));
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Reconstrói a URL no momento exato do clique para garantir que _fbp, _fbc e UTMs
    // já estejam disponíveis — o useEffect pode ter rodado antes do Pixel setar os cookies.
    const base = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";
    e.currentTarget.href = buildCheckoutUrl(base);
    void fireCheckoutButtonClick();
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Comprar o curso Cimbre"
      onClick={handleClick}
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
