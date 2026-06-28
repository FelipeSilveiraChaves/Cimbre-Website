import { MdOutlineSupportAgent, MdOutlineAllInclusive } from "react-icons/md";
import type { IconType } from "react-icons";
import IniciarButton from "./iniciarButton";

// 👇 Edite aqui as aulas listadas no card de oferta.
const lessons: string[] = [
  "Aula de abertura",
  "Aula sobre Agendas",
  "Aula sobre Lista de Tarefas",
  "Aula sobre Bloco de Notas",
  "Aula sobre Planejamento Semanal",
  "Aula sobre Ações diárias",
  "Aula de revisão",
];

type Bonus = {
  icon: IconType;
  title: string;
  description: string;
};

const bonuses: Bonus[] = [
  {
    icon: MdOutlineSupportAgent,
    title: "Suporte de 365 dias",
    description:
      "Comprando agora, você garante um acompanhamento personalizado de 365 dias. Durante esse tempo, nossa equipe estará a disposição para ajudar você a aplicar o conteúdo na prática.",
  },
  {
    icon: MdOutlineAllInclusive,
    title: "Acesso vitalício",
    description:
      "Este produto passará por uma grande atualização em breve, o que nos forçará a aumentar o preço. Comprando agora, você garante acesso a essa e as demais atualizações de graça, para sempre!",
  },
];

// Ícone "menu_book" do Google Material Symbols (Outlined). Dimensionado pela
// font-size (1em) e colorido por currentColor, igual aos ícones do react-icons.
function MenuBookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z" />
    </svg>
  );
}

// Ícone "credit_card_clock" do Google Material Symbols (Outlined). Mesma
// abordagem do MenuBookIcon: tamanho via font-size e cor via currentColor.
function CreditCardClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm307 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v210q-36-25-78-37.5T716-560q-54 0-104 21t-88 59H160v240h283q3 21 9 41t15 39Zm320-25 28-28-75-75v-112h-40v128l87 87ZM721-80q-84 0-142.5-58T520-280q0-84 58.5-142T721-480q83 0 141 58.5T920-280q0 83-58 141.5T721-80Z" />
    </svg>
  );
}

export default function CallToActionLp2() {
  return (
    <div className="flex flex-col items-start rounded-2xl bg-[#202124] p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.06),0_1px_1px_-0.5px_rgb(0_0_0_/_0.06),0_3px_3px_-1.5px_rgb(0_0_0_/_0.06)]">
      <div className="flex flex-col">
        <div className="flex flex-col p-2">
          <h3 className="mt-6 text-[42px] leading-12 font-bold tracking-normal text-white">
            Invista em você!
          </h3>
          <p className="mb-6 font-normal text-[#8F9091]">
            São sete aulas curtas e diretas ao ponto para você aplicar hoje
            mesmo.
          </p>

          <ul className="flex w-full flex-col">
            {lessons.map((lesson) => (
              <li
                key={lesson}
                className="flex h-9 items-center gap-3 border-b border-[#8F909115] last:border-b-0 last:pb-0"
              >
                <MenuBookIcon className="shrink-0 text-[18px] text-[#8F9091]" />
                <span className="text-[16px] leading-none font-normal text-white">
                  {lesson}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-4">
        {bonuses.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-2 rounded-xl border border-dashed border-white/15 p-2"
          >
            <div className="flex items-start gap-2.5">
              <Icon className="shrink-0 text-[22px] text-white" />
              <div className="flex flex-col gap-2">
                <span className="text-[14px] leading-none font-medium tracking-[3%] text-white">
                  {title}
                </span>
                <p className="text-[14px] leading-5 font-normal tracking-[3%] text-[#8F9091]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-0 pt-8">
        <div className="z-10 -mb-2.5 h-6.75 rounded-[8px] border-2 border-[#848586] bg-[#202124] px-2">
          <p className="text-[16px] font-light tracking-[0.5px] text-white">
            12x de:{" "}
          </p>
        </div>
        <div className="flex h-25 items-center justify-center">
          <div className="mr-1.5 text-[24px] leading-6 font-semibold tracking-[-0.99px] text-[#8F9091]">
            <span>R$</span>
          </div>

          <span className="text-[124px] font-bold text-[#FFF] antialiased [text-rendering:optimizeLegibility]">
            9
          </span>

          <span className="-ml-1.5 text-[32px] leading-6 font-semibold tracking-[-0.99px] text-[#8F9091]">
            ,86
          </span>
        </div>
        <div className="mt-3 inline-flex h-8 items-center justify-center rounded-[8px] border border-[#848586] bg-[#3F4043] px-2 text-[16px] leading-6 font-light text-[#F5F7FA]">
          Ou R$ 97 à vista
        </div>
      </div>

      {/* garantia de 7 dias — mesmo card dos bônus acima */}
      <div className="mt-6 flex w-full flex-col gap-2 rounded-xl border border-dashed border-white/15 p-2">
        <div className="flex items-start gap-2.5">
          <CreditCardClockIcon className="shrink-0 text-[22px] text-white" />
          <div className="flex flex-col gap-2">
            <span className="text-[14px] leading-none font-medium tracking-[3%] text-white">
              Garantia de 7 dias
            </span>
            <p className="text-[14px] leading-5 font-normal tracking-[3%] text-[#8F9091]">
              Comprou, leu e não era pra você? É só pedir o reembolso dentro de
              7 dias e devolvemos 100% do valor. Sem burocracia.
            </p>
          </div>
        </div>
      </div>

      {/* checkout seguro + selo Hubla (igual ao CTA da lp-1) */}
      <div className="mt-6 flex w-full items-center justify-center">
        <p className="text-[13px] leading-4.5 tracking-normal text-[#8F9091]">
          Checkout Seguro
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ml-1.25"
          src="/hubla2.svg"
          alt="Hubla"
          width={38}
          height={16}
        />
      </div>

      {/* botão de compra trazido do CTA da lp-1 */}
      <div className="mt-2 w-full">
        <IniciarButton />
      </div>
    </div>
  );
}
