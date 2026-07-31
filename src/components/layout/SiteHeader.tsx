import { useState } from "react";
import { primaryNav, siteConfig } from "@/data/site-config";
import { useStickyNav } from "@/hooks/use-sticky-nav";

function ToothMark() {
  return (
    <span className="brand__mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5.5c-1.5-1.2-3-1.7-4.3-1.2C5.5 5 4.6 7.2 5 10c.4 2.8 1.3 5.4 2.2 7.4.6 1.3 1.2 2.1 1.9 2.1.9 0 1.3-1.1 1.6-2.6.2-1.1.5-1.9 1.3-1.9s1.1.8 1.3 1.9c.3 1.5.7 2.6 1.6 2.6.7 0 1.3-.8 1.9-2.1.9-2 1.8-4.6 2.2-7.4.4-2.8-.5-5-2.7-5.7-1.3-.5-2.8 0-4.3 1.2Z" />
      </svg>
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function SiteHeader() {
  const isStuck = useStickyNav();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`nav${isStuck ? " is-stuck" : ""}`} id="nav">
      <div className="container nav__inner">
        <a className="brand" href="#top" aria-label={`${siteConfig.name} — página inicial`}>
          <ToothMark />
          <span className="brand__text">
            Odonto<span>Prime</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Navegação principal">
          {primaryNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__phone" href={siteConfig.contact.phoneHref}>
            <PhoneIcon />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a className="btn btn--dark btn--sm" href="#agendar">
            Agendar consulta
          </a>
          <button
            className="nav__burger"
            id="burger"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobileMenu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className="nav__mobile" id="mobileMenu" hidden={!isMenuOpen}>
        {primaryNav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn--dark" href="#agendar" onClick={() => setIsMenuOpen(false)}>
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
