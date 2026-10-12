import { Home, KeyRound, ClipboardList, Calculator, Handshake } from "lucide-react";

const servicos = [
  {
    icon: Home,
    titulo: "Venda de Imóveis",
    texto: "Avaliação justa, divulgação qualificada e negociação conduzida do início ao fim.",
  },
  {
    icon: KeyRound,
    titulo: "Locação de Imóveis",
    texto: "Seleção criteriosa de inquilinos e contratos seguros para proprietários e locatários.",
  },
  {
    icon: ClipboardList,
    titulo: "Administração de Imóveis",
    texto: "Gestão de aluguéis, repasses, vistorias e manutenção com total transparência.",
  },
  {
    icon: Calculator,
    titulo: "Simulação de Financiamento",
    texto: "Orientação sobre crédito imobiliário e simulações para caber no seu orçamento.",
  },
  {
    icon: Handshake,
    titulo: "Assessoria Completa",
    texto: "Documentação, cartório e todo o suporte jurídico até a entrega das chaves.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="reveal max-w-xl">
          <span className="eyebrow">O que fazemos</span>
          <span className="gold-rule mt-5" />
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Nossos Serviços
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <div
              key={s.titulo}
              className="reveal group bg-card p-8 transition-smooth hover:bg-secondary"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <s.icon className="h-6 w-6 text-gold transition-smooth group-hover:scale-110" />
              <h3 className="font-display mt-6 text-2xl text-foreground">{s.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
            </div>
          ))}
          <div className="hidden bg-card lg:block" />
        </div>
      </div>
    </section>
  );
}
