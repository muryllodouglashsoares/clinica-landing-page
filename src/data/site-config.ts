/**
 * Site-wide configuration: brand identity and contact channels.
 *
 * Centralizing these values means a phone/address change is a one-line
 * edit instead of a find-and-replace across every component that
 * happens to reference it (header, footer, CTA section, JSON-LD, etc).
 */
export const siteConfig = {
  name: "OdontoPrime",
  tagline: "Sorrisos que Transformam Vidas",
  legalName: "OdontoPrime Odontologia Ltda.",
  foundingYear: 2009,
  croNumber: "CRO-SP Nº 12.345",
  url: "https://www.odontoprime.com.br",
  locale: "pt-BR",
  description:
    "Clínica odontológica premium com tecnologia digital, atendimento humanizado e +5.000 sorrisos transformados. Agende sua avaliação gratuita.",
  contact: {
    phoneDisplay: "(11) 3000-1000",
    phoneHref: "tel:+551130001000",
    whatsappDisplay: "(11) 93000-1000",
    whatsappHref: "https://wa.me/5511930001000",
    email: "contato@odontoprime.com.br",
  },
  address: {
    street: "Av. Paulista, 1000",
    city: "São Paulo",
    state: "SP",
    stateFull: "São Paulo",
    postalCode: "01310-100",
    country: "BR",
    full: "Av. Paulista, 1000 — São Paulo/SP",
  },
  social: {
    instagram: "https://instagram.com/odontoprime",
    facebook: "https://facebook.com/odontoprime",
  },
  ogImage:
    "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=1200&h=630&fit=crop&auto=format",
} as const;

/** Primary in-page navigation, shared by the desktop nav, mobile drawer and footer. */
export const primaryNav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;
