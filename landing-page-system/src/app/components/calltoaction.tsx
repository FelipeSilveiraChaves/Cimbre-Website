"use client";

import { useEffect, useRef } from "react";
import { DashedDivider } from "./dasheddivider";
import ParcelasComponent from "./parcelas";
import BuyButton from "./purchasebutton";
import { Title } from "./title";
import { Badge } from "./badge";
import BaseContent from "./paragraph";
import { fireViewOffer } from "@/app/utils/metaEvents";

export default function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !fired.current) {
          fired.current = true;
          observer.disconnect();
          void fireViewOffer();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="font-title -mt-45 flex w-full max-w-95.5 flex-col items-center justify-center rounded-b-4xl bg-transparent"
    >
      <div className="rounded-2xl bg-white px-7.5 pt-11 pb-11 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05),0px_0px_0px_1.13px_rgba(6,6,5,0.10)]">
        <Title className="text-[49px]">
          E oferecemos tudo por um valor <Badge label="Justo" />
        </Title>

        <BaseContent className="font-base pt-5.5">
          Bloco de Notas, Agenda, Lista de Tarefas — e dois rituais para fazer
          as três conversarem. Tudo o que você precisa para parar de improvisar
          o próprio tempo, por um valor que cabe no orçamento.
        </BaseContent>
      </div>
      <ParcelasComponent />

      <div className="flex h-36 items-center justify-center">
        <div className="-mr-1 -mb-7 text-[40px] leading-6 font-semibold tracking-[-0.99px] text-[#F5F7FA70]">
          <span>R$</span>
        </div>

        <span className="text-[200px] font-semibold text-[#F5F7FA] antialiased [text-rendering:optimizeLegibility]">
          9
        </span>

        <span className="-mb-7 -ml-0.5 text-[40px] leading-6 font-semibold tracking-[-0.99px] text-[#F5F7FA70]">
          ,86
        </span>
      </div>

      <div className="mt-4 inline-flex h-8 items-center justify-center rounded-full border border-[#F5F7FA80] bg-[#FFFFFF30] px-3 text-[20px] leading-6 text-[#F5F7FA] outline outline-[#F5F7FA50]">
        Ou R$ 97 à vista
      </div>

      <div className="flex w-full flex-col items-center justify-center px-7.5 pt-8 pb-11">
        <DashedDivider stroke="#E0E5EE10" className="mb-1" />
        <div className="flex items-center justify-center leading-6">
          <p className="text-[20px] leading-6 tracking-normal text-[#F5F7FA]">
            5 aulas de gestão do tempo
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE10" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[20px] leading-6 tracking-normal text-[#F5F7FA]">
            Suporte de 1 ano
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE10" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[20px] leading-6 tracking-normal text-[#F5F7FA]">
            Garantia de 7 dias
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE10" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[19px] leading-6 tracking-normal text-[#F5F7FA]">
            Acesso vitalício às atualizações
          </p>
        </div>
      </div>

      <div className="mb-2 flex items-center justify-center">
        <p className="text-[13px] leading-4.5 tracking-normal text-[#F5F7FA]">
          Checkout Seguro
        </p>
        <img
          className="ml-1.25"
          src="/hubla2.svg"
          alt="Hubla"
          width={38}
          height={16}
        />
      </div>

      <div className="w-full px-5.25">
        <BuyButton />
      </div>

      <div className="flex flex-col items-center justify-center pt-2">
        <p className="text-[13px] leading-4.5 tracking-normal text-[#F4F6F940]">
          Comercializado por Interception D. LTDA
        </p>
        <p className="text-[13px] leading-4.5 tracking-normal text-[#F4F6F940]">
          CNPJ 49.821.411/0001-37
        </p>
      </div>
    </div>
  );
}
