"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getLandingOrigin } from "@/app/utils/trackingStorage";

/**
 * Wordmark "Cimbre" clicável para as páginas do grupo (site) — contato, termos,
 * política. Volta para a LP de origem (lp-1/2/3) salva no localStorage pelo
 * script de tracking. Antes de hidratar usa /lp-1 como padrão.
 */
export default function BackToLp() {
  const [href, setHref] = useState("/lp-1");

  useEffect(() => {
    setHref(`/${getLandingOrigin()}`);
  }, []);

  return (
    <Link
      href={href}
      aria-label="Voltar para a página da Cimbre"
      className="text-carbon-400 hover:text-carbon-800 inline-flex items-center gap-1.5 transition-colors"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="font-title text-[22px] font-extrabold tracking-tight">
        Cimbre
      </span>
    </Link>
  );
}
