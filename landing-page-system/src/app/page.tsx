import { Badge } from "./components/badge";
import { BlurReveal } from "./components/blurreview";
import Button from "./components/button";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col content-between items-center justify-center p-4">
        <h1 className="text-carbon-800 mb-8 pb-2 text-[40px] leading-none tracking-[-0.4px] sm:text-5xl">
          <BlurReveal delay={0.05}>Organização</BlurReveal>{" "}
          <BlurReveal delay={0.1}>é</BlurReveal>{" "}
          <BlurReveal delay={0.15}>o</BlurReveal>{" "}
          <BlurReveal delay={0.2}>ato</BlurReveal>{" "}
          <BlurReveal delay={0.25}>de</BlurReveal>{" "}
          <BlurReveal delay={0.3}>colocar</BlurReveal>{" "}
          <BlurReveal delay={0.35}>as</BlurReveal>
          <br className="hidden sm:block" />
          <BlurReveal delay={0.4}>coisas</BlurReveal>{" "}
          <BlurReveal delay={0.45}>em</BlurReveal>{" "}
          <BlurReveal delay={0.5}>seus</BlurReveal>{" "}
          <BlurReveal delay={0.55}>devidos</BlurReveal>{" "}
          <BlurReveal delay={0.6}>lugares</BlurReveal>
        </h1>

        <BlurReveal delay={0.8}>
          <Badge className="" label="Em breve" />
        </BlurReveal>
      </div>
      <Footer variant="light" />
    </div>
  );
}
