type DashedDividerProps = {
  className?: string;
  stroke?: string; // nova prop
};

export function DashedDivider({
  className = "",
  stroke = "#E0E5EE50", // valor padrão
}: DashedDividerProps) {
  return (
    <div className={`w-full ${className} max-w-125 px-7.25 md:max-w-screen`}>
      <svg width="100%" height="6">
        <line
          x1="0"
          y1="3"
          x2="100%"
          y2="3"
          stroke={stroke}
          strokeWidth="2"
          strokeDasharray="8 12"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
