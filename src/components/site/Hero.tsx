import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import topicon from "../../../topicon.jpg";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero relative flex min-h-[100svh] items-end overflow-hidden bg-brand-blue-dark pt-28"
    >
      <img
        src={heroImg}
        alt="Casa contemporânea de alto padrão ao entardecer"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,39,.92)_0%,rgba(4,16,39,.68)_44%,rgba(4,16,39,.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,16,39,.8),transparent_50%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-20 lg:px-10 lg:pb-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-brand-red-light">
            <Sparkles className="h-4 w-4" /> {site.creci}{" "}
            <span className="h-px w-10 bg-brand-red-light/70" />
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-8xl">
            O lugar certo para <em className="not-italic text-brand-red-light">viver bem.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Curadoria de imóveis e atendimento próximo para você comprar, vender ou alugar em
            Curitiba e região.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl("Olá! Gostaria de falar com um corretor da Habitarte Imóveis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-brand-red px-7 text-sm font-semibold text-white shadow-xl shadow-brand-red/20 transition-smooth hover:-translate-y-0.5 hover:bg-brand-red-dark"
            >
              <MessageCircle className="h-4 w-4" /> Falar com um especialista
            </a>
            <a
              href="#imoveis"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/35 px-7 text-sm font-semibold text-white transition-smooth hover:border-white hover:bg-white/10"
            >
              Explorar imóveis
            </a>
          </div>
        </div>
        <div className="mt-16 flex items-center gap-4 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0">
          <img src={topicon} alt="" className="h-14 w-14 rounded-full object-cover opacity-90" />
          <p className="max-w-[12rem] text-xs leading-relaxed text-white/60">
            Uma imobiliária que entende o valor de cada escolha.
          </p>
        </div>
      </div>
      <a
        href="#sobre"
        aria-label="Rolar para a seção sobre"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/60 transition-smooth hover:text-white md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
