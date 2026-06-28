import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
  /** Nível do heading. A página deve ter só um h1 (o herói); as demais seções usam h2. */
  as?: "h1" | "h2";
};

export default function Title({
  children,
  className = "",
  as: Tag = "h1",
}: TitleProps) {
  return (
    <Tag
      className={`text-[42px] leading-11.5 font-semibold tracking-normal text-[#202124] ${className}`}
    >
      {children}
    </Tag>
  );
}
