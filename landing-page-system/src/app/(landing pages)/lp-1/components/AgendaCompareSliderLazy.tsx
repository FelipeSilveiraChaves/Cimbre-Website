"use client";

import dynamic from "next/dynamic";

const AgendaCompareSlider = dynamic(
  () => import("./AgendaCompareSlider"),
  { ssr: false }
);

export default function AgendaCompareSliderLazy() {
  return <AgendaCompareSlider />;
}
