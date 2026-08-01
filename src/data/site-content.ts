/**
 * Landing page content.
 *
 * Kept as plain typed data (not JSX) on purpose: this is what would move
 * to a CMS or API response first in a future iteration, and section
 * components should not need to change shape when that happens.
 */

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: "🤝",
    title: "Atendimento Humanizado",
    description:
      "Tratamos cada paciente com empatia, atenção e cuidado individualizado, criando um ambiente de confiança mútua.",
  },
  {
    icon: "💻",
    title: "Tecnologia Digital",
    description:
      "Equipamentos de última geração: tomografia 3D, scanner intraoral, laser e materiais biocompatíveis premium.",
  },
  {
    icon: "✨",
    title: "Resultados Naturais",
    description:
      "Estética dental que respeita a harmonia do seu rosto — sorrisos que parecem naturais porque foram planejados assim.",
  },
  {
    icon: "🛋️",
    title: "Ambiente Confortável",
    description:
      "Clínica projetada para proporcionar conforto e relaxamento — porque o cuidado começa na sua chegada.",
  },
  {
    icon: "🎓",
    title: "Equipe Especializada",
    description:
      "Mais de 12 especialistas altamente qualificados com formação nacional e internacional reconhecida.",
  },
  {
    icon: "📋",
    title: "Atendimento Personalizado",
    description:
      "Plano de tratamento exclusivo para cada paciente, respeitando suas necessidades, objetivos e orçamento.",
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2009",
    title: "Fundação",
    description: "Abrimos as portas com a missão de democratizar a odontologia de excelência em São Paulo.",
  },
  {
    year: "2014",
    title: "Expansão",
    description: "Ampliamos para 10 consultórios e incorporamos as primeiras tecnologias digitais de ponta.",
  },
  {
    year: "2019",
    title: "Inovação digital",
    description: "Implementamos scanner intraoral 3D, planejamento digital e protocolo de sedação consciente.",
  },
  {
    year: "2024",
    title: "Referência premium",
    description:
      "Reconhecida como uma das clínicas de maior prestígio do estado, com +5.000 sorrisos transformados.",
  },
];

export interface Service {
  icon: string;
  title: string;
  description: string;
  badge?: "Mais popular" | "Premium";
}

export const services: Service[] = [
  {
    icon: "🦷",
    title: "Implantes",
    description:
      "Reposição de dentes perdidos com implantes de titânio da mais alta qualidade, com integração natural e durabilidade superior.",
    badge: "Mais popular",
  },
  {
    icon: "😁",
    title: "Ortodontia",
    description:
      "Alinhamento dental com aparelhos metálicos, estéticos ou alinhadores transparentes para um sorriso harmonioso.",
  },
  {
    icon: "💡",
    title: "Clareamento",
    description:
      "Clareamento dental de consultório com tecnologia LED/laser para resultados até 8 tons mais claros em uma sessão.",
  },
  {
    icon: "💎",
    title: "Lentes de Contato",
    description:
      "Ultra-finas facetas de porcelana que corrigem forma, cor e tamanho sem desgaste excessivo do dente natural.",
    badge: "Premium",
  },
  {
    icon: "🔧",
    title: "Próteses",
    description:
      "Próteses fixas e removíveis com estética e funcionalidade, personalizadas em laboratório digital próprio.",
  },
  {
    icon: "🪥",
    title: "Limpeza",
    description:
      "Profilaxia completa com remoção de tártaro e manchas, polimento e aplicação de flúor para saúde bucal preventiva.",
  },
  {
    icon: "🩺",
    title: "Tratamento de Canal",
    description:
      "Endodontia com rotação contínua e localizador apical eletrônico — salve seu dente natural com conforto e precisão.",
  },
  {
    icon: "🧸",
    title: "Odontopediatria",
    description:
      "Atendimento especial para crianças em ambiente lúdico e acolhedor, com profissionais especializados em pacientes pequenos.",
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "🧠",
    title: "Diagnóstico 3D preciso",
    description: "Tomografia computadorizada cone-beam para planejamento cirúrgico e implantológico com 0,1mm de precisão.",
  },
  {
    icon: "📡",
    title: "Scanner intraoral digital",
    description: "Moldagens digitais sem pasta, com envio instantâneo ao laboratório — mais conforto, mais precisão.",
  },
  {
    icon: "😌",
    title: "Sedação consciente",
    description: "Para pacientes ansiosos: sedação com óxido nitroso para um atendimento tranquilo e seguro.",
  },
  {
    icon: "🏭",
    title: "Laboratório próprio digital",
    description: "Próteses e restaurações confeccionadas in-house com fresagem CAD/CAM para entrega no mesmo dia.",
  },
  {
    icon: "🧪",
    title: "Protocolo de biossegurança",
    description: "Esterilização e descarte certificados, autoclave classe B e controle rigoroso de infecção cruzada.",
  },
  {
    icon: "📞",
    title: "Acompanhamento pós-tratamento",
    description: "Protocolo de follow-up dedicado com consultas de controle e canal de atendimento prioritário.",
  },
];

