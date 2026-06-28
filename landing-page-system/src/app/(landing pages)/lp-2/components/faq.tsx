"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItemData = {
  question: string;
  answer: string;
};

// 👇 Edite aqui as perguntas e respostas. Adicione/remova quantas quiser.
const faqs: FaqItemData[] = [
  {
    question: "O método funciona em qualquer tipo de aplicativo?",
    answer:
      // TODO: substituir pela resposta real
      "Sim. O método é baseado em princípios de organização que você aplica em qualquer agenda, bloco de notas ou app de tarefas que já usa.",
  },
  {
    question: "Preciso ter experiência prévia com produtividade?",
    answer:
      // TODO: substituir pela resposta real
      "Não. O curso começa do zero e te guia passo a passo, mesmo que você nunca tenha usado nenhuma ferramenta antes.",
  },
  {
    question: "Quanto tempo leva para concluir o curso?",
    answer:
      // TODO: substituir pela resposta real
      "São sete aulas curtas e diretas ao ponto. Dá para assistir tudo em poucas horas e já começar a aplicar hoje mesmo.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      // TODO: substituir pela resposta real
      "O acesso é vitalício. Você pode rever as aulas quantas vezes quiser, quando quiser.",
  },
  {
    question: "Como recebo o acesso após a compra?",
    answer:
      // TODO: substituir pela resposta real
      "Logo após a confirmação do pagamento você recebe o acesso por e-mail e já pode começar imediatamente.",
  },
];

function FaqItem({ faq }: { faq: FaqItemData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b px-6 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-start gap-3 py-5 text-left"
      >
        <p className="flex-1 font-normal tracking-[3%] text-[#5F6368]">
          {faq.question}
        </p>
        <ChevronDown
          size={20}
          className={cn(
            "mt-0.5 shrink-0 text-[#9AA0A6] transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="border-t py-4 text-[15px] leading-5 font-normal tracking-[3%] text-[#9AA0A6]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <div className="flex w-full max-w-130 flex-col rounded-2xl border bg-white">
      {faqs.map((faq) => (
        <FaqItem key={faq.question} faq={faq} />
      ))}
    </div>
  );
}
