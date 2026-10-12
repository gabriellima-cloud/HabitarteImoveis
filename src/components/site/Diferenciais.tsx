import { HeartHandshake, Eye, Compass, Zap, BadgeCheck } from "lucide-react";

const itens = [
  {
    icon: HeartHandshake,
    titulo: "Atendimento personalizado",
    texto: "Cada cliente é acompanhado de perto, do primeiro contato à assinatura.",
  },
  {
    icon: Eye,
    titulo: "Transparência",
    texto: "Informações claras sobre valores, custos e condições, sem surpresas.",
  },
  {
    icon: Compass,
    titulo: "Conhecimento local",
    texto: "Anos de vivência nos bairros de Curitiba e região metropolitana.",
  },
  {
    icon: Zap,
    titulo: "Agilidade",
    texto: "Respostas rápidas no WhatsApp e visitas agendadas sem burocracia.",
  },
  {
    icon: BadgeCheck,
    titulo: "Confiança",
    texto: "Empresa registrada sob o CRECI J3929, com processos seguros.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="reveal max-w-xl">
          <span className="eyebrow">Diferenciais</span>
          <span className="gold-rule mt-5" />
          <h2 className="font-display mt-6 text-3xl leading-tight text-on-dark sm:text-4xl lg:text-5xl">
            Por que escolher a Habitarte
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((it, i) => (
            <div
              key={it.titulo}
              className="reveal flex gap-4"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <it.icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div className="min-w-0">
                <h3 className="font-display text-xl text-on-dark">{it.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{it.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
