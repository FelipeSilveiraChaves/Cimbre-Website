"use client";

import { FaInstagram } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import CimbreLogo from "../../../assets/logomarca_preto-e-branco_v1.svg";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  // Framer: scroll position
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  function handleLogoClick() {
    const origin = sessionStorage.getItem("landingOrigin") || "lp-1";
    router.push(`/${origin}`);
  }
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
      className="fixed top-0 left-0 z-50 w-full bg-transparent px-2 pt-2 will-change-transform sm:pt-5"
      initial={{ y: 0 }}
      animate={visible ? { y: 0 } : { y: -90 }}
      transition={{
        duration: 0.45,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <nav className="mx-auto flex h-14.5 w-full max-w-187.5 items-center justify-between rounded-full bg-white/78 pr-5.75 pl-7.25 shadow-[0_4px_8px_0_rgba(0,0,0,0.05),0_0_0_1.13px_rgba(6,6,5,0.063)] backdrop-blur-md will-change-[backdrop-filter]">
        <button
          aria-label="Home"
          onClick={handleLogoClick}
          className="cursor-pointer text-[#2d2d2d] transition-all duration-200 hover:-translate-y-px hover:text-[#0D99FF]"
        >
          <CimbreLogo className="h-7 w-auto" />
        </button>

        <div className="flex items-center justify-center gap-5 text-[#6f7481]">
          <p
            className="cursor-pointer text-lg transition-all duration-200 hover:-translate-y-px hover:font-bold hover:text-[#25D366]"
            aria-label="Suporte Whatsapp"
          >
            WhatsApp
          </p>

          <a
            href="https://www.instagram.com/cimbre.co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={26}
              className="cursor-pointer transition-all duration-200 hover:-translate-y-px hover:text-[#D400C5]"
            />
          </a>
        </div>
      </nav>
    </motion.nav>
  );
}