export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Agendamento",
    description: "Marque sua consulta pelo site, WhatsApp ou telefone. Escolha o horário que melhor se adapta à sua rotina.",
  },
  {
    title: "Avaliação",
    description: "Consulta inicial completa com exame clínico, radiografias e diagnóstico digital para mapeamento do seu caso.",
  },
  {
    title: "Planejamento",
    description: "Elaboração do plano de tratamento personalizado com apresentação visual do resultado esperado e opções financeiras.",
  },
  {
    title: "Tratamento",
    description: "Execução com técnicas modernas, conforto máximo e acompanhamento em cada etapa do seu tratamento.",
  },
  {
    title: "Acompanhamento",
    description: "Retornos periódicos, manutenção preventiva e canal exclusivo para dúvidas — porque seu sorriso é um investimento contínuo.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  treatment: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Fiz lentes de contato dental e o resultado superou todas as minhas expectativas. O Dr. Rafael planejou cada detalhe, o sorriso ficou completamente natural. Mudou minha autoestima de forma incrível.",
    author: "Mariana Ferreira",
    treatment: "Lentes de Contato Dental",
    avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format",
  },
  {
    quote:
      "Tinha muito medo de fazer implante, mas a equipe da OdontoPrime me deixou tranquilo desde o primeiro momento. O procedimento foi sem dor e o resultado final é impecável. Recomendo demais!",
    author: "Carlos Eduardo",
    treatment: "Implante Dentário",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    quote:
      "Dois anos de tratamento com a Dra. Carolina e o resultado valeu cada consulta. Ambiente impecável, atendimento humanizado e profissionais que realmente se importam com o paciente.",
    author: "Patrícia Almeida",
    treatment: "Ortodontia",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
  },
  {
    quote:
      "Fiz o clareamento antes do meu casamento e os dentes ficaram visivelmente mais brancos em apenas uma sessão. Atendimento profissional e cuidadoso. Já indiquei para toda a família.",
    author: "Roberto Nascimento",
    treatment: "Clareamento Dental",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
  },
  {
    quote:
      "Sempre tive fobia de dentista, mas aqui foi completamente diferente.O Dr.Marcos explicou cada passo, não senti dor nenhuma e ainda me ligaram depois para saber como eu estava.",
    author: "Fernanda Costa",
    treatment: "Tratamento de Canal",
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&auto=format",
  },
];

