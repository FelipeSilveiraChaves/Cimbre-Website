import type { Metadata } from "next";
import LocalStorageLpRegister from "../../components/localstoragelpregister";
import ViewOfferTrigger from "../../components/ViewOfferTrigger";
import TextWrapper from "../../components/textwrapper";
import Title from "./components/title";
import Subtitle from "./components/subtitle";

import Image from "next/image";
import CtaButton from "./components/ctabutton";
import Lessons from "./components/lessons";
import Faq from "./components/faq";
import CallToActionLp2 from "./components/callToActionLp2";

export const metadata: Metadata = {
  title: "Cimbre - P1C2",
};

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
                />
              </span>
              organizado!
            </Title>
            <Subtitle className="my-5">
              Aprenda a controlar a sua vida com uma Agenda, um Bloco de Notas e
              uma Lista de Tarefas.
            </Subtitle>
            <div className="flex gap-2">
              <CtaButton variant="primary" borderBeam targetId="preco" />
              <CtaButton variant="secondary" targetId="duvidas" />
            </div>
          </TextWrapper>
        </div>

        <div className="mt-6 flex w-full items-end justify-end pl-4 sm:items-center sm:justify-center">
          <div className="sm:p- rounded-tl-2xl rounded-bl-2xl bg-[#4285F5] pt-6 pl-6">
            <Image
              src={"/images/mainImage.png"}
              width={794}
              height={972}
              alt=""
              priority
              sizes="320px"
              className="w-121.5 sm:w-100"
            />
          </div>
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
            <Title as="h2" className="mt-3">
              Conteúdo.
            </Title>
            {/* título -> frase: 20px */}
            <Subtitle className="mt-5 mb-5">
              Ensinamos tudo a você em apenas 7 aulas rápidas e ricas em
              informação.
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

        <div className="mb-20 flex w-full flex-col items-center px-4">
          {/* dispara ViewOffer (Pixel + CAPI) quando a oferta entra na tela */}
          <ViewOfferTrigger />
          <div className="relative w-full max-w-130">
            <Image
              src="/images/threeIcons2.png"
              alt="Agenda, bloco de notas e lista de tarefas"
              width={134}
              height={64}
              className="absolute -top-10 left-6 z-10 h-20 w-auto"
            />
            <CallToActionLp2 />
            <p className="px-6 pt-2 text-[14px] leading-5 font-normal text-[#5F6368]">
              Comercializado por Interception Digital LTDA <br /> Cnpj
              49.821.411/0001-37
            </p>
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
          />
          <Title as="h2">Dúvidas?</Title>
          <Subtitle className="my-5">
            Caso ainda tenha dúvidas, leia a seção abaixo ou entre em contato
            com nossa equipe de suporte.
          </Subtitle>
          <div className="mb-6 flex gap-2">
            <CtaButton
              variant="primary"
              borderBeam
              checkout
              label="Comprar"
              icon="up-right"
            />
            <CtaButton
              variant="secondary"
              borderBeam
              href="https://wa.me/5553999255355?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20Cimbre%20e%20fiquei%20interessado.%20Quero%20entender%20melhor%20como%20funciona%20e%20se%20faz%20sentido%20para%20mim."
              label="WhatsApp"
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
