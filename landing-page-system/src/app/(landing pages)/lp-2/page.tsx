import LocalStorageLpRegister from "../../components/localstoragelpregister";
import TextWrapper from "../../components/textwrapper";
import Title from "./components/title";
import Subtitle from "./components/subtitle";

import Image from "next/image";
import CtaButton from "./components/ctabutton";

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
              <CtaButton variant="primary" borderBeam />
              <CtaButton variant="secondary" />
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
        <div className="mt-20 flex w-full flex-col items-center px-4">
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
            <Subtitle className="mt-5 mb-90">
              São sete aulas diretas ao ponto para você aplicar hoje mesmo.
            </Subtitle>
          </TextWrapper>
        </div>
      </div>
    </>
  );
}
