import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";
import { useContactForm } from "@/hooks/use-contact-form";

const checklist = ["Avaliação 100% gratuita", "Sem fila de espera", "Plano personalizado", "Parcelamento disponível"];

export function CtaFormSection() {
  const { values, errors, status, setField, onPhoneChange, onBlurField, handleSubmit } = useContactForm(async (data) => {
    // Placeholder for a future backend integration (e.g. POST /api/leads).
    console.info("Solicitação de agendamento recebida:", data);
  });

  return (
    <section className="section section--dark" id="agendar" aria-labelledby="agendar-title">
      <div className="container cta">
        <Reveal className="cta__copy">
          <span className="eyebrow eyebrow--light">Avaliação gratuita</span>
          <h2 id="agendar-title">
            Seu sorriso dos sonhos <br className="br-lg" />
            começa com uma consulta
          </h2>
          <p>
            Agende hoje sua avaliação gratuita e descubra como a {siteConfig.name} pode transformar seu sorriso. Sem compromisso, sem
            surpresas — apenas cuidado e excelência.
          </p>
          <ul className="checks">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cta__buttons">
            <a className="btn btn--gold" href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </a>
            <a className="btn btn--outline-light" href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal className="card-form" delay>
          <h3>Solicite seu horário</h3>
          <p className="card-form__sub">Retornamos em até 1 hora útil.</p>
          <form onSubmit={handleSubmit} noValidate>
            <div className={`field${errors.nome ? " has-error" : ""}`}>
              <label htmlFor="nome">Nome completo</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                autoComplete="name"
                required
                value={values.nome}
                onChange={(e) => setField("nome", e.target.value)}
                onBlur={() => onBlurField("nome")}
              />
              <span className="error">{errors.nome}</span>
            </div>
            <div className={`field${errors.telefone ? " has-error" : ""}`}>
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(11) 90000-0000"
                autoComplete="tel"
                required
                value={values.telefone}
                onChange={(e) => onPhoneChange(e.target.value)}
                onBlur={() => onBlurField("telefone")}
              />
              <span className="error">{errors.telefone}</span>
            </div>
            <div className={`field${errors.email ? " has-error" : ""}`}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="voce@email.com"
                autoComplete="email"
                required
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => onBlurField("email")}
              />
              <span className="error">{errors.email}</span>
            </div>
            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                placeholder="Conte-nos sobre o tratamento desejado"
                value={values.mensagem}
                onChange={(e) => setField("mensagem", e.target.value)}
              />
            </div>
            <button className="btn btn--gold btn--block" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Enviando…" : "Enviar solicitação"}
            </button>
            <p className="form-note" role="status" aria-live="polite">
              {status === "success" ? "Solicitação enviada! Entraremos em contato em breve." : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
