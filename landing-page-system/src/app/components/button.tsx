"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "default" | "red" | "dark";
  href: string;
  exeternalButton?: boolean;
  className?: string;
  disable?: Boolean;
};

const MotionLink = motion.create(Link);

export default function Button({
  href,
  exeternalButton = false,
  children,
  variant = "default",
  className,
}: ButtonProps) {
  const base =
    "rounded-full text-[18px] h-[45px] px-[18px] " +
    "inline-flex items-center justify-center leading-none " +
    "cursor-pointer select-none transition-colors duration-150 ease-out";

  const variants = {
    default:
      "bg-carbon-50 text-carbon-800 hover:bg-[#E5E5E5]  outline-1 outline-[#E5E5E5]",
    red: "bg-[#FFC0C0] text-[#FF0000] hover:bg-[#FFB3B3]",
    dark: "bg-carbon-800 text-carbon-50 hover:bg-carbon-700",
  };

  const classes = cn(base, variants[variant], className);

  const motionProps = {
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 520, damping: 32, mass: 0.6 },
  } as const;

  if (exeternalButton) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionProps}>
      {children}
    </MotionLink>
  );
}
