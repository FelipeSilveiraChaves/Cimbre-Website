"use client";

import { useEffect, useRef } from "react";
import { fireViewOffer } from "@/app/utils/metaEvents";

/**
 * Sentinela invisível que dispara o evento ViewOffer (Pixel + CAPI) uma única
 * vez, quando o topo da seção de oferta entra na viewport. Desacoplado do design
 * da oferta: basta posicionar este componente no início do trecho de oferta.
 *
 * Por que sentinela em vez de observar o container inteiro com threshold alto:
 * 99% do tráfego é smartphone (webview do Instagram). A seção de oferta costuma
 * ficar mais alta que a tela do celular, então exigir "40% visível de uma vez"
 * poderia nunca acontecer e o evento nunca dispararia. Um marcador fino com
 * threshold 0 dispara assim que o usuário chega na oferta, qualquer que seja a
 * altura dela.
 */
export default function ViewOfferTrigger() {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Navegadores sem IntersectionObserver (raro no nosso browserslist):
    // dispara de imediato para não perder o evento.
    if (typeof IntersectionObserver === "undefined") {
      fired.current = true;
      void fireViewOffer();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          observer.disconnect();
          void fireViewOffer();
        }
      },
      // rootMargin negativo embaixo evita disparar quando a seção só "raspa" a
      // borda inferior da tela — no mobile garante que o usuário de fato chegou.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} aria-hidden className="h-px w-full" />;
}
