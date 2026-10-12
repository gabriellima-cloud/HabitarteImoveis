import { Instagram, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import topicon from "../../../topicon.jpg";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-brand-blue-dark py-14 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={topicon}
              alt="Habitarte Imóveis"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-2xl">Habitarte Imóveis</p>
              <p className="mt-1 text-sm text-white/60">{site.slogan}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/65 transition-smooth hover:text-brand-red-light"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href={whatsappUrl(`Olá, Habitarte Imóveis!`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-smooth hover:border-brand-red-light hover:text-brand-red-light"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-smooth hover:border-brand-red-light hover:text-brand-red-light"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>{site.razaoSocial} · Todos os direitos reservados</p>
          <p>
            {site.email} · {site.telefone}
          </p>
        </div>
      </div>
    </footer>
  );
}
