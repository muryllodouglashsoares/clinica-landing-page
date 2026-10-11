/**
 * Fonte única de dados da landing page OdontoPrime (projeto fictício de portfólio).
 *
 * Essas listas são renderizadas no servidor (SSR) por `renderSections()` e também
 * alimentam o JSON-LD (FAQPage) — assim o conteúdo visível e os dados estruturados
 * nunca divergem. O `public/odontoprime/js/script.js` apenas adiciona interações.
 */

export const SITE_URL = "https://clinica-landing-page.muryllodouglash-soares.workers.dev";
export const PHONE_DISPLAY = "(11) 3000-1000";
export const PHONE_TEL = "+551130001000";
export const WHATSAPP_URL = "https://wa.me/5511930001000";
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=800&h=900&fit=crop&auto=format";
export const OG_IMAGE =
  "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=1200&h=630&fit=crop&auto=format";

type Pair = readonly [string, string];

export const FAQS: readonly Pair[] = [
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

const BENEFITS: readonly (readonly [string, string, string])[] = [
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

const TIMELINE: readonly (readonly [string, string, string])[] = [
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

const SERVICES: readonly (readonly [string, string, string, string])[] = [
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

const FEATURES: readonly (readonly [string, string, string])[] = [
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

const STEPS: readonly Pair[] = [
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

const TESTIMONIALS: readonly (readonly [string, string, string, string])[] = [
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

const BEFORE_AFTER: readonly (readonly [string, string, string])[] = [
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

const TEAM: readonly (readonly [string, string, string, string, string])[] = [
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

/* ------------------------------------------------------------------ */
/* Renderização (HTML string, escapada) para as seções dinâmicas        */
/* ------------------------------------------------------------------ */

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
const esc = (value: string) => value.replace(/[&<>"']/g, (c) => ESCAPES[c]);

function stars(label = "Nota 5 de 5") {
  return `<span class="stars" role="img" aria-label="${label}"><span aria-hidden="true">★★★★★</span></span>`;
}

export function renderSections() {
  const benefits = BENEFITS.map(
    ([ico, title, text]) =>
      `<article class="card reveal"><div class="card__ico" aria-hidden="true">${ico}</div><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`,
  ).join("");

  const timeline = TIMELINE.map(
    ([year, title, text]) =>
      `<li class="reveal"><span class="year">${year}</span><h4>${esc(title)}</h4><p>${esc(text)}</p></li>`,
  ).join("");

  const services = SERVICES.map(([ico, title, text, badge]) => {
    const badgeHtml = badge
      ? `<span class="badge${badge === "Premium" ? " badge--gold" : ""}">${esc(badge)}</span>`
      : "";
    return `<article class="card card--service reveal">${badgeHtml}<div class="card__ico" aria-hidden="true">${ico}</div><h3>${esc(title)}</h3><p>${esc(text)}</p><a class="card__link" href="#agendar" aria-label="Saiba mais sobre ${esc(title)}">Saiba mais <span aria-hidden="true">→</span></a></article>`;
  }).join("");

  const features = FEATURES.map(
    ([ico, title, text]) =>
      `<article class="feature reveal"><div class="feature__ico" aria-hidden="true">${ico}</div><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></article>`,
  ).join("");

  const steps = STEPS.map(
    ([title, text], i) =>
      `<li class="reveal"><span class="num" aria-hidden="true">${i + 1}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`,
  ).join("");

  const team = TEAM.map(
    ([name, role, area, cro, img]) =>
      `<article class="member reveal"><div class="member__photo"><img src="${esc(img)}" alt="${esc(name)}" width="400" height="500" loading="lazy" /><span class="member__cro">${esc(cro)}</span></div><div class="member__body"><strong>${esc(name)}</strong><p class="member__role">${esc(role)}</p><small>${esc(area)}</small></div></article>`,
  ).join("");

  const testimonials = TESTIMONIALS.map(
    ([text, name, treatment, img]) =>
      `<article class="quote"><div class="quote__inner">${stars()}<p>“${esc(text)}”</p><div class="quote__author"><img src="${esc(img)}" alt="" width="80" height="80" loading="lazy" /><div><strong>${esc(name)}</strong><small>${esc(treatment)}</small></div></div></div></article>`,
  ).join("");

  const beforeAfter = BEFORE_AFTER.map(
    ([caption, before, after]) =>
      `<article class="ba reveal"><div class="ba__viewport" role="group" aria-label="Comparação antes e depois — ${esc(caption)}"><img class="ba__before" src="${esc(before)}" alt="Antes do tratamento — ${esc(caption)}" width="700" height="500" loading="lazy" /><img class="ba__after" src="${esc(after)}" alt="Depois do tratamento — ${esc(caption)}" width="700" height="500" loading="lazy" /><span class="ba__handle" role="slider" tabindex="0" aria-orientation="horizontal" aria-label="Posição do divisor — ${esc(caption)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="50% antes, 50% depois"></span><span class="ba__tag ba__tag--left" aria-hidden="true">Antes</span><span class="ba__tag ba__tag--right" aria-hidden="true">Depois</span></div><p class="ba__caption">${esc(caption)}</p></article>`,
  ).join("");

  const faq = FAQS.map(
    ([q, a], i) =>
      `<div class="faq__item"><h3><button type="button" class="faq__q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">${esc(q)}<span aria-hidden="true">+</span></button></h3><div class="faq__a" id="faq-a-${i}"><p>${esc(a)}</p></div></div>`,
  ).join("");

  return { benefits, timeline, services, features, steps, team, testimonials, beforeAfter, faq };
}

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": `${SITE_URL}/#clinica`,
        name: "OdontoPrime",
        description:
          "Clínica odontológica premium com tecnologia digital, atendimento humanizado e mais de 5.000 sorrisos transformados.",
        url: `${SITE_URL}/`,
        telephone: "+55-11-3000-1000",
        email: "contato@odontoprime.com.br",
        priceRange: "$$$",
        image: OG_IMAGE,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Paulista, 1000",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        sameAs: [WHATSAPP_URL],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}
