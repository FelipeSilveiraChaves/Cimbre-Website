"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Button from "./button";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


    const motionProps = {
    whileHover: { scale: 1.06 },
    whileTap: { scale: 0.94 },
    transition: { type: "spring", stiffness: 520, damping: 32, mass: 0.6 },
  } as const;
  return (
    <div className="flex flex-col items-end">
      <motion.button
        {...motionProps}
        onClick={toggle}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        className="w-12 h-12 rounded-full bg-carbon-800 flex items-center justify-center pb-1 cursor-pointer outline-4 outline-carbon-0"
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Moldura opcional */}
          <div className="absolute inset-2 pointer-events-none " />
          <span
            className={`
              absolute left-1/2 top-1/2
              w-5 h-[3px] bg-white rounded-full
              -translate-x-1/2
              origin-center
              transition-transform duration-300 ease-in-out
              ${
                isOpen
                  ? "translate-y-0 rotate-45"       
                  : "-translate-y-[3.5px]"     
              }
            `}
          />
          <span
            className={`
              absolute left-1/2 top-1/2
              w-5 h-[3px] bg-white rounded-full
              -translate-x-1/2
              origin-center
              transition-transform duration-300 ease-in-out
              ${
                isOpen
                  ? "translate-y-0 -rotate-45"       // vai pro centro e gira
                  : "translate-y-[3.5px]"            // desce, deixando o vão no meio
              }
            `}
          />
        </div>
      </motion.button>
      <div className={`gap-2.5 flex-1 flex flex-col items-end mt-2 transition-opacity duration-200 ease-in-out
        ${
          isOpen 
            ? "opacity-100 pointer-events-auto"
            : "opacity-0  pointer-events-none"
        }
        `}>
          <Button href="">Estojos</Button>
          <Button href="">Cadernos</Button>
          <Button href="">Canetas</Button>
          <Button href="">Cursos</Button>
      </div>
    </div>
  );
}
