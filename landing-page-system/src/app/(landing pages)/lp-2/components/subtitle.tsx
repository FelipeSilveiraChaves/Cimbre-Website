import { ReactNode } from "react";

type SubtitleProps = {
  children: ReactNode;
  className?: string;
};

export default function Subtitle({ children, className = "" }: SubtitleProps) {
  return (
    <p
      className={`text-4.25 leading-6 font-normal tracking-[3%] text-[#5F6368] ${className}`}
    >
      {children}
    </p>
  );
}
