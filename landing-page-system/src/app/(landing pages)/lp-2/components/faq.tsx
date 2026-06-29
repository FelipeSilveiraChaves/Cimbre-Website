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
    question:
      "Já tentei me organizar mil vezes e nunca durou. Por que agora seria diferente?",
    answer:
      "Provavelmente porque o que você tentou antes era complicado demais. A maior parte dos métodos pede planilha, app cheio de função e uma disciplina que ninguém sustenta por muito tempo. Nosso método vai no caminho contrário: três ferramentas simples e dois rituais curtos, simples o bastante para você não largar na segunda semana. A simplicidade não é um detalhe do método — é o método.",
  },
  {
    question: "Preciso acordar às 5h ou virar uma pessoa super disciplinada?",
    answer:
      "Não, e essa é justamente a ideia. O nosso método não tem nada a ver com acordar de madrugada, força de vontade ou rotina de CEO. O método funciona porque é leve — controlar o próprio tempo deveria ser tão natural quanto respirar, não mais um peso na sua rotina.",
  },
  {
    question: "Funciona com o aplicativo que eu já uso?",
    answer:
      "Funciona. O método não depende de nenhum app específico — a lógica é a mesma em qualquer um. A gente recomenda o Todoist para a Lista de Tarefas e o calendário do seu celular para a Agenda, mas, se você já tem as suas ferramentas, é só aplicar o que ensinamos nelas.",
  },
  {
    question: "Preciso pagar por algum aplicativo?",
    answer:
      "Não. Dá para fazer tudo com ferramentas gratuitas. As que recomendamos no curso não custam nada para usar no dia a dia.",
  },
  {
    question: "E se eu preferir papel a aplicativos?",
    answer:
      "Dá para usar papel em boa parte do método — o Bloco de Notas, inclusive, a gente prefere no papel. A Agenda também funciona, com algumas ressalvas. Só a Lista de Tarefas pede mesmo uma ferramenta digital, e a aula explica direitinho o por quê.",
  },
  {
    question: "Quanto tempo leva para fazer o curso?",
    answer:
      "A leitura completa leva entre uma hora e uma hora e meia, dependendo do seu ritmo. Mas cada aula termina com exercícios práticos, então o ideal é ir aplicando conforme avança — sem pressa de terminar tudo de uma vez.",
  },
  {
    question: "Vou ter ajuda se travar em alguma parte?",
    answer:
      "Sim. Comprando agora, você tem 365 dias de acompanhamento — nesse período, a nossa equipe fica à disposição para ajudar você a aplicar o método na prática. É só chamar.",
  },
  {
    question: "E se eu comprar e não for para mim?",
    answer:
      "Sem problema. Você tem 7 dias para ler, testar e decidir. Se não for o que esperava, devolvemos 100% do valor, sem burocracia.",
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
