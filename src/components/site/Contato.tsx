import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function Contato() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = `Olá, Habitarte Imóveis!
Nome: ${form.nome}
Telefone/WhatsApp: ${form.telefone}
E-mail: ${form.email}

${form.mensagem}`;
    window.open(whatsappUrl(texto), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border-0 border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-gold";

  return (
    <section id="contato" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Fale conosco</span>
            <span className="gold-rule mt-5" />
            <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Vamos encontrar o seu lugar
            </h2>

            <form onSubmit={onSubmit} className="mt-10 space-y-6">
              <input
                required
                placeholder="Nome"
                className={field}
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
              <input
                required
                placeholder="Telefone / WhatsApp"
                className={field}
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              />
              <input
                type="email"
                placeholder="E-mail"
                className={field}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <textarea
                required
                rows={4}
                placeholder="Mensagem"
                className={`${field} resize-none`}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-smooth hover:scale-[1.03] hover:bg-gold hover:text-primary hover:shadow-lift"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="reveal lg:pt-24" style={{ transitionDelay: "120ms" }}>
            <div className="space-y-8 bg-card p-8 shadow-soft sm:p-10">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Endereço
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{site.endereco}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Telefones
                  </p>
                  <p className="mt-2 text-sm text-foreground">{site.whatsapp}</p>
                  <p className="text-sm text-foreground">{site.telefone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">E-mail</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 block truncate text-sm text-foreground hover:text-gold"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <a
                href={whatsappUrl("Olá! Gostaria de atendimento da Habitarte Imóveis.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-medium tracking-wide text-primary transition-smooth hover:scale-[1.02] hover:shadow-lift"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