export interface BeforeAfterCase {
  label: string;
  beforeUrl: string;
  afterUrl: string;
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    label: "Lentes de Contato Dental",
    beforeUrl: "https://images.unsplash.com/photo-1663182234283-28941e7612da?w=700&h=500&fit=crop&auto=format",
    afterUrl: "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=700&h=500&fit=crop&auto=format",
  },
  {
    label: "Clareamento Dental",
    beforeUrl: "https://images.unsplash.com/photo-1663182234283-28941e7612da?w=700&h=500&fit=crop&auto=format&sat=-80",
    afterUrl: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=700&h=500&fit=crop&auto=format",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  croNumber: string;
  photoUrl: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Rafael Mendes",
    role: "Diretor Clínico",
    specialty: "Implantodontia & Cirurgia",
    croNumber: "CRO-SP 34.521",
    photoUrl: "https://images.unsplash.com/photo-1588776813941-dcf9c55e84d2?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Dra. Carolina Lima",
    role: "Especialista",
    specialty: "Ortodontia & Estética",
    croNumber: "CRO-SP 41.087",
    photoUrl: "https://images.unsplash.com/photo-1683349370055-7eba66a404c6?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Dr. André Santos",
    role: "Especialista",
    specialty: "Endodontia & Periodontia",
    croNumber: "CRO-SP 29.340",
    photoUrl: "https://images.unsplash.com/photo-1645066928295-2506defde470?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Dra. Marcos Oliveira",
    role: "Especialista",
    specialty: "Odontopediatria",
    croNumber: "CRO-SP 52.019",
    photoUrl: "https://images.unsplash.com/photo-1758691463582-11aea602cd4a?w=400&h=500&fit=crop&auto=format",
  },
];

export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  {
    question: "A avaliação inicial é gratuita?",
    answer:
      "Sim! A primeira consulta de avaliação é completamente gratuita. Nela realizamos exame clínico, analisamos suas necessidades e apresentamos o plano de tratamento personalizado.",
  },
  {
    question: "Vocês atendem planos odontológicos?",
    answer:
      "Atendemos os principais convênios odontológicos do mercado. Entre em contato para confirmar a cobertura do seu plano e os procedimentos incluídos.",
  },
  {
    question: "Quanto tempo leva um tratamento com implante?",
    answer:
      "Em média de 3 a 6 meses, considerando o período de osseointegração. Em casos selecionados é possível realizar carga imediata, com prótese no mesmo dia.",
  },
  {
    question: "O clareamento dental faz mal aos dentes?",
    answer:
      "Não. Quando realizado por profissionais com produtos regulamentados, o clareamento é seguro e não danifica o esmalte dental.",
  },
  {
    question: "Como é feito o agendamento de consultas?",
    answer: "Você pode agendar pelo formulário do site, pelo WhatsApp ou por telefone. Confirmamos o horário em até 1 hora útil.",
  },
  {
    question: "Atendem crianças? A partir de que idade?",
    answer: "Sim, nossa equipe de odontopediatria atende a partir do nascimento do primeiro dentinho, por volta dos 6 meses de idade.",
  },
  {
    question: "Oferecem financiamento para tratamentos?",
    answer: "Sim. Trabalhamos com parcelamento em até 18x no cartão e opções de financiamento próprio conforme análise.",
  },
  {
    question: "Como é o protocolo de higienização da clínica?",
    answer:
      "Seguimos protocolo rigoroso de biossegurança com autoclave classe B, materiais descartáveis e controle certificado de infecção cruzada.",
  },
];

export interface HeroStat {
  icon: string;
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { icon: "★", value: "4.9", label: "+1.200 avaliações" },
  { icon: "👥", value: "+5.000", label: "Pacientes atendidos" },
  { icon: "🏆", value: "15 anos", label: "De experiência" },
  { icon: "🔬", value: "100%", label: "Equipamentos digitais" },
];

export interface AboutStat {
  value: string;
  label: string;
}

export const aboutStats: AboutStat[] = [
  { value: "+5.000", label: "Pacientes atendidos" },
  { value: "15+", label: "Anos de experiência" },
  { value: "12", label: "Especialistas" },
  { value: "4.9★", label: "Avaliação média" },
];
