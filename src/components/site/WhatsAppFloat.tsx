import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl("Olá! Vim pelo site da Habitarte Imóveis e gostaria de atendimento.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-primary shadow-lift transition-smooth hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
