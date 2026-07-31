import { Reveal } from "@/components/Reveal";
import { team } from "@/data/site-content";

export function TeamSection() {
  return (
    <section className="section section--tint" id="equipe" aria-labelledby="equipe-title">
      <div className="container">
        <Reveal as="header" className="head">
          <span className="eyebrow">Nossa equipe</span>
          <h2 id="equipe-title">
            Especialistas apaixonados <br className="br-lg" />
            pelo que fazem
          </h2>
          <p>Cada profissional foi selecionado não apenas pela excelência técnica, mas pelo compromisso com o cuidado humanizado.</p>
        </Reveal>

        <div className="grid grid--4">
          {team.map((member) => (
            <Reveal as="article" className="member" key={member.name}>
              <div className="member__photo">
                <img src={member.photoUrl} alt={member.name} width={400} height={500} loading="lazy" />
                <span className="member__cro">{member.croNumber}</span>
              </div>
              <div className="member__body">
                <strong>{member.name}</strong>
                <p className="member__role">{member.role}</p>
                <small>{member.specialty}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
