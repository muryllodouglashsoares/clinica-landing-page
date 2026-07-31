import { Reveal } from "@/components/Reveal";
import { aboutStats, timeline } from "@/data/site-content";

export function AboutSection() {
  return (
    <section className="section section--tint" id="sobre" aria-labelledby="sobre-title">
      <div className="container">
        <Reveal as="header" className="head">
          <span className="eyebrow">Quem somos</span>
          <h2 id="sobre-title">
            Uma clínica construída <br className="br-lg" />
            sobre resultados reais
          </h2>
        </Reveal>

        <Reveal as="ul" className="stats-row">
          {aboutStats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <small>{stat.label}</small>
            </li>
          ))}
        </Reveal>

        <Reveal className="about">
          <figure className="about__img">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&h=700&fit=crop&auto=format"
              alt="Interior moderno da clínica OdontoPrime"
              width={900}
              height={700}
              loading="lazy"
            />
          </figure>
          <div className="about__text">
            <h3>Nossa história</h3>
            <p>
              A OdontoPrime nasceu da convicção de que todo paciente merece um atendimento de alto padrão, com tecnologia, conforto e
              profissionais apaixonados pelo que fazem. Ao longo de 15 anos, construímos uma equipe multidisciplinar dedicada a
              oferecer o melhor da odontologia moderna.
            </p>
            <dl className="about__list">
              <div>
                <dt>Missão</dt>
                <dd>Proporcionar saúde bucal com excelência, tecnologia e humanização.</dd>
              </div>
              <div>
                <dt>Visão</dt>
                <dd>Ser referência nacional em odontologia de alto padrão até 2030.</dd>
              </div>
              <div>
                <dt>Valores</dt>
                <dd>Ética, inovação, empatia, qualidade e compromisso com resultados.</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <h3 className="timeline__title reveal">Nossa trajetória</h3>
        <ol className="timeline">
          {timeline.map((entry) => (
            <Reveal as="li" key={entry.year}>
              <span className="year">{entry.year}</span>
              <h4>{entry.title}</h4>
              <p>{entry.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
