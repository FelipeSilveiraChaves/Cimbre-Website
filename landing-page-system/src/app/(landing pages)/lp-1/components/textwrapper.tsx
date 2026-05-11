import { ReactNode } from "react";

type TextWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function TextWrapper({
  children,
  className = "",
}: TextWrapperProps) {
  return <div className={`max-w-125 px-7.25 ${className}`}>{children}</div>;
}
