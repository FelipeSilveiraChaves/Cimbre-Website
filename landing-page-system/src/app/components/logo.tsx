"use client";

import { motion } from "framer-motion";

import P from "../../../assets/palagaLogo/P.svg";
import A from "../../../assets/palagaLogo/A.svg";
import L from "../../../assets/palagaLogo/L.svg";
import A2 from "../../../assets/palagaLogo/A2.svg";
import G from "../../../assets/palagaLogo/G.svg";
import A3 from "../../../assets/palagaLogo/A3.svg";

export default function Logo() {
  const letters = [
    { Letter: P, offset: 2 },
    { Letter: A, offset: 6 },
    { Letter: L, offset: -10 },
    { Letter: A2, offset: 1 },
    { Letter: G, offset: -8},
    { Letter: A3, offset: 3 },
  ];

  return (
    <div className="flex items-end gap-1">
      {letters.map(({ Letter, offset }, i) => (
        <motion.div
          key={i}
          initial={{ y: offset }}
          animate={{ y: [offset, 0, 0, offset] }}
          transition={{
            duration: 4,                 // ciclo completo
            times: [0, 0.25, 0.65, 1],   // entrada, pausa, saída
            ease: "easeInOut",
            delay: 1 + i * 0.1,          // delay inicial perceptível
            repeat: Infinity,
            repeatDelay: 1.5,            // pausa entre ciclos
          }}
        >
          <Letter className="h-8 w-auto fill-neutral-800" />
        </motion.div>
      ))}
    </div>
  );
}
