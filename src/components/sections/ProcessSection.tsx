import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section className="section" id="processo" aria-labelledby="processo-title">
      <div className="container">
        <Reveal as="header" className="head">
          <span className="eyebrow">Como funciona</span>
          <h2 id="processo-title">
            Do primeiro contato ao <br className="br-lg" />
            sorriso perfeito
          </h2>
          <p>Um processo claro e transparente em 5 etapas, pensado para sua comodidade.</p>
        </Reveal>

        <ol className="steps">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.title}>
              <span className="num" aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="center">
          <a className="btn btn--dark" href="#agendar">
            Começar agora — avaliação gratuita <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
