import Link from "next/link";

type FooterProps = {
  variant?: "light" | "dark";
};

export default function Footer({ variant = "light" }: FooterProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex w-full max-w-screen flex-col justify-start overflow-hidden pt-12 pb-18 pl-8 sm:justify-center sm:pt-16 sm:pb-4 sm:pl-0 sm:text-center ${isDark ? "bg-[#0F192F]" : "bg-[#F8F8F8]"}`}
    >
      <p
        className={`mb-0.5 text-base/[20px] ${
          isDark ? "text-[#F4F6F965]" : "text-carbon-400"
        }`}
      >
        © 2026 Cimbre. Todos os direitos reservados.
      </p>
      <p
        className={`mb-0.5 text-base/[20px] ${
          isDark ? "text-[#F4F6F965]" : "text-carbon-400"
        }`}
      >
        Um produto Interception Digital LTDA.
      </p>

      <p
        className={`text-base/[20px] ${
          isDark ? "text-[#F4F6F965]" : "text-carbon-400"
        }`}
      >
        <Link
          className={isDark ? "hover:text-[#0D99FF]" : "hover:text-carbon-600"}
          href="/terms"
        >
          Termos de Uso
        </Link>{" "}
        |{" "}
        <Link
          className={isDark ? "hover:text-[#0D99FF]" : "hover:text-carbon-600"}
          href="/policy"
        >
          Política de Privacidade
        </Link>{" "}
        |{" "}
        <Link
          className={isDark ? "hover:text-[#0D99FF]" : "hover:text-carbon-600"}
          href="/contact"
        >
          Contato
        </Link>
      </p>
    </div>
  );
}
