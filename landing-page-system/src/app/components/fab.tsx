"use client";

import Link from "next/link";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

type SupportButtonProps = {
  href?: string; // ex: "/contato" ou "https://wa.me/..."
  label?: string;
};

export default function SupportButton({
  href = "/contact",
  label = "Suporte",
}: SupportButtonProps) {
  return (
    <Link
      href={href}
      className="font-title fixed right-5 bottom-5 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-[#050D1F] px-4 py-2.5 text-[16px] font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
      aria-label="Abrir suporte"
    >
      <IoChatbubbleEllipsesSharp className="h-5 w-5" />
      {label}
    </Link>
  );
}
