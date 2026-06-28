import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={`text-[42px] leading-11.5 font-semibold tracking-normal text-[#202124] ${className}`}
    >
      {children}
    </h1>
  );
}
