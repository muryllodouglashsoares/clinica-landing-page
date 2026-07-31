import { Reveal } from "@/components/Reveal";
import { benefits } from "@/data/site-content";

export function BenefitsSection() {
  return (
    <section className="section" id="beneficios" aria-labelledby="beneficios-title">
      <div className="container">
        <Reveal as="header" className="head">
          <span className="eyebrow">Por que nos escolher</span>
          <h2 id="beneficios-title">Cuidado além do consultório</h2>
          <p>Nossa missão é oferecer a melhor experiência odontológica que você já teve.</p>
        </Reveal>

        <div className="grid grid--3">
          {benefits.map((benefit) => (
            <Reveal as="article" className="card" key={benefit.title}>
              <div className="card__ico" aria-hidden="true">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
