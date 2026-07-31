import { Reveal } from "@/components/Reveal";
import { beforeAfterCases, type BeforeAfterCase } from "@/data/site-content";
import { useBeforeAfterSlider } from "@/hooks/use-before-after-slider";

function BeforeAfterCard({ item }: { item: BeforeAfterCase }) {
  const { viewportRef, position, handlers } = useBeforeAfterSlider();

  return (
    <Reveal as="article" className="ba">
      <div
        className="ba__viewport"
        role="group"
        aria-label={`Comparação antes e depois — ${item.label}`}
        ref={viewportRef}
        {...handlers}
      >
        <img className="ba__before" src={item.beforeUrl} alt={`Antes do tratamento — ${item.label}`} loading="lazy" />
        <img
          className="ba__after"
          src={item.afterUrl}
          alt={`Depois do tratamento — ${item.label}`}
          loading="lazy"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        />
        <span className="ba__handle" aria-hidden="true" style={{ left: `${position}%` }}></span>
        <span className="ba__tag ba__tag--left">Antes</span>
        <span className="ba__tag ba__tag--right">Depois</span>
      </div>
      <p className="ba__caption">{item.label}</p>
    </Reveal>
  );
}

export function ResultsSection() {
  return (
    <section className="section" id="resultados" aria-labelledby="resultados-title">
      <div className="container">
        <Reveal as="header" className="head">
          <span className="eyebrow">Resultados reais</span>
          <h2 id="resultados-title">Antes e depois</h2>
          <p>Arraste o divisor para ver a transformação. Resultados reais de pacientes da OdontoPrime.</p>
        </Reveal>

        <div className="grid grid--2">
          {beforeAfterCases.map((item) => (
            <BeforeAfterCard item={item} key={item.label} />
          ))}
        </div>
        <p className="disclaimer">* Resultados individuais podem variar. Imagens meramente ilustrativas.</p>
      </div>
    </section>
  );
}
