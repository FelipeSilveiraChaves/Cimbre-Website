import Image from "next/image";
import { DashedDivider } from "./dasheddivider";
import ParcelasComponent from "./parcelas";
import BuyButton from "./purchasebutton";
import MockupMac from "../../../assets/images/68951360dc0e8215efde949a_010.jpeg";

export default function CallToAction() {
  return (
    <div className="font-title flex w-full max-w-95.5 flex-col items-center justify-center rounded-b-4xl bg-transparent">
      <div className="px-2">
        <Image
          src={MockupMac}
          alt="macbook com propaganda"
          className="h-auto w-full rounded-2xl bg-[#F5F7FA]"
        />
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
            6 aulas de gestão do tempo
          </p>
        </div>
        <DashedDivider stroke="#E0E5EE10" className="my-1" />
        <div className="flex h-6 items-center justify-center">
          <p className="text-[20px] leading-6 tracking-normal text-[#F5F7FA]">
            12 materiais complementares
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
