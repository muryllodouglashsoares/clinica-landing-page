import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import {
  HERO_IMAGE,
  OG_IMAGE,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP_URL,
  buildJsonLd,
  renderSections,
} from "../content/odontoprime";

const TITLE = "OdontoPrime — Clínica Odontológica Premium em São Paulo";
const DESCRIPTION =
  "Clínica odontológica premium com tecnologia digital, atendimento humanizado e +5.000 sorrisos transformados. Agende sua avaliação gratuita.";
const SCRIPT_SRC = "/odontoprime/js/script.js";

// Marca o <html> com a classe "js" antes do primeiro paint (as animações de
// "reveal" só escondem o conteúdo quando há JavaScript). Se o script.js não
// inicializar em 5 s, a classe é removida e todo o conteúdo fica visível.
const JS_FLAG_SNIPPET =
  "document.documentElement.classList.add('js');" +
  "setTimeout(function(){if(!window.__odontoprimeReady)document.documentElement.classList.remove('js')},5000);";

// Escapa "<" para que o JSON nunca possa fechar a tag <script>.
const JSON_LD = JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c");

declare global {
  interface Window {
    OdontoPrime?: { init: () => () => void };
    __odontoprimeReady?: boolean;
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "OdontoPrime — Sorrisos que Transformam Vidas" },
      {
        property: "og:description",
        content:
          "Cuidado odontológico de excelência com tecnologia de ponta e atendimento humanizado.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Paciente sorrindo após tratamento na OdontoPrime" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "OdontoPrime" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "OdontoPrime — Sorrisos que Transformam Vidas" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      { rel: "preload", as: "image", href: HERO_IMAGE, fetchPriority: "high" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: "/odontoprime/css/style.css" },
    ],
    scripts: [{ children: JS_FLAG_SNIPPET }],
  }),
  component: Index,
});

// Carrega o script.js uma única vez (a tag permanece no documento) e resolve
// quando `window.OdontoPrime` estiver disponível.
function loadScript(): Promise<void> {
  if (window.OdontoPrime) return Promise.resolve();
  return new Promise((resolve, reject) => {
    let tag = document.querySelector<HTMLScriptElement>("script[data-odontoprime]");
    if (!tag) {
      tag = document.createElement("script");
      tag.src = SCRIPT_SRC;
      tag.async = true;
      tag.dataset.odontoprime = "";
      document.body.appendChild(tag);
    }
    tag.addEventListener("load", () => resolve(), { once: true });
    tag.addEventListener("error", () => reject(new Error(`Falha ao carregar ${SCRIPT_SRC}`)), {
      once: true,
    });
  });
}

