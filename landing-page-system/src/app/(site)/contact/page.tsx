export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center justify-start px-6">
      <div className="max-w-145 py-2">
        <h1 className="text-carbon-800 pb-2 text-[40px] leading-none tracking-[-0.4px] sm:text-5xl">
          Contato
        </h1>

        <h3 className="text-carbon-400 text-[22px] sm:text-2xl/[32px]">
          Estamos aqui para ajudar
        </h3>

        <div className="text-carbon-800 mt-8 flex flex-col gap-8 text-xl/[29.2px] sm:mt-10 sm:gap-[29.2px]">
          <p>
            Se você tiver alguma dúvida sobre nossos conteúdos, produtos
            digitais, acesso ao material ou qualquer informação disponível no
            site, entre em contato com a nossa equipe.
          </p>

          <p>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:contato@cimbre.com.br?subject=Contato%20pelo%20site%20Cimbre&body=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre..."
              aria-label="Enviar e-mail para contato@cimbre.com.br"
              className="decoration-carbon-200 underline underline-offset-4 transition-colors hover:text-[#0D99FF]"
            >
              contato@cimbre.com.br
            </a>
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-carbon-200 underline underline-offset-4 transition-colors hover:text-[#25D366]"
            >
              +55 (00) 00000-0000 (temporário)
            </a>
          </p>

          <p>
            Nosso atendimento acontece em dias úteis. Respondemos em até 2 dias
            úteis.
          </p>
          <p className="text-carbon-600 text-lg">
            Para facilitar o atendimento, informe na sua mensagem: o{" "}
            <b>nome do produto </b> ou <b>aula</b> sobre a qual você está
            falando; o<b>e-mail usado na compra ou cadastro</b>; e uma{" "}
            <b>breve descrição da sua dúvida.</b>
          </p>
          <p className="text-carbon-600 text-lg">
            Para solicitações de reembolso, informe o e-mail utilizado na
            compra.{" "}
            <b>
              Os produtos digitais da Cimbre contam com garantia de 7 dias
              corridos após a confirmação da compra.
            </b>{" "}
            Dentro desse prazo, o comprador pode solicitar o reembolso integral
            do valor pago.
          </p>
        </div>
      </div>
    </div>
  );
}
