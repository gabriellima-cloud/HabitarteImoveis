import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Imoveis } from "@/components/site/Imoveis";
import { Servicos } from "@/components/site/Servicos";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

const title = "Habitarte Imóveis | Imobiliária em Curitiba/PR";
const description =
  "Venda e locação de apartamentos, casas, sobrados, salas comerciais e terrenos em Curitiba e região. Atendimento personalizado e transparente. CRECI J3929.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="site-shell min-h-screen scroll-smooth bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Imoveis />
        <Servicos />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
