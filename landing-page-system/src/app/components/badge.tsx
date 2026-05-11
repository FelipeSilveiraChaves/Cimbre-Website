"use client";

import { Squircle } from "corner-smoothing";

type BadgeProps = {
  label?: string;
  className?: string;
  classNameDiv?: string;
};

export function Badge({
  label = "MARCH",
  className = "",
  classNameDiv = "",
}: BadgeProps) {
  return (
    <Squircle
      cornerRadius={17}
      cornerSmoothing={1}
      className={`font-title inline-flex items-center justify-center bg-[#CBE9FF] px-3.5 align-middle font-extrabold ${classNameDiv}`}
    >
      <span
        className={`text-[40px] leading-[49.5px] font-normal -tracking-[0.9px] text-[#0D99FF] ${className}`}
      >
        {label}
      </span>
    </Squircle>
  );
}
