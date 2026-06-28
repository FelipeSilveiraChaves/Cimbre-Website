"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Lesson = {
  badge: string;
  title: string;
  /** Sub-itens exibidos ao expandir. Vazio = aula sem chevron (não abre). */
  items: string[];
};

// 👇 Edite aqui o conteúdo de cada aula. Adicione/remova quantas quiser.
const lessons: Lesson[] = [
  {
    badge: "Aula 1",
    title: "Introdução.",
    items: [],
  },
  {
    badge: "Aula 2",
    title: "Bloco de Notas e Pensamentos Acionáveis.",
    items: [
      // TODO: substituir pelos tópicos reais desta aula
      "Aprenda à escrever compromissos de forma efetiva e longo prazo.",
    ],
  },
  {
    badge: "Aula 3",
    title: "Agenda & Atividades Obrigatórias.",
    items: [
      "Aprenda à escrever compromissos de forma efetiva e longo prazo.",
      "Aprenda como criar etiquetas de forma clara e não por intuição.",
      "Aprenda à escrever compromissos de forma efetiva e longo prazo.",
    ],
  },
  {
    badge: "Aula 4",
    title: "Listas de Tarefas & Atividades Opcionais.",
    items: [
      // TODO: substituir pelos tópicos reais desta aula
      "Aprenda à escrever compromissos de forma efetiva e longo prazo.",
    ],
  },
  {
    badge: "Aula 5",
    title: "Ritual Semanal, Bloqueios de Tempo e Controle de Energia.",
    items: [
      // TODO: substituir pelos tópicos reais desta aula
      "Aprenda à escrever compromissos de forma efetiva e longo prazo.",
    ],
  },
  {
    badge: "Aula 6",
    title: "Ritual Diário & Pirâmide de Execução Diária",
    items: [
      // TODO: substituir pelos tópicos reais desta aula
      "Aprenda à escrever compromissos de forma efetiva e longo prazo.",
    ],
  },
  {
    badge: "Aula 7",
    title: "Conclusão & Próximos Passos.",
    items: [],
  },
];

function LessonItem({ lesson }: { lesson: Lesson }) {
  const [open, setOpen] = useState(false);
  const hasItems = lesson.items.length > 0;

  return (
    <div className="flex items-start gap-5 border-b px-2 last:border-b-0">
      {/* badge "Aula X" — mt-4 alinha o topo com a 1ª linha do título (py-4) */}
      <div className="mt-4 flex h-7.75 shrink-0 items-center justify-center rounded-[12px] border px-2.5 text-[16px] font-normal tracking-[0.5px] text-[#5F6368]">
        {lesson.badge}
      </div>

      {/* coluna de conteúdo: garante que os sub-itens fiquem alinhados ao título */}
      <div className="min-w-0 flex-1">
        <button
          type="button"
          onClick={() => hasItems && setOpen((v) => !v)}
          aria-expanded={hasItems ? open : undefined}
          className={cn(
            "flex w-full items-start gap-3 py-4 text-left",
            hasItems ? "cursor-pointer" : "cursor-default",
          )}
        >
          <p className="flex-1 font-normal tracking-[3%] text-[#5F6368]">
            {lesson.title}
          </p>
          {hasItems && (
            <ChevronDown
              size={20}
              className={cn(
                "mt-0.5 shrink-0 text-[#9AA0A6] transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          )}
        </button>

        <AnimatePresence initial={false}>
          {open && hasItems && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col pb-2">
                {lesson.items.map((item, i) => (
                  <p
                    key={i}
                    className="border-t py-4 text-[15px] leading-5 font-normal tracking-[3%] text-[#9AA0A6]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Lessons() {
  return (
    <div className="flex w-full max-w-130 flex-col rounded-2xl border bg-white">
      {lessons.map((lesson) => (
        <LessonItem key={lesson.badge} lesson={lesson} />
      ))}
    </div>
  );
}
