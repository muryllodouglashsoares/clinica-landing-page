/* =========================================================
   OdontoPrime — script.js
   Módulos: navbar, menu mobile, reveal, conteúdo dinâmico,
   slider de depoimentos, antes/depois, FAQ e formulário.
   ========================================================= */
(function () {
  "use strict";

  /* ------------------ Dados ------------------ */
  const benefits = [
    [
      "🤝",
      "Atendimento Humanizado",
      "Tratamos cada paciente com empatia, atenção e cuidado individualizado, criando um ambiente de confiança mútua.",
    ],
    [
      "💻",
      "Tecnologia Digital",
      "Equipamentos de última geração: tomografia 3D, scanner intraoral, laser e materiais biocompatíveis premium.",
    ],
    [
      "✨",
      "Resultados Naturais",
      "Estética dental que respeita a harmonia do seu rosto — sorrisos que parecem naturais porque foram planejados assim.",
    ],
    [
      "🛋️",
      "Ambiente Confortável",
      "Clínica projetada para proporcionar conforto e relaxamento — porque o cuidado começa na sua chegada.",
    ],
    [
      "🎓",
      "Equipe Especializada",
      "Mais de 12 especialistas altamente qualificados com formação nacional e internacional reconhecida.",
    ],
    [
      "📋",
      "Atendimento Personalizado",
      "Plano de tratamento exclusivo para cada paciente, respeitando suas necessidades, objetivos e orçamento.",
    ],
  ];

  const timeline = [
    [
      "2009",
      "Fundação",
      "Abrimos as portas com a missão de democratizar a odontologia de excelência em São Paulo.",
    ],
    [
      "2014",
      "Expansão",
      "Ampliamos para 10 consultórios e incorporamos as primeiras tecnologias digitais de ponta.",
    ],
    [
      "2019",
      "Inovação digital",
      "Implementamos scanner intraoral 3D, planejamento digital e protocolo de sedação consciente.",
    ],
    [
      "2024",
      "Referência premium",
      "Reconhecida como uma das clínicas de maior prestígio do estado, com +5.000 sorrisos transformados.",
    ],
  ];

  const services = [
    [
      "🦷",
      "Implantes",
      "Reposição de dentes perdidos com implantes de titânio da mais alta qualidade, com integração natural e durabilidade superior.",
      "Mais popular",
    ],
    [
      "😁",
      "Ortodontia",
      "Alinhamento dental com aparelhos metálicos, estéticos ou alinhadores transparentes para um sorriso harmonioso.",
      "",
    ],
    [
      "💡",
      "Clareamento",
      "Clareamento dental de consultório com tecnologia LED/laser para resultados até 8 tons mais claros em uma sessão.",
      "",
    ],
    [
      "💎",
      "Lentes de Contato",
      "Ultra-finas facetas de porcelana que corrigem forma, cor e tamanho sem desgaste excessivo do dente natural.",
      "Premium",
    ],
    [
      "🔧",
      "Próteses",
      "Próteses fixas e removíveis com estética e funcionalidade, personalizadas em laboratório digital próprio.",
      "",
    ],
    [
      "🪥",
      "Limpeza",
      "Profilaxia completa com remoção de tártaro e manchas, polimento e aplicação de flúor para saúde bucal preventiva.",
      "",
    ],
    [
      "🩺",
      "Tratamento de Canal",
      "Endodontia com rotação contínua e localizador apical eletrônico — salve seu dente natural com conforto e precisão.",
      "",
    ],
    [
      "🧸",
      "Odontopediatria",
      "Atendimento especial para crianças em ambiente lúdico e acolhedor, com profissionais especializados em pacientes pequenos.",
      "",
    ],
  ];

  const features = [
    [
      "🧠",
      "Diagnóstico 3D preciso",
      "Tomografia computadorizada cone-beam para planejamento cirúrgico e implantológico com 0,1mm de precisão.",
    ],
    [
      "📡",
      "Scanner intraoral digital",
      "Moldagens digitais sem pasta, com envio instantâneo ao laboratório — mais conforto, mais precisão.",
    ],
    [
      "😌",
      "Sedação consciente",
      "Para pacientes ansiosos: sedação com óxido nitroso para um atendimento tranquilo e seguro.",
    ],
    [
      "🏭",
      "Laboratório próprio digital",
      "Próteses e restaurações confeccionadas in-house com fresagem CAD/CAM para entrega no mesmo dia.",
    ],
    [
      "🧪",
      "Protocolo de biossegurança",
      "Esterilização e descarte certificados, autoclave classe B e controle rigoroso de infecção cruzada.",
    ],
    [
      "📞",
      "Acompanhamento pós-tratamento",
      "Protocolo de follow-up dedicado com consultas de controle e canal de atendimento prioritário.",
    ],
  ];

  const steps = [
    [
      "Agendamento",
      "Marque sua consulta pelo site, WhatsApp ou telefone. Escolha o horário que melhor se adapta à sua rotina.",
    ],
    [
      "Avaliação",
      "Consulta inicial completa com exame clínico, radiografias e diagnóstico digital para mapeamento do seu caso.",
    ],
    [
      "Planejamento",
      "Elaboração do plano de tratamento personalizado com apresentação visual do resultado esperado e opções financeiras.",
    ],
    [
      "Tratamento",
      "Execução com técnicas modernas, conforto máximo e acompanhamento em cada etapa do seu tratamento.",
    ],
    [
      "Acompanhamento",
      "Retornos periódicos, manutenção preventiva e canal exclusivo para dúvidas — porque seu sorriso é um investimento contínuo.",
    ],
  ];

  const testimonials = [
    [
      "Fiz lentes de contato dental e o resultado superou todas as minhas expectativas. O Dr. Rafael planejou cada detalhe, o sorriso ficou completamente natural. Mudou minha autoestima de forma incrível.",
      "Mariana Ferreira",
      "Lentes de Contato Dental",
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format",
    ],
    [
      "Tinha muito medo de fazer implante, mas a equipe da OdontoPrime me deixou tranquilo desde o primeiro momento. O procedimento foi sem dor e o resultado final é impecável. Recomendo demais!",
      "Carlos Eduardo",
      "Implante Dentário",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    ],
    [
      "Dois anos de tratamento com a Dra. Carolina e o resultado valeu cada consulta. Ambiente impecável, atendimento humanizado e profissionais que realmente se importam com o paciente.",
      "Patrícia Almeida",
      "Ortodontia",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
    ],
    [
      "Fiz o clareamento antes do meu casamento e os dentes ficaram visivelmente mais brancos em apenas uma sessão. Atendimento profissional e cuidadoso. Já indiquei para toda a família.",
      "Roberto Nascimento",
      "Clareamento Dental",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
    ],
    [
      "Sempre tive fobia de dentista, mas aqui foi completamente diferente. O Dr. Bruno explicou cada passo, não senti dor nenhuma e ainda me ligaram depois para saber como eu estava.",
      "Fernanda Costa",
      "Tratamento de Canal",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&auto=format",
    ],
  ];

  const beforeAfter = [
    [
      "Lentes de Contato Dental",
      "https://images.unsplash.com/photo-1663182234283-28941e7612da?w=700&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=700&h=500&fit=crop&auto=format",
    ],
    [
      "Clareamento Dental",
      "https://images.unsplash.com/photo-1663182234283-28941e7612da?w=700&h=500&fit=crop&auto=format&sat=-80",
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=700&h=500&fit=crop&auto=format",
    ],
  ];

  const team = [
    [
      "Dr. Rafael Mendes",
      "Diretor Clínico",
      "Implantodontia & Cirurgia",
      "CRO-SP 34.521",
      "https://images.unsplash.com/photo-1588776813941-dcf9c55e84d2?w=400&h=500&fit=crop&auto=format",
    ],
    [
      "Dra. Carolina Lima",
      "Especialista",
      "Ortodontia & Estética",
      "CRO-SP 41.087",
      "https://images.unsplash.com/photo-1683349370055-7eba66a404c6?w=400&h=500&fit=crop&auto=format",
    ],
    [
      "Dr. André Santos",
      "Especialista",
      "Endodontia & Periodontia",
      "CRO-SP 29.340",
      "https://images.unsplash.com/photo-1645066928295-2506defde470?w=400&h=500&fit=crop&auto=format",
    ],
    [
      "Dr. Bruno Oliveira",
      "Especialista",
      "Odontopediatria",
      "CRO-SP 52.019",
      "https://images.unsplash.com/photo-1758691463582-11aea602cd4a?w=400&h=500&fit=crop&auto=format",
    ],
  ];

  const faqs = [
    [
      "A avaliação inicial é gratuita?",
      "Sim! A primeira consulta de avaliação é completamente gratuita. Nela realizamos exame clínico, analisamos suas necessidades e apresentamos o plano de tratamento personalizado.",
    ],
    [
      "Vocês atendem planos odontológicos?",
      "Atendemos os principais convênios odontológicos do mercado. Entre em contato para confirmar a cobertura do seu plano e os procedimentos incluídos.",
    ],
    [
      "Quanto tempo leva um tratamento com implante?",
      "Em média de 3 a 6 meses, considerando o período de osseointegração. Em casos selecionados é possível realizar carga imediata, com prótese no mesmo dia.",
    ],
    [
      "O clareamento dental faz mal aos dentes?",
      "Não. Quando realizado por profissionais com produtos regulamentados, o clareamento é seguro e não danifica o esmalte dental.",
    ],
    [
      "Como é feito o agendamento de consultas?",
      "Você pode agendar pelo formulário do site, pelo WhatsApp ou por telefone. Confirmamos o horário em até 1 hora útil.",
    ],
    [
      "Atendem crianças? A partir de que idade?",
      "Sim, nossa equipe de odontopediatria atende a partir do nascimento do primeiro dentinho, por volta dos 6 meses de idade.",
    ],
    [
      "Oferecem financiamento para tratamentos?",
      "Sim. Trabalhamos com parcelamento em até 18x no cartão e opções de financiamento próprio conforme análise.",
    ],
    [
      "Como é o protocolo de higienização da clínica?",
      "Seguimos protocolo rigoroso de biossegurança com autoclave classe B, materiais descartáveis e controle certificado de infecção cruzada.",
    ],
  ];

  /* ------------------ Utilitários ------------------ */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const render = (target, items, build) => {
    const host = $(target);
    if (!host) return;
    const frag = document.createDocumentFragment();
    items.forEach((item, i) => frag.appendChild(build(item, i)));
    host.appendChild(frag);
  };

  /* ------------------ Conteúdo ------------------ */
  render("#benefitsGrid", benefits, ([ico, title, text]) =>
    el(
      "article",
      "card reveal",
      `<div class="card__ico" aria-hidden="true">${ico}</div><h3>${title}</h3><p>${text}</p>`,
    ),
  );

  render("#timeline", timeline, ([year, title, text]) =>
    el("li", "reveal", `<span class="year">${year}</span><h4>${title}</h4><p>${text}</p>`),
  );

  render("#servicesGrid", services, ([ico, title, text, badge]) =>
    el(
      "article",
      "card card--service reveal",
      `${badge ? `<span class="badge ${badge === "Premium" ? "badge--gold" : ""}">${badge}</span>` : ""}
       <div class="card__ico" aria-hidden="true">${ico}</div>
       <h3>${title}</h3><p>${text}</p>
       <a class="card__link" href="#agendar">Saiba mais <span aria-hidden="true">→</span></a>`,
    ),
  );

  render("#featuresGrid", features, ([ico, title, text]) =>
    el(
      "article",
      "feature reveal",
      `<div class="feature__ico" aria-hidden="true">${ico}</div><div><h3>${title}</h3><p>${text}</p></div>`,
    ),
  );

  render("#steps", steps, ([title, text], i) =>
    el(
      "li",
      "reveal",
      `<span class="num" aria-hidden="true">${i + 1}</span><h3>${title}</h3><p>${text}</p>`,
    ),
  );

  render("#teamGrid", team, ([name, role, area, cro, img]) =>
    el(
      "article",
      "member reveal",
      `<div class="member__photo"><img src="${img}" alt="${name}" width="400" height="500" loading="lazy" /><span class="member__cro">${cro}</span></div>
       <div class="member__body"><strong>${name}</strong><p class="member__role">${role}</p><small>${area}</small></div>`,
    ),
  );

  render("#testimonials", testimonials, ([text, name, treatment, img]) =>
    el(
      "article",
      "quote",
      `<div class="quote__inner">
         <span class="stars" aria-label="Nota 5 de 5">★★★★★</span>
         <p>"${text}"</p>
         <div class="quote__author"><img src="${img}" alt="${name}" width="80" height="80" loading="lazy" /><div><strong>${name}</strong><small>${treatment}</small></div></div>
       </div>`,
    ),
  );

  render("#baGrid", beforeAfter, ([caption, before, after]) =>
    el(
      "article",
      "ba reveal",
      `<div class="ba__viewport" role="group" aria-label="Comparação antes e depois — ${caption}">
         <img class="ba__before" src="${before}" alt="Antes do tratamento — ${caption}" loading="lazy" />
         <img class="ba__after" src="${after}" alt="Depois do tratamento — ${caption}" loading="lazy" />
         <span class="ba__handle" aria-hidden="true"></span>
         <span class="ba__tag ba__tag--left">Antes</span>
         <span class="ba__tag ba__tag--right">Depois</span>
       </div>
       <p class="ba__caption">${caption}</p>`,
    ),
  );

  render("#faqList", faqs, ([q, a], i) => {
    const item = el("div", "faq__item");
    item.innerHTML = `<h3><button class="faq__q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">${q}<span aria-hidden="true">+</span></button></h3>
       <div class="faq__a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><p>${a}</p></div>`;
    return item;
  });

  /* ------------------ Navbar ------------------ */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 16);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = $("#burger");
  const mobileMenu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    mobileMenu.hidden = open;
  });
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    }
  });

  /* ------------------ Reveal on scroll ------------------ */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((n, i) => {
    n.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    io.observe(n);
  });

  /* ------------------ Slider de depoimentos ------------------ */
  const track = $("#testimonials");
  const dotsHost = $("#tDots");
  let index = 0;

  const perView = () => (window.innerWidth >= 900 ? 3 : window.innerWidth >= 640 ? 2 : 1);
  const maxIndex = () => Math.max(0, testimonials.length - perView());

  const buildDots = () => {
    dotsHost.innerHTML = "";
    for (let i = 0; i <= maxIndex(); i++) {
      const b = el("button", "dot");
      b.type = "button";
      b.setAttribute("aria-label", `Ir para o depoimento ${i + 1}`);
      b.addEventListener("click", () => goTo(i));
      dotsHost.appendChild(b);
    }
  };
  const update = () => {
    const step = 100 / perView();
    track.style.transform = `translateX(-${index * step}%)`;
    Array.from(dotsHost.children).forEach((d, i) => d.classList.toggle("is-active", i === index));
  };
  const goTo = (i) => {
    index = Math.min(Math.max(i, 0), maxIndex());
    update();
  };

  buildDots();
  update();
  $("#tPrev").addEventListener("click", () => goTo(index - 1));
  $("#tNext").addEventListener("click", () => goTo(index + 1));
  window.addEventListener("resize", () => {
    index = Math.min(index, maxIndex());
    buildDots();
    update();
  });

  /* ------------------ Antes e depois ------------------ */
  document.querySelectorAll(".ba__viewport").forEach((view) => {
    const after = $(".ba__after", view);
    const handle = $(".ba__handle", view);
    let dragging = false;

    const move = (clientX) => {
      const rect = view.getBoundingClientRect();
      const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      handle.style.left = `${pct}%`;
    };

    view.addEventListener("pointerdown", (e) => {
      dragging = true;
      view.setPointerCapture(e.pointerId);
      move(e.clientX);
    });
    view.addEventListener("pointermove", (e) => {
      if (dragging) move(e.clientX);
    });
    view.addEventListener("pointerup", () => {
      dragging = false;
    });
    view.addEventListener("pointercancel", () => {
      dragging = false;
    });
  });

  /* ------------------ FAQ (acordeão) ------------------ */
  $("#faqList").addEventListener("click", (e) => {
    const btn = e.target.closest(".faq__q");
    if (!btn) return;
    const item = btn.closest(".faq__item");
    const panel = $(".faq__a", item);
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq__item.is-open").forEach((open) => {
      open.classList.remove("is-open");
      $(".faq__a", open).style.maxHeight = "";
      $(".faq__q", open).setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      btn.setAttribute("aria-expanded", "true");
    }
  });

  /* ------------------ Aviso de portfólio ------------------ */
  const notice = $("#portfolio-notice");
  const noticeClose = $("[data-portfolio-notice-close]");
  if (notice && noticeClose) {
    noticeClose.addEventListener("click", () => notice.remove());
  }

  /* ------------------ Formulário ------------------ */
  const form = $("#contactForm");
  const note = $("#formNote");

  // Formulário de demonstração: por padrão, nenhum dado é enviado a lugar
  // nenhum (apenas simula sucesso). Para captar leads de verdade, crie um
  // formulário em https://formspree.io (ou um cenário/webhook no Make.com)
  // e cole a URL do endpoint aqui.
  const FORM_ENDPOINT = "https://hook.us2.make.com/c99eaxrmhge9ljuav0vkc9kpxs0sxs9t";

  const setError = (input, message) => {
    const field = input.closest(".field");
    field.classList.toggle("has-error", Boolean(message));
    $(`[data-error-for="${input.name}"]`, field).textContent = message || "";
    return !message;
  };

  const validate = () => {
    const nome = form.nome,
      tel = form.telefone,
      email = form.email;
    const okNome = setError(nome, nome.value.trim().length < 3 ? "Informe seu nome completo." : "");
    const digits = tel.value.replace(/\D/g, "");
    const okTel = setError(tel, digits.length < 10 ? "Informe um telefone válido com DDD." : "");
    const okMail = setError(
      email,
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? "" : "Informe um e-mail válido.",
    );
    return okNome && okTel && okMail;
  };

  // Máscara simples de telefone brasileiro
  form.telefone.addEventListener("input", (e) => {
    const d = e.target.value.replace(/\D/g, "").slice(0, 11);
    e.target.value =
      d.length > 10
        ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
        : d.length > 6
          ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
          : d.length > 2
            ? `(${d.slice(0, 2)}) ${d.slice(2)}`
            : d;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    note.textContent = "";
    if (!validate()) return;

    if (!FORM_ENDPOINT) {
      console.warn(
        "[OdontoPrime] FORM_ENDPOINT não configurado — formulário em modo de demonstração, nenhum dado foi enviado. Configure em public/odontoprime/js/script.js.",
      );
      note.textContent =
        "Solicitação enviada! Entraremos em contato em breve. (Modo demonstração — nenhum dado foi salvo.)";
      form.reset();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        note.textContent = "Solicitação enviada! Entraremos em contato em breve.";
        form.reset();
      } else {
        note.textContent = "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.";
      }
    } catch {
      note.textContent = "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.";
    } finally {
      submitBtn.disabled = false;
    }
  });

  ["nome", "telefone", "email"].forEach((name) => {
    form[name].addEventListener("blur", () => validate());
  });
})();
