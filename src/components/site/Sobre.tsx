import { ShieldCheck, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

const marcos = [
  { icon: ShieldCheck, titulo: site.creci, texto: "Registro oficial, operação regularizada" },
  { icon: Clock, titulo: "+15 anos", texto: "De atuação no mercado curitibano" },
  { icon: MapPin, titulo: "Curitiba e região", texto: "Conhecimento profundo de cada bairro" },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <span className="eyebrow">Quem somos</span>
            <span className="gold-rule mt-5" />
            <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Sobre a Habitarte
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A Habitarte Imóveis atua em Curitiba com o propósito de transformar a experiência de
              comprar ou alugar um imóvel. Unimos conhecimento de mercado, atendimento próximo e
              transparência para que cada cliente encontre não apenas um imóvel, mas o lugar certo
              para viver ou investir.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {marcos.map((m) => (
                <div key={m.titulo}>
                  <m.icon className="h-5 w-5 text-gold" />
                  <p className="font-display mt-4 text-xl text-foreground">{m.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
