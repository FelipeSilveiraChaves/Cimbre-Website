import LocalStorageLpRegister from "../../components/localstoragelpregister";
import TextWrapper from "../../components/textwrapper";
import Title from "./components/title";
import Subtitle from "./components/subtitle";

import Image from "next/image";
import CtaButton from "./components/ctabutton";
import Lessons from "./components/lessons";
import Faq from "./components/faq";

export default function LandingPageTwo() {
  return (
    <>
      <LocalStorageLpRegister lpId={"lp-2"} />
      {/* container base: full width, sem padding */}
      <div className="font-gsf flex min-h-screen w-full flex-col items-center justify-center bg-[#F8F8F8] pt-27">
        {/* coluna de conteúdo: gutter de 16px (base do cálculo) + centraliza */}
        <div className="flex w-full flex-col items-center px-4">
          {/* texto: px-4 (16px) + px-6 (24px) = 40px */}
          <TextWrapper padding="px-6">
            <Title>
              <span className="flex items-center gap-3">
                Seja
                <Image
                  src="/images/threeIcons.png"
                  alt="Agenda, bloco de notas e lista de tarefas"
                  width={277}
                  height={133}
                  className="-mb-0.5 h-14.75 w-auto"
                  priority
                />
              </span>
              organizado!
            </Title>
            <Subtitle className="my-5">
              Aprenda a usar uma agendas, listas de tarefas e blocos de notas
              para controlar a sua vida.
            </Subtitle>
            <div className="flex gap-2">
              <CtaButton variant="primary" borderBeam targetId="preco" />
              <CtaButton variant="secondary" targetId="duvidas" />
            </div>
          </TextWrapper>
        </div>

        <div className="mt-6 flex w-full items-end justify-end">
          <Image
            src={"/images/mainImage.png"}
            width={755}
            height={487}
            alt=""
            className="w-80"
          />
        </div>
        <div
          id="conteudos"
          className="mt-16 flex w-full scroll-mt-24 flex-col items-center px-4"
        >
          <TextWrapper padding="px-6">
            <Image
              src="/images/threeIcons.png"
              alt="Agenda, bloco de notas e lista de tarefas"
              width={277}
              height={133}
              className="h-15 w-auto"
            />
            {/* imagem -> título: 16px */}
            <Title className="mt-3">Conteúdos.</Title>
            {/* título -> frase: 20px */}
            <Subtitle className="mt-5 mb-5">
              São sete aulas diretas ao ponto para você aplicar hoje mesmo.
            </Subtitle>
            <div className="mb-4 flex gap-2">
              <CtaButton
                variant="primary"
                borderBeam
                targetId="preco"
                beamColor="#FFF"
                label="Garanta já!"
              />
            </div>
          </TextWrapper>
        </div>

        <div className="mb-16 flex w-full flex-col items-center px-4">
          <Lessons />
        </div>

        <div id="preco" aria-hidden className="scroll-mt-24" />
        <TextWrapper padding="px-6">
          <Image
            src="/images/notesAppIcon.png"
            alt="Agenda, bloco de notas e lista de tarefas"
            width={56}
            height={56}
            className="h-14.75 w-auto"
            priority
          />
          <Title>Risco zero!</Title>
          <Subtitle className="mt-4 mb-18">
            São sete aulas curtas e diretas ao ponto para você aplicar hoje
            mesmo.
          </Subtitle>
        </TextWrapper>
        {/* quadro em branco — a imagem entra aqui depois */}
        <div className="mb-20 flex w-full flex-col items-center px-4">
          <div className="relative w-full max-w-100">
            <Image
              src="/images/threeIcons2.png"
              alt="Agenda, bloco de notas e lista de tarefas"
              width={134}
              height={64}
              className="absolute -top-10 left-6 z-10 h-20 w-auto"
            />
            <div className="aspect-5/6 w-full rounded-2xl border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
        <div id="duvidas" aria-hidden className="scroll-mt-24" />
        <TextWrapper padding="px-6">
          <Image
            src="/images/WHATSAPP.png"
            alt="logo whatsapp"
            width={58}
            height={58}
            className="mb-4 h-14.75 w-auto"
            priority
          />
          <Title>Dúvidas?</Title>
          <Subtitle className="my-5">
            São sete aulas curtas e diretas ao ponto para você aplicar hoje
            mesmo.
          </Subtitle>
          <div className="mb-6 flex gap-2">
            <CtaButton
              variant="primary"
              borderBeam
              targetId="preco"
              label="Comprar"
              icon="up"
            />
            <CtaButton
              variant="secondary"
              borderBeam
              href="https://wa.me/5553999255355?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20Cimbre%20e%20fiquei%20interessado.%20Quero%20entender%20melhor%20como%20funciona%20e%20se%20faz%20sentido%20para%20mim."
              label="Tirar dúvidas no nosso WhatsApp"
            />
          </div>
        </TextWrapper>
        <div className="flex w-full flex-col items-center px-4">
          <Faq />
        </div>
      </div>
    </>
  );
}
