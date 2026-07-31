# OdontoPrime — Landing Page

Landing page institucional para uma clínica odontológica premium, construída com **React 19**, **TanStack Start** (SSR) e **TypeScript**, com foco em performance, acessibilidade (WCAG 2.2 AA) e SEO técnico.

🔗 Demo: _adicionar URL de deploy_

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | TanStack Start (React SSR/SSG) + TanStack Router (file-based routing) |
| Linguagem | TypeScript (strict mode) |
| Estilo | CSS com design tokens (custom properties) + Tailwind (para componentes `shadcn/ui`) |
| Build | Vite |
| Dados | Conteúdo tipado em `src/data`, pronto para ser trocado por uma API/CMS |

## Arquitetura

```
src/
├── data/                 # Conteúdo e configuração tipados (fonte única da verdade)
│   ├── site-config.ts    # Marca, contatos, endereço
│   └── site-content.ts   # Serviços, depoimentos, equipe, FAQ, etc.
├── hooks/                 # Lógica de interação isolada e reutilizável
│   ├── use-scroll-reveal.ts
│   ├── use-sticky-nav.ts
│   ├── use-testimonial-carousel.ts
│   ├── use-before-after-slider.ts
│   └── use-contact-form.ts
├── components/
│   ├── layout/            # Header, footer, botão flutuante do WhatsApp
│   ├── sections/           # Uma seção da landing page por arquivo
│   ├── OdontoPrimeLandingPage.tsx  # Composição da página
│   └── StructuredData.tsx # JSON-LD (Schema.org/Dentist)
├── styles/
│   └── odontoprime.css    # Design tokens e estilos da landing page
└── routes/
    ├── __root.tsx          # Shell HTML, meta tags padrão, error/404 boundaries
    └── index.tsx            # Rota "/", meta tags específicas da página
```

**Princípio de organização:** cada seção da página é um componente isolado que
recebe seu conteúdo de `src/data`. Trocar um texto, adicionar um depoimento
ou um novo serviço é uma edição em um arquivo de dados — nunca é preciso
mexer em JSX para isso.

## Por que SSR real (e não um redirect para HTML estático)

A versão anterior deste projeto servia a landing page como um arquivo HTML
estático em `/public`, e a rota React apenas redirecionava para ele no
client (`window.location.replace`). Isso quebrava:

- **SEO**: motores de busca recebiam uma página vazia antes do redirect.
- **Performance percebida**: um passo extra de navegação antes do conteúdo.
- **Manutenção**: duas implementações da mesma página (uma em HTML/JS puro,
  outra no scaffold React) evoluindo de forma independente.

Agora a página é renderizada no servidor como parte real da árvore de rotas,
com as meta tags corretas presentes na resposta HTML inicial.

## Acessibilidade

- Estrutura semântica (`header`, `nav`, `main`, `section`, `footer`, `figure`, `address`).
- Skip link para pular a navegação (WCAG 2.4.1).
- `aria-expanded`/`aria-controls` no menu mobile e no acordeão de FAQ.
- Contraste de cores validado nos tokens de design.
- `prefers-reduced-motion` respeitado em todas as animações.
- Foco visível customizado (`:focus-visible`).

## SEO técnico

- Meta tags (title, description, canonical, Open Graph, Twitter Cards) por rota.
- `robots.txt` e `sitemap.xml`.
- JSON-LD `Dentist`/`LocalBusiness` com endereço, telefone e avaliação agregada.
- Imagens com `loading="lazy"` e dimensões explícitas (evita layout shift).

## Rodando localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
npm run lint      # ESLint
```

## Próximos passos (roadmap)

- [ ] Conectar `useContactForm` a um endpoint real (`POST /api/leads`).
- [ ] Hospedar as imagens localmente/CDN própria em vez de URLs do Unsplash.
- [ ] Testes automatizados (Vitest + Testing Library) para os hooks de interação.
- [ ] Auditoria Lighthouse em CI.
