import Button from "./components/button";

export default function notFound404() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div>
        <h1 className="text-carbon-800 justify-center pb-2 text-6xl leading-none tracking-[-0.4px] sm:text-8xl">
          404
        </h1>
        <h2 className="text-carbon-800 justify-center pb-2 text-[36px] leading-none tracking-[-0.4px] sm:text-5xl">
          Página não encontrada
        </h2>
        <p className="text-carbon-400 text-[22px]/[28px] sm:text-2xl/[32px]">
          Aqui nem a gente conseguiu se organizar, não deve estar na lista de
          tarefas
        </p>
        <div className="flex justify-start pt-10">
          <Button href={"/"} variant="dark">
            Que tal voltar?
          </Button>
        </div>
      </div>
    </div>
  );
}
