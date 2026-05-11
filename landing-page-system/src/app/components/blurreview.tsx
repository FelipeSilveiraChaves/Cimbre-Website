"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurRevealProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function BlurReveal({
  className,
  children,
  delay = 0,
  duration = 1,
}: BlurRevealProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      initial={{ opacity: 0, filter: "blur(12px)", y: 6 }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : { opacity: 0, filter: "blur(12px)", y: 6 }
      }
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
