export const site = {
  nome: "Habitarte Imóveis",
  slogan: "Acima de vender, Arte em satisfazer!",
  razaoSocial: "Celine Imobiliária Ltda – CRECI J3929",
  creci: "CRECI J3929",
  endereco: "Rua Professor João Doetzer, 856 – Jardim das Américas – Curitiba/PR – CEP 81540-470",
  whatsapp: "(41) 3365-9782",
  whatsappLink: "https://wa.me/554133659782",
  telefone: "(41) 99611-6886",
  telefoneLink: "https://wa.me/5541996116886",
  email: "habitarteimoveis@gmail.com",
  instagram: "https://www.instagram.com/",
};

export function whatsappUrl(mensagem: string) {
  return `${site.whatsappLink}?text=${encodeURIComponent(mensagem)}`;
}
