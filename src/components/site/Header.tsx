import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import logo from "../../../icon1.jpg";
import topicon from "../../../topicon.jpg";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const dark = !scrolled && !open;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${dark ? "bg-transparent" : "border-b border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 lg:px-10">
        <a
          href="#inicio"
          aria-label="Habitarte Imóveis — início"
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src={topicon}
            alt=""
            className="brand-mark h-11 w-11 shrink-0 rounded-full object-cover lg:hidden"
          />
          <img
            src={logo}
            alt="Habitarte Imóveis — CRECI J3929"
            className="brand-logo hidden h-12 w-44 object-contain object-left lg:block"
          />
          <span
            className={`hidden text-[0.62rem] font-semibold uppercase tracking-[0.24em] sm:block lg:hidden ${dark ? "text-white/75" : "text-muted-foreground"}`}
          >
            Habitarte Imóveis
          </span>
        </a>
        <div className="flex items-center gap-3 lg:gap-8">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link text-sm ${dark ? "text-white/85" : "text-foreground/80"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappUrl(`Olá! Vim pelo site da ${site.nome} e gostaria de mais informações.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-brand-red px-5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition-smooth hover:-translate-y-0.5 hover:bg-brand-red-dark sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${dark ? "text-white" : "text-foreground"}`}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden"
          aria-label="Menu móvel"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-border/60 text-sm font-medium text-foreground transition-smooth hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl(`Olá! Vim pelo site da ${site.nome}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
