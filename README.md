# OdontoPrime — Landing Page

Landing page premium para uma clínica odontológica fictícia, desenvolvida como
peça de portfólio. Projeto pixel-perfect a partir de um design de referência,
com foco em performance, SEO e acessibilidade.

> ⚠️ **Este é um projeto fictício de portfólio.** "OdontoPrime", os dentistas,
> depoimentos e números de registro (CRO-SP) são inventados. O formulário de
> contato está conectado a uma automação real (Make.com → Google Sheets) para
> fins de demonstração — veja [Formulário de contato](#formulário-de-contato)
> abaixo antes de reutilizar este projeto.

## Demo

https://clinica-landing-page.muryllodouglash-soares.workers.dev

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) — SSR e roteamento
- React 19
- HTML/CSS/JS puro para a landing page em si (`public/odontoprime`), servido
  como conteúdo real da rota `/` (ver [Decisões de projeto](#decisões-de-projeto))
- Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/) (scaffold disponível para futuras páginas/telas internas)
- Vite

## Rodando localmente

```bash
bun install   # ou npm install / pnpm install
bun run dev   # ou npm run dev
```

Outros scripts disponíveis: `build`, `preview`, `lint`, `format`.

## Estrutura

```
public/odontoprime/       Landing page (HTML/CSS/JS) — o conteúdo real do site
  css/style.css
  js/script.js
  icons/
src/routes/index.tsx      Rota "/" — renderiza o HTML acima via SSR e injeta
                           metadados, JSON-LD e o script.js
src/routes/__root.tsx     Shell da aplicação (head padrão, favicon, manifest)
```

## Decisões de projeto

- **Por que HTML/CSS/JS puro dentro de uma rota React?** O design foi
  construído como uma landing page estática (HTML/CSS/JS), mas o projeto usa
  TanStack Start para servir esse conteúdo via SSR na rota `/`, em vez de um
  `window.location.replace` client-side para um HTML solto em `/public`. Isso
  evita o duplo carregamento (bundle React + depois HTML estático) e garante
  que crawlers e previews de link (WhatsApp, Telegram, etc.) recebam o
  conteúdo real da página, não uma tela de "carregando".
- **Conteúdo gerado dinamicamente (`script.js`)**: grades de serviços,
  equipe, depoimentos e FAQ são montadas via JavaScript no client, replicando
  o comportamento do design original. Para uma futura evolução, esse
  conteúdo pode ser migrado para componentes React server-rendered, o que
  eliminaria a dependência de JS para essas seções aparecerem no HTML inicial.

## Formulário de contato

O formulário (`#contactForm`) é validado e enviado via `fetch` em
`public/odontoprime/js/script.js`, na constante `FORM_ENDPOINT`.

Atualmente ele está configurado para enviar os dados (nome, telefone, e-mail
e mensagem) como `multipart/form-data` para um **Custom Webhook do
Make.com**, que por sua vez grava cada envio como uma nova linha em uma
planilha do **Google Sheets** (módulo *Google Sheets → Add a Row*).

Fluxo resumido do cenário no Make:

```
Webhook (Custom webhook) → Google Sheets (Add a Row)
```

Se `FORM_ENDPOINT` estiver vazio (`""`), o formulário volta ao **modo
demonstração**: valida os campos e simula uma confirmação, sem enviar nada —
esse é o comportamento seguro para reaproveitar este projeto como peça de
portfólio ou template.

Outros destinos possíveis para `FORM_ENDPOINT`, caso não queira usar o Make:

- [Formspree](https://formspree.io) — cole a URL do seu formulário
- Qualquer outro webhook/endpoint que aceite `POST` com `multipart/form-data`

> Como o `fetch` roda no navegador do visitante, a URL do webhook fica
> visível no código-fonte da página — não é necessário (nem adianta) guardá-la
> como variável de ambiente/secret no Cloudflare ou em qualquer plataforma de
> deploy, já que o arquivo `script.js` é um asset estático servido como está,
> fora do pipeline do Vite.

## SEO

- Dados estruturados (JSON-LD) para `Dentist` e `FAQPage` em `src/routes/index.tsx`
- `public/sitemap.xml` e `public/robots.txt` (referenciando o sitemap)
- `public/manifest.json` + ícones para instalação como PWA

> Antes de publicar, troque `https://odontoprime.exemplo.com.br` pela URL
> real do deploy em `sitemap.xml`, `robots.txt` e no JSON-LD.

## O que falta para um projeto real (fora do escopo de portfólio)

- Política de privacidade/LGPD real — o texto atual do formulário
  (`form-privacy` em `src/routes/index.tsx`) ainda diz que "seus dados não
  são armazenados nem compartilhados de verdade", o que não é mais verdade
  com o Make.com conectado e precisa ser atualizado/substituído por um aviso
  real, especialmente relevante por se tratar de um negócio de saúde
- Consentimento explícito (opt-in) e base legal para tratamento dos dados
  coletados via LGPD, já que hoje o envio ocorre sem checkbox de consentimento
- Validação de compliance publicitário (ex.: normas do CFO para uso de fotos
  de "antes e depois" em clínicas odontológicas reais no Brasil)
- Testes automatizados
