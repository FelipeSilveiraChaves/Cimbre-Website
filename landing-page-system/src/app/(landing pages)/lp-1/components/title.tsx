type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={`font-title leading-12.25 font-semibold tracking-[-0.9px] text-[#202A40] ${className}`}
    >
      {children}
    </h1>
  );
}
