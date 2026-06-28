"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { buildCheckoutUrl } from "@/app/utils/buildCheckoutUrl";
import { fireCheckoutButtonClick } from "@/app/utils/metaEvents";

// Botão de compra trazido do CTA da lp-1 (purchasebutton.tsx), adaptado para a
// lp-2 com o rótulo "Iniciar". Mantém a mesma lógica de checkout + BorderBeam.
export default function IniciarButton() {
  const [href, setHref] = useState(process.env.NEXT_PUBLIC_CHECKOUT_URL || "#");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";
    setHref(buildCheckoutUrl(base));
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Reconstrói a URL no momento do clique para garantir que _fbp, _fbc e UTMs
    // já estejam disponíveis (o useEffect pode rodar antes do Pixel setar os cookies).
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
      className="relative z-10 flex h-11.5 w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#4285F5]"
    >
      <BorderBeam
        lightWidth={180}
        borderWidth={2.5}
        duration={2}
        lightColor="#E0FE78"
        className="border-[#4285F5] opacity-100"
      />
      <span className="text-[20px] leading-6 font-medium tracking-[1%] text-[#F5F7FA]">
        Iniciar
      </span>
    </motion.a>
  );
}
