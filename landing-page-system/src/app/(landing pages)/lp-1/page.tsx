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
import Image from "next/image";

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
          <Image
            src="/images/productivity-methods.png"
            alt="Métodos de produtividade"
            width={356}
            height={224}
            className="h-auto w-full max-w-[500px] rounded-2xl border border-[#DDE3EA] shadow-sm"
            priority
          />
          <TextWrapper>
            <BaseContent className="pt-7">
              Todos os dias surgem novos métodos, aplicativos, rotinas e
              fórmulas prometendo ajudar você a usar melhor o seu tempo.
            </BaseContent>
            <BaseContent className="pt-7">
              Mas, em meio a tantos conselhos diferentes, fica difícil entender
              o que realmente funciona — e o que só aumenta a confusão.
            </BaseContent>
          </TextWrapper>
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Então, pensamos em{" "}
              <Badge classNameDiv="sm:-mb-1" label="Simplificar" />
            </Title>

            <BaseContent className="py-7">
              Passamos o último ano analisando as principais metodologias de
              produtividade modernas, procurando criar o método mais simples e
              eficiente possível — e conseguimos!
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <TextWrapper>
            <BaseContent className="pt-7">
              No fim, percebemos que a solução não precisava ser complexa: um
              bloco de notas, uma agenda e uma lista de tarefas já eram
              suficientes para resolver boa parte do problema.
            </BaseContent>
          </TextWrapper>
          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Organizamos isso em <Badge label="5 Aulas" />
            </Title>

            <BaseContent className="py-7">
              Para ensinar isso, organizamos tudo em 5 aulas direto ao ponto.
            </BaseContent>
            <BaseContent className="pt-7 pb-11">
              Cada aula resolve uma parte do quebra-cabeça. Primeiro, você
              aprende a capturar tudo o que aparece. Depois, entende onde cada
              coisa deve ficar. Por fim, cria dois rituais simples para manter a
              semana e o dia sob controle.
            </BaseContent>
          </TextWrapper>
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Bloco de notas"
            whichLesson="Aula 1"
            description="A Aula 1 fala sobre o Bloco de Notas. Todo dia, dezenas de pequenas demandas aparecem sem avisar. Saber o que fazer com elas é o primeiro passo da gestão do tempo — mas quase ninguém entende como fazer isso de verdade."
            classNameBaseContent="pb-15"
          />

          <AgendaCompareSlider />
          <LessonBlock
            lessonName="Agenda"
            whichLesson="Aula 2"
            description="Na Aula 2, o assunto muda para a Agenda. Existe uma forma certa de usá-la, e ela não é a forma que você provavelmente aprendeu. Aqui, vamos descobrir o que merece entrar ali dentro, o que nunca deveria ter entrado e por que essa distinção muda tudo."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Lista de tarefas"
            whichLesson="Aula 3"
            description="Já na Aula 3 partimos para a Lista de Tarefas, a ferramenta que funciona como auxiliar da Agenda. É ali que mora tudo aquilo que a Agenda, sozinha, não dá conta de organizar."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Semanal"
            whichLesson="Aula 4"
            description="A Aula 4 apresenta o Ritual Semanal. Uma sequência de passos que fazemos uma vez por semana para organizar os próximos sete dias e começar a semana sabendo exatamente o que ela exige de nós."
            classNameBaseContent="pb-15"
          />
          <div className="aspect-4/3 w-full max-w-187.5 rounded-2xl border border-blue-300 bg-[#F5F7FA]" />
          <LessonBlock
            lessonName="Ritual Diário"
            whichLesson="Aula 5"
            description="Já a Aula 5 apresenta o Ritual Diário. Outra sequência que fazemos ao longo do dia para manter o controle sobre as próximas 24 horas."
            classNameBaseContent="pb-15"
          />

          <DashedDivider className="mt-11 mb-21" />

          <TextWrapper>
            <Title className="text-[52px]">
              Treinamos uma equipe de <Badge label="Suporte" />
            </Title>

            <BaseContent className="pt-7 pb-7">
              As aulas foram pensadas para serem claras, mas aplicar qualquer
              método novo à própria rotina leva tempo. Se algo não fizer sentido
              ou você não souber como adaptar um conceito ao seu dia a dia,
              nossa equipe está disponível para ajudar. Sem respostas
              automáticas.
            </BaseContent>
          </TextWrapper>

          <DashedDivider className="mt-11 mb-21" />
          <TextWrapper>
            <Title className="text-[52px]">
              Incluímos uma ótima <Badge label="Garantia" />
            </Title>

            <BaseContent className="pt-7.5 pb-7">
              Você tem 7 dias para percorrer o curso e colocar o método em
              prática. Se sentir que ele não valeu o investimento, basta
              solicitar o reembolso dentro desse prazo. Sem condições, sem
              burocracia.
            </BaseContent>
          </TextWrapper>

          <DashedDivider className="mt-11 mb-21" />

          <TextWrapper className="sm:flex sm:max-w-110.5 sm:flex-col sm:items-start sm:justify-start">
            <Title className="text-[49px]">
              E oferecemos tudo por um valor <Badge label="justo" />
            </Title>

            <BaseContent className="pt-7 pb-7">
              Bloco de Notas, Agenda, Lista de Tarefas — e dois rituais para
              fazer as três conversarem. Tudo o que você precisa para parar de
              improvisar o próprio tempo, por um valor que cabe no orçamento.
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