// O conteúdo da landing page é HTML renderizado no servidor (BODY_HTML), com as
// listas geradas a partir de src/content/odontoprime.ts (fonte única de dados).
// O script.js (CSS/JS puro, sem dependências) só adiciona interações e devolve
// uma função de limpeza, chamada quando a rota é desmontada (Strict Mode incluso).
function Index() {
  useEffect(() => {
    let cancelled = false;
    let destroy: (() => void) | undefined;

    loadScript()
      .then(() => {
        if (!cancelled) destroy = window.OdontoPrime?.init();
      })
      .catch((error) => console.error(error));

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <div
        id="portfolio-notice"
        className="portfolio-notice"
        role="note"
        aria-label="Aviso de portfólio: projeto fictício, nenhum dado real de saúde é coletado ou processado"
      >
        <span>
          <span aria-hidden="true">🧪</span> Projeto de portfólio — dados fictícios
        </span>
        <button
          type="button"
          className="portfolio-notice__close"
          data-portfolio-notice-close
          aria-label="Fechar aviso"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div id="top" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}

function buildBodyHtml(S: ReturnType<typeof renderSections>) {
  return `
<!-- ============ NAVBAR ============ -->
<header class="nav" id="nav">
  <div class="container nav__inner">
    <a class="brand" href="#top" aria-label="OdontoPrime — página inicial">
      <span class="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-1.5-1.2-3-1.7-4.3-1.2C5.5 5 4.6 7.2 5 10c.4 2.8 1.3 5.4 2.2 7.4.6 1.3 1.2 2.1 1.9 2.1.9 0 1.3-1.1 1.6-2.6.2-1.1.5-1.9 1.3-1.9s1.1.8 1.3 1.9c.3 1.5.7 2.6 1.6 2.6.7 0 1.3-.8 1.9-2.1.9-2 1.8-4.6 2.2-7.4.4-2.8-.5-5-2.7-5.7-1.3-.5-2.8 0-4.3 1.2Z"/></svg>
      </span>
      <span class="brand__text">Odonto<span>Prime</span></span>
    </a>

    <nav class="nav__links" aria-label="Navegação principal">
      <a href="#sobre">Sobre</a>
      <a href="#especialidades">Especialidades</a>
      <a href="#equipe">Equipe</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#faq">FAQ</a>
    </nav>

    <div class="nav__actions">
      <a class="nav__phone" href="tel:${PHONE_TEL}">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
        ${PHONE_DISPLAY}
      </a>
      <a class="btn btn--dark btn--sm" href="#agendar">Agendar consulta</a>
      <button class="nav__burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <div class="nav__mobile" id="mobileMenu" hidden>
    <a href="#sobre">Sobre</a>
    <a href="#especialidades">Especialidades</a>
    <a href="#equipe">Equipe</a>
    <a href="#depoimentos">Depoimentos</a>
    <a href="#faq">FAQ</a>
    <a class="btn btn--dark" href="#agendar">Agendar consulta</a>
  </div>
</header>

<main id="conteudo" tabindex="-1">

<!-- ============ HERO ============ -->
<section class="hero">
  <div class="container hero__grid">
    <div class="hero__copy reveal">
      <span class="pill"><span class="pill__star" aria-hidden="true">★</span> Clínica odontológica premium</span>
      <h1 class="hero__title">Sorrisos que <br /><span class="grad">Transformam</span> Vidas.</h1>
      <p class="hero__lead">Cuidado odontológico de excelência com tecnologia de ponta, atendimento humanizado e resultados que superam expectativas.</p>

      <div class="hero__cta">
        <a class="btn btn--dark" href="#agendar">Agende sua avaliação <span class="btn__arrow" aria-hidden="true">→</span></a>
        <a class="btn btn--ghost" href="#especialidades">Conheça nossos tratamentos</a>
      </div>

      <ul class="hero__stats">
        <li><span class="ico" aria-hidden="true">★</span><div><strong>4.9</strong><small>+1.200 avaliações</small></div></li>
        <li><span class="ico" aria-hidden="true">👥</span><div><strong>+5.000</strong><small>Pacientes atendidos</small></div></li>
        <li><span class="ico" aria-hidden="true">🏆</span><div><strong>15 anos</strong><small>De experiência</small></div></li>
        <li><span class="ico" aria-hidden="true">🔬</span><div><strong>100%</strong><small>Equipamentos digitais</small></div></li>
      </ul>
    </div>

    <div class="hero__media reveal reveal--delay">
      <figure class="hero__photo">
        <img src="${HERO_IMAGE}" alt="Paciente sorrindo após tratamento na OdontoPrime" width="800" height="900" fetchpriority="high" decoding="async" />
        <figcaption>
          <span class="stars" role="img" aria-label="Nota 5 de 5"><span aria-hidden="true">★★★★★</span></span>
          <p>"Mudou completamente minha autoestima."</p>
          <small>— Ana Luiza, Implantes + Lentes de Contato</small>
        </figcaption>
      </figure>

      <div class="floater floater--top">
        <span class="floater__ico" aria-hidden="true">🛡️</span>
        <div><strong>Seguro e certificado</strong><small>CRO-SP Nº 12.345</small></div>
      </div>
      <div class="floater floater--bottom">
        <span class="floater__ico" aria-hidden="true">🏅</span>
        <div><strong>15 anos de excelência</strong><small>Desde 2009 transformando sorrisos</small></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ BENEFÍCIOS ============ -->
<section class="section" id="beneficios">
  <div class="container">
    <header class="head reveal">
      <span class="eyebrow">Por que nos escolher</span>
      <h2>Cuidado além do consultório</h2>
      <p>Nossa missão é oferecer a melhor experiência odontológica que você já teve.</p>
    </header>

    <div class="grid grid--3" id="benefitsGrid">${S.benefits}</div>
  </div>
</section>

<!-- ============ SOBRE ============ -->
<section class="section section--tint" id="sobre">
  <div class="container">
    <header class="head reveal">
      <span class="eyebrow">Quem somos</span>
      <h2>Uma clínica construída <br class="br-lg" />sobre resultados reais</h2>
    </header>

    <ul class="stats-row reveal">
      <li><strong>+5.000</strong><small>Pacientes atendidos</small></li>
      <li><strong>15+</strong><small>Anos de experiência</small></li>
      <li><strong>12</strong><small>Especialistas</small></li>
      <li><strong>4.9<span aria-hidden="true">★</span></strong><small>Avaliação média</small></li>
    </ul>

    <div class="about reveal">
      <figure class="about__img">
        <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&h=700&fit=crop&auto=format" alt="Interior moderno da clínica OdontoPrime" width="900" height="700" loading="lazy" />
      </figure>
      <div class="about__text">
        <h3>Nossa história</h3>
        <p>A OdontoPrime nasceu da convicção de que todo paciente merece um atendimento de alto padrão, com tecnologia, conforto e profissionais apaixonados pelo que fazem. Ao longo de 15 anos, construímos uma equipe multidisciplinar dedicada a oferecer o melhor da odontologia moderna.</p>
        <dl class="about__list">
          <div><dt>Missão</dt><dd>Proporcionar saúde bucal com excelência, tecnologia e humanização.</dd></div>
          <div><dt>Visão</dt><dd>Ser referência nacional em odontologia de alto padrão até 2030.</dd></div>
          <div><dt>Valores</dt><dd>Ética, inovação, empatia, qualidade e compromisso com resultados.</dd></div>
        </dl>
      </div>
    </div>

    <h3 class="timeline__title reveal">Nossa trajetória</h3>
    <ol class="timeline" id="timeline">${S.timeline}</ol>
  </div>
</section>

<!-- ============ ESPECIALIDADES ============ -->
<section class="section" id="especialidades">
  <div class="container">
    <header class="head reveal">
      <span class="eyebrow">Tratamentos</span>
      <h2>Especialidades completas</h2>
      <p>Da prevenção à reabilitação total, oferecemos todas as especialidades odontológicas em um único lugar.</p>
    </header>

    <div class="grid grid--4" id="servicesGrid">${S.services}</div>

    <div class="tech reveal">
      <figure class="tech__img">
        <img src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=800&h=700&fit=crop&auto=format" alt="Resultado de tratamento odontológico premium na OdontoPrime" width="800" height="700" loading="lazy" />
      </figure>
      <div class="tech__body">
        <span class="eyebrow">Tecnologia de ponta</span>
        <h3>Equipamentos atualizados anualmente</h3>
        <ul class="tags"><li>CAD/CAM</li><li>3D Scan</li><li>Laser</li></ul>
      </div>
    </div>
  </div>
</section>

<!-- ============ DIFERENCIAIS ============ -->
<section class="section section--dark" id="diferenciais">
  <div class="container">
    <header class="head head--light reveal">
      <span class="eyebrow eyebrow--light">Nossos diferenciais</span>
      <h2>Por que a OdontoPrime <br class="br-lg" />é diferente</h2>
      <p>Investimos continuamente em tecnologia, treinamento e infraestrutura para que você receba o melhor atendimento possível.</p>
    </header>

    <div class="grid grid--3" id="featuresGrid">${S.features}</div>

    <div class="center reveal"><a class="btn btn--gold" href="#agendar">Agendar avaliação gratuita <span class="btn__arrow" aria-hidden="true">→</span></a></div>
  </div>
</section>

<!-- ============ PROCESSO ============ -->
<section class="section" id="processo">
  <div class="container">
    <header class="head reveal">
      <span class="eyebrow">Como funciona</span>
      <h2>Do primeiro contato ao <br class="br-lg" />sorriso perfeito</h2>
      <p>Um processo claro e transparente em 5 etapas, pensado para sua comodidade.</p>
    </header>

    <ol class="steps" id="steps">${S.steps}</ol>

    <div class="center reveal"><a class="btn btn--dark" href="#agendar">Começar agora — avaliação gratuita <span class="btn__arrow" aria-hidden="true">→</span></a></div>
  </div>
</section>

<!-- ============ DEPOIMENTOS ============ -->
<section class="section section--tint" id="depoimentos">
  <div class="container">
    <header class="head reveal">
      <span class="eyebrow">Depoimentos</span>
      <h2>O que nossos pacientes <br class="br-lg" />dizem sobre nós</h2>
    </header>

    <div class="slider reveal" role="region" aria-roledescription="carousel" aria-label="Depoimentos de pacientes">
      <div class="slider__track" id="testimonials">${S.testimonials}</div>
      <div class="slider__nav">
        <button class="circle-btn" id="tPrev" aria-label="Depoimento anterior">←</button>
        <div class="dots" id="tDots"></div>
        <button class="circle-btn" id="tNext" aria-label="Próximo depoimento">→</button>
      </div>
    </div>
  </div>
</section>

<!-- ============ ANTES E DEPOIS ============ -->
<section class="section" id="resultados">
  <div class="container">
    <header class="head reveal">
      <span class="eyebrow">Resultados reais</span>
      <h2>Antes e depois</h2>
      <p>Arraste o divisor para ver a transformação. Resultados reais de pacientes da OdontoPrime.</p>
    </header>

    <div class="grid grid--2" id="baGrid">${S.beforeAfter}</div>
    <p class="disclaimer">* Resultados individuais podem variar. Imagens meramente ilustrativas.</p>
  </div>
</section>

<!-- ============ EQUIPE ============ -->
<section class="section section--tint" id="equipe">
  <div class="container">
    <header class="head reveal">
      <span class="eyebrow">Nossa equipe</span>
      <h2>Especialistas apaixonados <br class="br-lg" />pelo que fazem</h2>
      <p>Cada profissional foi selecionado não apenas pela excelência técnica, mas pelo compromisso com o cuidado humanizado.</p>
    </header>

    <div class="grid grid--4" id="teamGrid">${S.team}</div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="section" id="faq">
  <div class="container container--narrow">
    <header class="head reveal">
      <span class="eyebrow">Dúvidas frequentes</span>
      <h2>Perguntas frequentes</h2>
      <p>Respondemos as dúvidas mais comuns dos nossos pacientes.</p>
    </header>

    <div class="faq" id="faqList">${S.faq}</div>

    <p class="faq__foot">Não encontrou sua resposta? <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Fale conosco no WhatsApp</a></p>
  </div>
</section>

<!-- ============ CTA + FORMULÁRIO ============ -->
<section class="section section--dark" id="agendar">
  <div class="container cta">
    <div class="cta__copy reveal">
      <span class="eyebrow eyebrow--light">Avaliação gratuita</span>
      <h2>Seu sorriso dos sonhos <br class="br-lg" />começa com uma consulta</h2>
      <p>Agende hoje sua avaliação gratuita e descubra como a OdontoPrime pode transformar seu sorriso. Sem compromisso, sem surpresas — apenas cuidado e excelência.</p>
      <ul class="checks">
        <li>Avaliação 100% gratuita</li>
        <li>Sem fila de espera</li>
        <li>Plano personalizado</li>
        <li>Parcelamento disponível</li>
      </ul>
      <div class="cta__buttons">
        <a class="btn btn--gold" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
        <a class="btn btn--outline-light" href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a>
      </div>
    </div>

    <div class="card-form reveal reveal--delay">
      <h3>Solicite seu horário</h3>
      <p class="card-form__sub">Retornamos em até 1 hora útil.</p>
      <form id="contactForm" novalidate>
        <div class="field">
          <label for="nome">Nome completo</label>
          <input id="nome" name="nome" type="text" placeholder="Seu nome" autocomplete="name" maxlength="100" aria-describedby="err-nome" required />
          <span class="error" id="err-nome" data-error-for="nome"></span>
        </div>
        <div class="field">
          <label for="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" inputmode="tel" placeholder="(11) 90000-0000" autocomplete="tel" maxlength="20" aria-describedby="err-telefone" required />
          <span class="error" id="err-telefone" data-error-for="telefone"></span>
        </div>
        <div class="field">
          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" placeholder="voce@email.com" autocomplete="email" maxlength="254" aria-describedby="err-email" required />
          <span class="error" id="err-email" data-error-for="email"></span>
        </div>
        <div class="field">
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="4" maxlength="1000" placeholder="Conte-nos sobre o tratamento desejado"></textarea>
        </div>
        <div class="hp" aria-hidden="true"><label for="website">Não preencha este campo</label><input id="website" name="website" type="text" tabindex="-1" autocomplete="off" /></div>
        <button class="btn btn--gold btn--block" type="submit">Enviar solicitação</button>
        <p class="form-privacy">Projeto de portfólio: os dados enviados aqui são recebidos por uma automação de demonstração (Make.com → Google Sheets) e usados apenas para fins de teste, não para fins comerciais reais. Em produção, este aviso seria substituído por uma política de privacidade real, conforme a LGPD.</p>
        <p class="form-note" id="formNote" role="status" aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>

</main>

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="container footer__grid">
    <div class="footer__brand">
      <a class="brand brand--light" href="#top">
        <span class="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-1.5-1.2-3-1.7-4.3-1.2C5.5 5 4.6 7.2 5 10c.4 2.8 1.3 5.4 2.2 7.4.6 1.3 1.2 2.1 1.9 2.1.9 0 1.3-1.1 1.6-2.6.2-1.1.5-1.9 1.3-1.9s1.1.8 1.3 1.9c.3 1.5.7 2.6 1.6 2.6.7 0 1.3-.8 1.9-2.1.9-2 1.8-4.6 2.2-7.4.4-2.8-.5-5-2.7-5.7-1.3-.5-2.8 0-4.3 1.2Z"/></svg>
        </span>
        <span class="brand__text">Odonto<span>Prime</span></span>
      </a>
      <p>Odontologia de alto padrão com tecnologia digital e atendimento humanizado desde 2009.</p>
      <p class="footer__cro">CRO-SP Nº 12.345</p>
    </div>

    <nav class="footer__col" aria-label="Institucional">
      <h3>Clínica</h3>
      <a href="#sobre">Sobre nós</a>
      <a href="#equipe">Equipe</a>
      <a href="#diferenciais">Diferenciais</a>
      <a href="#processo">Como funciona</a>
    </nav>

    <nav class="footer__col" aria-label="Tratamentos">
      <h3>Tratamentos</h3>
      <a href="#especialidades">Implantes</a>
      <a href="#especialidades">Ortodontia</a>
      <a href="#especialidades">Clareamento</a>
      <a href="#especialidades">Lentes de contato</a>
    </nav>

    <div class="footer__col">
      <h3>Contato</h3>
      <a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a>
      <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href="mailto:contato@odontoprime.com.br">contato@odontoprime.com.br</a>
      <address>Av. Paulista, 1000 — São Paulo/SP</address>
    </div>
  </div>

  <div class="container footer__bottom">
    <small>© 2026 OdontoPrime. Todos os direitos reservados.</small>
    <small>Política de Privacidade · Termos de Uso</small>
  </div>
</footer>

<a class="whats" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.4.6-.3.3c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2.1 1c.3.1.5.2.5.4.1.1.1.7-.1 1.4Z"/></svg>
</a>

`;
}

const BODY_HTML = buildBodyHtml(renderSections());
