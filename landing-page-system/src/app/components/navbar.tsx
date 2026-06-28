"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  // Framer: scroll position
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest;
    const prev = lastY.current;

    const delta = current - prev;
    const threshold = 2;

    // sempre mostra perto do topo
    if (current < 80) {
      setVisible(true);
    } else if (delta > threshold) {
      // rolando pra baixo -> esconde
      setVisible(false);
    } else if (delta < -threshold) {
      // rolando pra cima -> mostra
      setVisible(true);
    }

    lastY.current = current;
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full bg-transparent px-2 pt-8 will-change-transform"
      initial={{ y: 0 }}
      animate={visible ? { y: 0 } : { y: -90 }}
      transition={{
        duration: 0.45,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <nav className="mx-auto flex h-8.75 w-full max-w-79 items-center justify-center overflow-hidden rounded-[12px] bg-white/78 px-4 [box-shadow:0_0_0_1px_rgba(0,0,0,0.03),0_1px_1px_-0.5px_rgba(0,0,0,0.03),0_3px_3px_-1.5px_rgba(0,0,0,0.03)] backdrop-blur-md will-change-[backdrop-filter]">
        <ul className="flex h-full items-center justify-center">
          <li className="flex h-full items-center justify-center">
            <button
              type="button"
              className="font-google-sans-flex flex h-full cursor-pointer items-center justify-center px-4 text-[16px] leading-4 font-normal tracking-[0.5px] text-[#ADADAD] transition-colors duration-200 [font-optical-sizing:auto] [font-variation-settings:'GRAD'_25,'ROND'_4,'opsz'_18] hover:text-[#2d2d2d]"
            >
              Início
            </button>
          </li>

          <li className="flex h-full items-center justify-center border-l border-[#F3F3F3]">
            <button
              type="button"
              className="font-google-sans-flex flex h-full cursor-pointer items-center justify-center px-4 text-[16px] leading-4 font-normal tracking-[0.5px] text-[#ADADAD] transition-colors duration-200 [font-optical-sizing:auto] [font-variation-settings:'GRAD'_25,'ROND'_4,'opsz'_18] hover:text-[#2d2d2d]"
            >
              Aulas
            </button>
          </li>

          <li className="flex h-full items-center justify-center border-l border-[#F3F3F3]">
            <button
              type="button"
              className="font-google-sans-flex flex h-full cursor-pointer items-center justify-center px-4 text-[16px] leading-4 font-normal tracking-[0.5px] text-[#ADADAD] transition-colors duration-200 [font-optical-sizing:auto] [font-variation-settings:'GRAD'_25,'ROND'_4,'opsz'_18] hover:text-[#2d2d2d]"
            >
              Preço
            </button>
          </li>

          <li className="flex h-full items-center justify-center border-l border-[#F3F3F3]">
            <button
              type="button"
              className="font-google-sans-flex flex h-full cursor-pointer items-center justify-center px-4 text-[16px] leading-4 font-normal tracking-[0.5px] text-[#ADADAD] transition-colors duration-200 [font-optical-sizing:auto] [font-variation-settings:'GRAD'_25,'ROND'_4,'opsz'_18] hover:text-[#2d2d2d]"
            >
              Dúvidas
            </button>
          </li>
        </ul>
      </nav>
    </motion.nav>
  );
}
