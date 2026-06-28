import { ReactNode } from "react";

type TextWrapperProps = {
  children: ReactNode;
  className?: string;
  padding?: string;
};

export default function TextWrapper({
  children,
  className = "",
  padding = "px-7.25",
}: TextWrapperProps) {
  return <div className={`max-w-125 ${padding} ${className}`}>{children}</div>;
}
