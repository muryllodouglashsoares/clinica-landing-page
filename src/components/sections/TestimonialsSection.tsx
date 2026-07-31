import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/site-content";
import { useTestimonialCarousel } from "@/hooks/use-testimonial-carousel";

export function TestimonialsSection() {
  const { perView, index, maxIndex, goPrev, goNext, goTo } = useTestimonialCarousel(testimonials.length);
  const step = 100 / perView;

  return (
    <section className="section section--tint" id="depoimentos" aria-labelledby="depoimentos-title">
      <div className="container">
        <Reveal as="header" className="head">
          <span className="eyebrow">Depoimentos</span>
          <h2 id="depoimentos-title">
            O que nossos pacientes <br className="br-lg" />
            dizem sobre nós
          </h2>
        </Reveal>

        <Reveal className="slider">
          <div className="slider__track" style={{ transform: `translateX(-${index * step}%)` }}>
            {testimonials.map((testimonial) => (
              <article className="quote" key={testimonial.author}>
                <div className="quote__inner">
                  <span className="stars" aria-label="Nota 5 de 5">★★★★★</span>
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="quote__author">
                    <img src={testimonial.avatarUrl} alt={testimonial.author} width={80} height={80} loading="lazy" />
                    <div>
                      <strong>{testimonial.author}</strong>
                      <small>{testimonial.treatment}</small>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="slider__nav">
            <button className="circle-btn" type="button" aria-label="Depoimento anterior" onClick={goPrev} disabled={index === 0}>
              ←
            </button>
            <div className="dots">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot${i === index ? " is-active" : ""}`}
                  aria-label={`Ir para o depoimento ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="circle-btn" type="button" aria-label="Próximo depoimento" onClick={goNext} disabled={index === maxIndex}>
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
