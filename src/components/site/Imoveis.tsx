import { BedDouble, Bath, Car, Ruler } from "lucide-react";
import img1 from "@/assets/imovel-1.jpg";
import img2 from "@/assets/imovel-2.jpg";
import img3 from "@/assets/imovel-3.jpg";
import img4 from "@/assets/imovel-4.jpg";
import img5 from "@/assets/imovel-5.jpg";
import img6 from "@/assets/imovel-6.jpg";
import { whatsappUrl } from "@/lib/site";

const imoveis = [
  {
    img: img1,
    tipo: "Apartamento",
    bairro: "Água Verde – Curitiba/PR",
    quartos: 3,
    suites: 1,
    vagas: 2,
    area: 92,
    preco: "R$ 749.000",
  },
  {
    img: img2,
    tipo: "Casa",
    bairro: "Santa Felicidade – Curitiba/PR",
    quartos: 4,
    suites: 2,
    vagas: 4,
    area: 240,
    preco: "R$ 1.390.000",
  },
  {
    img: img3,
    tipo: "Apartamento",
    bairro: "Batel – Curitiba/PR",
    quartos: 2,
    suites: 1,
    vagas: 1,
    area: 78,
    preco: "R$ 895.000",
  },
  {
    img: img4,
    tipo: "Sobrado",
    bairro: "Jardim das Américas – Curitiba/PR",
    quartos: 3,
    suites: 1,
    vagas: 2,
    area: 158,
    preco: "R$ 980.000",
  },
  {
    img: img5,
    tipo: "Sala Comercial",
    bairro: "Centro Cívico – Curitiba/PR",
    quartos: 0,
    suites: 0,
    vagas: 2,
    area: 120,
    preco: "R$ 6.200/mês",
  },
  {
    img: img6,
    tipo: "Apartamento",
    bairro: "Cabral – Curitiba/PR",
    quartos: 3,
    suites: 1,
    vagas: 2,
    area: 105,
    preco: "R$ 4.500/mês",
  },
];

export function Imoveis() {
  return (
    <section id="imoveis" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="reveal max-w-xl">
          <span className="eyebrow">Seleção Habitarte</span>
          <span className="gold-rule mt-5" />
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Imóveis em Destaque
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma curadoria de oportunidades para morar ou investir em Curitiba.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {imoveis.map((im, i) => (
            <article
              key={im.bairro + im.tipo}
              className="reveal property-card group flex flex-col overflow-hidden rounded-sm bg-card shadow-soft transition-smooth hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={im.img}
                  alt={`${im.tipo} em ${im.bairro}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-56 w-full object-cover transition-smooth group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
                  {im.tipo}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-muted-foreground">{im.bairro}</p>
                <p className="property-price font-display mt-2 text-2xl text-foreground">
                  {im.preco}
                </p>

                <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
                  {im.quartos > 0 && (
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-gold" /> {im.quartos} quartos
                    </span>
                  )}
                  {im.suites > 0 && (
                    <span className="inline-flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-gold" /> {im.suites} suíte
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <Car className="h-4 w-4 text-gold" /> {im.vagas} vagas
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-4 w-4 text-gold" /> {im.area} m²
                  </span>
                </div>

                <a
                  href={whatsappUrl(
                    `Olá! Tenho interesse no ${im.tipo} em ${im.bairro} (${im.preco}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm tracking-wide text-foreground transition-smooth hover:border-gold hover:bg-gold hover:text-primary"
                >
                  Tenho Interesse
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
