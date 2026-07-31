import { Reveal } from "@/components/Reveal";
import { features } from "@/data/site-content";

export function DifferentialsSection() {
  return (
    <section className="section section--dark" id="diferenciais" aria-labelledby="diferenciais-title">
      <div className="container">
        <Reveal as="header" className="head head--light">
          <span className="eyebrow eyebrow--light">Nossos diferenciais</span>
          <h2 id="diferenciais-title">
            Por que a OdontoPrime <br className="br-lg" />é diferente
          </h2>
          <p>Investimos continuamente em tecnologia, treinamento e infraestrutura para que você receba o melhor atendimento possível.</p>
        </Reveal>

        <div className="grid grid--3">
          {features.map((feature) => (
            <Reveal as="article" className="feature" key={feature.title}>
              <div className="feature__ico" aria-hidden="true">{feature.icon}</div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="center">
          <a className="btn btn--gold" href="#agendar">
            Agendar avaliação gratuita <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
