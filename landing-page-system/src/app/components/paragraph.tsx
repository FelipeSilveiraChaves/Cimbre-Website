import { ReactNode } from "react";

type BaseContentProps = {
  children: ReactNode;
  className?: string;
};

export default function BaseContent({
  children,
  className = "",
}: BaseContentProps) {
  return (
    <p
      className={`text-[18px] leading-6.75 tracking-normal text-[#202A40] lg:text-[20px] ${className} `}
    >
      {children}
    </p>
  );
}
