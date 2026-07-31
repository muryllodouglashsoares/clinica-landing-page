import { siteConfig } from "@/data/site-config";

const clinicLinks = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Equipe", href: "#equipe" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#processo" },
];

const treatmentLinks = [
  { label: "Implantes", href: "#especialidades" },
  { label: "Ortodontia", href: "#especialidades" },
  { label: "Clareamento", href: "#especialidades" },
  { label: "Lentes de contato", href: "#especialidades" },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="brand brand--light" href="#top">
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5.5c-1.5-1.2-3-1.7-4.3-1.2C5.5 5 4.6 7.2 5 10c.4 2.8 1.3 5.4 2.2 7.4.6 1.3 1.2 2.1 1.9 2.1.9 0 1.3-1.1 1.6-2.6.2-1.1.5-1.9 1.3-1.9s1.1.8 1.3 1.9c.3 1.5.7 2.6 1.6 2.6.7 0 1.3-.8 1.9-2.1.9-2 1.8-4.6 2.2-7.4.4-2.8-.5-5-2.7-5.7-1.3-.5-2.8 0-4.3 1.2Z" />
              </svg>
            </span>
            <span className="brand__text">
              Odonto<span>Prime</span>
            </span>
          </a>
          <p>Odontologia de alto padrão com tecnologia digital e atendimento humanizado desde {siteConfig.foundingYear}.</p>
          <p className="footer__cro">{siteConfig.croNumber}</p>
        </div>

        <nav className="footer__col" aria-label="Institucional">
          <h4>Clínica</h4>
          {clinicLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Tratamentos">
          <h4>Tratamentos</h4>
          {treatmentLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h4>Contato</h4>
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phoneDisplay}</a>
          <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          <address>{siteConfig.address.full}</address>
        </div>
      </div>

      <div className="container footer__bottom">
        <small>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</small>
        <small>Política de Privacidade · Termos de Uso</small>
      </div>
    </footer>
  );
}
