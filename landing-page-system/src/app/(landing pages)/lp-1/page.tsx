import { Badge } from "../../components/badge";
import { DashedDivider } from "../../components/dasheddivider";
import LocalStorageLpRegister from "../../components/localstoragelpregister";
import BaseContent from "./components/paragraph";
import TextWrapper from "./components/textwrapper";
import { Title } from "./components/title";
import LessonBlock from "./components/lessonblock";
import CallToAction from "../../components/calltoaction";
import FAQCard from "../../components/FAQ";
import AgendaCompareSlider from "./components/AgendaCompareSliderLazy";

export default function LandingPageOne() {
  // padding ta 45 no total, px-4 no main container para o video, e px-7.25 nos textos. assim ficando 16px para os videos e 29px+16px = 45px para os textos

  const faqs = [
    {
      question: "O curso é para iniciantes?",
      answer:
        "O curso foi pensado para ambos os perfis. Se você está começando, vai aprender a fazer certo desde o início. Se já tem experiência, vai organizar o conhecimento e descobrir pontos cegos que podem estar custando dinheiro.",
    },
    {
      question: "As aulas são demoradas?",
      answer:
        "O curso completo tem apenas 60 minutos, dividido em 6 aulas de 10 minutos cada. Você pode assistir tudo de uma vez ou ir aula por aula, no seu ritmo.",
    },
    {
      question: "Quanto tempo de acesso?",
      answer:
        "O acesso é vitalício. Uma vez que você comprar, o curso é seu para sempre. Isso inclui todas as atualizações futuras que fizermos no conteúdo.",
    },
    {
      question: "E se eu não gostar do curso?",
      answer:
        "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não valeu a pena, basta pedir o reembolso e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.",
    },
    {
      question: "Quais são os materiais extra?",
      answer:
        "Sim! Você recebe planilhas práticas para calcular os principais indicadores financeiros do seu negócio. São ferramentas que você pode usar imediatamente após assistir as aulas.",
    },
    {
      question: "Posso assistir pelo celular?",
      answer:
        "Sim! A plataforma é 100% responsiva e você pode assistir as aulas em qualquer dispositivo: computador, tablet ou celular.",
    },
  ];

  return (
    <>
      <LocalStorageLpRegister lpId={"lp-1"} />
      <div className="flex w-full flex-col bg-[#F8FCFF]">
        <div className="flex h-full w-full flex-col items-center justify-center px-4">
          <TextWrapper>
            <Title className="mb-7 text-[52px]">
              Ser <Badge label="Produtivo" classNameDiv="-mt-2" /> anda muito
              complicado
            </Title>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-225 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <TextWrapper>
            <BaseContent className="pt-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </TextWrapper>
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Então, pensamos em{" "}
              <Badge classNameDiv="sm:-mb-1" label="Simplificar" />
            </Title>

            <BaseContent className="py-7">
              Passamos um ano viajando por todo o país, conversando com pessoas.
            </BaseContent>

            <BaseContent className="pb-7">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom design e como contar
              uma história envolvente. Acontece que era isso que faltava na
              experiência.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <TextWrapper>
            <BaseContent className="pt-7">
              Não tínhamos a mínima ideia de moda, produção, nem mesmo de
              camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </TextWrapper>
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Juntamos isso em <Badge label="6 Aulas" />
            </Title>

            <BaseContent className="pt-7 pb-11">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos era sobre bom.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Bloco de notas"
            whichLesson="Aula 1"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />

          <AgendaCompareSlider />
          <LessonBlock
            lessonName="Agenda"
            whichLesson="Aula 2"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Lista de tarefas"
            whichLesson="Aula 3"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Diário"
            whichLesson="Aula 4"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Semanal"
            whichLesson="Aula 5"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Mensal"
            whichLesson="Aula 6"
            description="Não tínhamos a mínima ideia de moda, produção, nem mesmo de camisetas. Tudo o que sabíamos era sobre bom."
          />
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Criamos, <Badge label="Estudos" /> de caso
            </Title>

            <BaseContent className="pt-7.5 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Treinamos uma <Badge label="Equipe" /> suporte
            </Title>

            <BaseContent className="pt-7.5 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Incluímos uma <Badge label="Garantia" />
            </Title>

            <BaseContent className="pt-7.5 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-video w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />

          <DashedDivider className="mt-11 mb-21" />

          <TextWrapper className="sm:flex sm:max-w-110.5 sm:flex-col sm:items-start sm:justify-start">
            <Title className="text-[49px]">
              E oferecemos a um <Badge label="Valor" /> justo
            </Title>

            <BaseContent className="pt-7 pb-7">
              Acontece que era isso que faltava na experiência, produção, nem
              mesmo de camisetas. Tudo o que sabíamos.
            </BaseContent>
          </TextWrapper>
        </div>

        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom,#F8FCFF_5%,#0D99FF_25%,#0F192F_80%)]">
          <CallToAction />
        </div>

        <div className="flex w-full flex-col items-center justify-center bg-[#0F192F]">
          <DashedDivider className="mt-11 mb-11" stroke="#E0E5EE10" />
          <div className="px-5.25">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                Question={faq.question}
                Answer={faq.answer}
                className={index !== faqs.length - 1 ? "mb-5" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
