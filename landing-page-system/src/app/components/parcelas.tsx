"use client";

import { BorderBeam } from "@/components/ui/border-beam";

export default function ParcelasComponent() {
  return (
    <div className="relative -mt-4.5 mb-4 inline-flex h-9 cursor-pointer items-center justify-center rounded-full bg-[#202A40] px-4 text-[20px] leading-6 font-medium tracking-normal text-[#FFFFFF]">
      Por 12x de:
      <BorderBeam
        lightWidth={180}
        borderWidth={1}
        duration={5}
        lightColor="#FFFF"
        className="border-[#202A40] opacity-100"
      />
    </div>
  );
}
