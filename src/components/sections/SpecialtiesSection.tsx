import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site-content";

export function SpecialtiesSection() {
  return (
    <section className="section" id="especialidades" aria-labelledby="especialidades-title">
      <div className="container">
        <Reveal as="header" className="head">
          <span className="eyebrow">Tratamentos</span>
          <h2 id="especialidades-title">Especialidades completas</h2>
          <p>Da prevenção à reabilitação total, oferecemos todas as especialidades odontológicas em um único lugar.</p>
        </Reveal>

        <div className="grid grid--4">
          {services.map((service) => (
            <Reveal as="article" className="card card--service" key={service.title}>
              {service.badge ? (
                <span className={`badge${service.badge === "Premium" ? " badge--gold" : ""}`}>{service.badge}</span>
              ) : null}
              <div className="card__ico" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="card__link" href="#agendar">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="tech">
          <figure className="tech__img">
            <img
              src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=800&h=700&fit=crop&auto=format"
              alt="Resultado de tratamento odontológico premium na OdontoPrime"
              width={800}
              height={700}
              loading="lazy"
            />
          </figure>
          <div className="tech__body">
            <span className="eyebrow">Tecnologia de ponta</span>
            <h3>Equipamentos atualizados anualmente</h3>
            <ul className="tags">
              <li>CAD/CAM</li>
              <li>3D Scan</li>
              <li>Laser</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
