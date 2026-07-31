import { Reveal } from "@/components/Reveal";
import { heroStats } from "@/data/site-content";
import { siteConfig } from "@/data/site-config";

export function HeroSection() {
  return (
    <section className="hero" aria-label="Apresentação">
      <div className="container hero__grid">
        <Reveal className="hero__copy">
          <span className="pill">
            <span className="pill__star">★</span> Clínica odontológica premium
          </span>
          <h1 className="hero__title">
            Sorrisos que <br />
            <span className="grad">Transformam</span> Vidas.
          </h1>
          <p className="hero__lead">
            Cuidado odontológico de excelência com tecnologia de ponta, atendimento humanizado e resultados que superam expectativas.
          </p>

          <div className="hero__cta">
            <a className="btn btn--dark" href="#agendar">
              Agende sua avaliação <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#especialidades">
              Conheça nossos tratamentos
            </a>
          </div>

          <ul className="hero__stats">
            {heroStats.map((stat) => (
              <li key={stat.label}>
                <span className="ico" aria-hidden="true">{stat.icon}</span>
                <div>
                  <strong>{stat.value}</strong>
                  <small>{stat.label}</small>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="hero__media" delay>
          <figure className="hero__photo">
            <img
              src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=800&h=900&fit=crop&auto=format"
              alt="Paciente sorrindo após tratamento na OdontoPrime"
              width={800}
              height={900}
            />
            <figcaption>
              <span className="stars" aria-label="Nota 5 de 5">★★★★★</span>
              <p>&ldquo;Mudou completamente minha autoestima.&rdquo;</p>
              <small>— Ana Luiza, Implantes + Lentes de Contato</small>
            </figcaption>
          </figure>

          <div className="floater floater--top">
            <span className="floater__ico" aria-hidden="true">🛡️</span>
            <div>
              <strong>Seguro e certificado</strong>
              <small>{siteConfig.croNumber}</small>
            </div>
          </div>
          <div className="floater floater--bottom">
            <span className="floater__ico" aria-hidden="true">🏅</span>
            <div>
              <strong>15 anos de excelência</strong>
              <small>Desde {siteConfig.foundingYear} transformando sorrisos</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
