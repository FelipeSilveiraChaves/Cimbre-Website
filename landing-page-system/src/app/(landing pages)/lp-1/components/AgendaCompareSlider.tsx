"use client";

import { ReactCompareSlider } from "react-compare-slider";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import AgendaLotada from "../../../../../assets/images/agendalotadaMac.png";
import AgendaOrganizada from "../../../../../assets/images/agendaorganizadaMac.png";

export default function AgendaCompareSlider() {
  return (
    <ReactCompareSlider
      className="h-full w-full max-w-167.5 overflow-hidden rounded-2xl"
      position={40}
      itemOne={
        <Image
          src={AgendaOrganizada}
          alt="Agenda lotada"
          sizes="(max-width: 768px) 100vw, 670px"
        />
      }
      itemTwo={
        <Image
          src={AgendaLotada}
          alt="Agenda organizada pelo método"
          className="object-contain object-[center_55%]"
          sizes="(max-width: 768px) 100vw, 670px"
        />
      }
      handle={
        <div className="relative h-full">
          <div className="absolute top-0 left-1/2 h-full w-1.5 -translate-x-1/2 bg-[#202A40]" />
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-26 w-7.5 items-center justify-center rounded-full bg-[#0D99FF] shadow-md">
              <MoveHorizontal className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      }
    />
  );
}
