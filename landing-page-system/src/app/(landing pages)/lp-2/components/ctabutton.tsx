"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, ArrowUpRight, type LucideIcon } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

// direções de seta passáveis como string (serializável de Server -> Client)
type IconDir = "down" | "up" | "up-right";
const ICONS: Record<IconDir, LucideIcon> = {
  down: ArrowDown,
  up: ArrowUp,
  "up-right": ArrowUpRight,
};

const variants: Record<
  Variant,
  {
    bg: string;
    label: string;
    Icon: LucideIcon;
    iconColor: string;
    textColor: string;
    beamBorder: string;
  }
> = {
  primary: {
    bg: "#202124",
    label: "Iniciar curso",
    Icon: ArrowDown,
    iconColor: "#6A6B6D",
    textColor: "#FFFFFF",
    beamBorder: "border-[#202124]",
  },
  secondary: {
    bg: "#FFF",
    label: "Tirar dúvidas",
    Icon: ArrowUpRight,
    iconColor: "#CACBCD",
    textColor: "#5F6368",
    beamBorder: "border-[#FFFFFF]",
  },
};

export default function CtaButton({
  variant = "primary",
  borderBeam = false,
  beamColor = "#D7FF60",
  targetId,
  href,
  label,
  icon,
}: {
  variant?: Variant;
  borderBeam?: boolean;
  beamColor?: string;
  // id da seção para ancoragem (rola suavemente até ela ao clicar)
  targetId?: string;
  // link externo (ex.: WhatsApp). Tem prioridade sobre targetId e abre em nova aba.
  href?: string;
  // texto do botão; se omitido, usa o padrão da variante
  label?: string;
  // direção da seta; se omitida, usa o padrão da variante
  icon?: IconDir;
}) {
  const {
    bg,
    label: defaultLabel,
    Icon: defaultIcon,
    iconColor,
    textColor,
    beamBorder,
  } = variants[variant];

  const Icon = icon ? ICONS[icon] : defaultIcon;

  const className = cn(
    "flex h-8 cursor-pointer items-center justify-center rounded-[8px] py-2.5 pr-2 pl-2.5 text-[17px] leading-4.25 font-normal [box-shadow:0_0_0_1px_rgba(0,0,0,0.06),0_1px_1px_-0.5px_rgba(0,0,0,0.06),0_3px_3px_-1.5px_rgba(0,0,0,0.06)]",
    borderBeam && "relative",
  );

  const content = (
    <>
      {borderBeam && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
          <BorderBeam
            lightWidth={80}
            borderWidth={1.5}
            duration={2}
            lightColor={beamColor}
            className={cn(beamBorder, "opacity-100")}
          />
        </span>
      )}
      <span className="relative z-10 flex items-center justify-center gap-1">
        {label ?? defaultLabel} <Icon size={19} color={iconColor} />
      </span>
    </>
  );

  // link externo (WhatsApp etc.) — abre em nova aba
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: 1 }}
        whileTap={{ y: 4 }}
        transition={{ type: "tween", stiffness: 200, damping: 10 }}
        style={{ backgroundColor: bg, color: textColor }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  // ancoragem interna (ou sem ação, se não houver targetId)
  const handleClick = targetId
    ? () =>
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
        })
    : undefined;

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: 1 }}
      whileTap={{ y: 4 }}
      transition={{ type: "tween", stiffness: 200, damping: 10 }}
      style={{ backgroundColor: bg, color: textColor }}
      className={className}
    >
      {content}
    </motion.button>
  );
}
