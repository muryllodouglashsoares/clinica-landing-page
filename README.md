# OdontoPrime — Landing Page

> Landing page premium para uma clínica odontológica fictícia, com foco em performance, SEO e acessibilidade.

> ⚠️ **Projeto fictício de portfólio.** "OdontoPrime", os dentistas, depoimentos e números de registro (CRO-SP) são inventados. O formulário de contato pode ser conectado a uma automação real (Make.com → Google Sheets) para fins de demonstração, via variável de ambiente no servidor.

## 🌐 Demo

https://clinica-landing-page.muryllodouglash-soares.workers.dev

## 📸 Preview

<table>
  <tr>
    <td><img src="./screenshots/pagina-principal.png" width="400"/></td>
    <td><img src="./screenshots/quem-somos.png" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><sub>Página principal</sub></td>
    <td align="center"><sub>Quem somos</sub></td>
  </tr>
  <tr>
    <td><img src="./screenshots/informacoes.png" width="400"/></td>
    <td><img src="./screenshots/especialidades.png" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><sub>Por que nos escolher</sub></td>
    <td align="center"><sub>Especialidades</sub></td>
  </tr>
  <tr>
    <td><img src="./screenshots/equipe.png" width="400"/></td>
    <td><img src="./screenshots/diferenciais.png" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><sub>Equipe</sub></td>
    <td align="center"><sub>Diferenciais</sub></td>
  </tr>
  <tr>
    <td><img src="./screenshots/depoimentos.png" width="400"/></td>
    <td><img src="./screenshots/perguntas-frequentes.png" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><sub>Depoimentos</sub></td>
    <td align="center"><sub>Perguntas frequentes</sub></td>
  </tr>
  <tr>
    <td><img src="./screenshots/formulario-contato.png" width="400"/></td>
    <td><img src="./screenshots/rodape.png" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><sub>Formulário de contato</sub></td>
    <td align="center"><sub>Rodapé</sub></td>
  </tr>
</table>

## Sobre o projeto

Landing page pixel-perfect construída a partir de um design de referência para uma clínica odontológica, servindo como peça de portfólio para demonstrar domínio de SSR, SEO técnico e integração de formulário com automação real (não apenas simulada).

## Funcionalidades

- [x] Landing page completa (serviços, equipe, depoimentos, FAQ) renderizada via SSR
- [x] Formulário de contato funcional, integrado a um webhook real (Make.com → Google Sheets), com modo demonstração automático caso `CONTACT_WEBHOOK_URL` não esteja configurada
- [x] Dados estruturados (JSON-LD) para `Dentist` e `FAQPage`
- [x] `sitemap.xml`, `robots.txt` e `manifest.json` (PWA) com ícones

## Tecnologias

### Frontend

- TanStack Start + TanStack Router (SSR e roteamento)
- React 19
- HTML/CSS/JS puro para o conteúdo da landing page em si (`public/odontoprime`), servido como conteúdo real da rota `/`
- Tailwind CSS + shadcn/ui (scaffold disponível para futuras telas internas)
- Vite

### Ferramentas

- ESLint + Prettier
- Bun (gerenciador de pacotes)

## Design e UX

O conteúdo da landing page (serviços, equipe, depoimentos, FAQ…) vem de uma fonte única de dados (`src/content/odontoprime.ts`) e é renderizado no servidor, inclusive o JSON-LD do FAQ. O `public/odontoprime/js/script.js` só adiciona interações (menu, slider, antes/depois, FAQ, formulário).

## Como executar

### Pré-requisitos

- Node.js
- Bun (ou npm/pnpm como alternativa)

### Instalação

```bash
git clone <URL-do-repositorio>
cd clinica-landing-page
bun install   # ou npm install / pnpm install
bun run dev    # ou npm run dev
```

Outros scripts disponíveis: `build`, `preview`, `lint`, `format`.

## Estrutura do projeto

```
public/odontoprime/       Landing page (HTML/CSS/JS) — o conteúdo real do site
  css/style.css
  js/script.js
  icons/
src/content/odontoprime.ts Fonte única dos dados + renderização das seções (SSR)
src/routes/index.tsx      Rota "/" — HTML via SSR, metadados, JSON-LD e script.js
src/routes/api/contact.ts Endpoint do formulário (valida e encaminha ao webhook)
src/routes/__root.tsx     Shell da aplicação (head padrão, favicon, manifest)
```

## Decisões técnicas

### Por que HTML/CSS/JS puro dentro de uma rota React?

O design foi construído como uma landing page estática (HTML/CSS/JS), mas o projeto usa TanStack Start para servir esse conteúdo via SSR na rota `/`, em vez de um redirecionamento client-side para um HTML solto em `/public`. Isso evita o duplo carregamento (bundle React + depois HTML estático) e garante que crawlers e previews de link (WhatsApp, Telegram etc.) recebam o conteúdo real da página, não uma tela de "carregando".

### Formulário de contato

O navegador envia o formulário (JSON) para `POST /api/contact` (`src/routes/api/contact.ts`). O servidor valida e limita o payload, confere a origem, descarta envios com o campo-isca preenchido e encaminha os dados (`multipart/form-data`, campos `nome`, `telefone`, `email`, `mensagem`) ao Custom Webhook do Make.com, que grava uma linha no Google Sheets. A URL do webhook **não** fica no código do cliente: ela é lida da variável de ambiente `CONTACT_WEBHOOK_URL` (sem prefixo `VITE_`).

- Produção (Cloudflare): defina `CONTACT_WEBHOOK_URL` como secret/variável do Worker.
- Desenvolvimento: copie `.env.example` para `.env` e preencha.
- Sem a variável, o formulário opera em **modo demonstração**: valida e informa que nada foi enviado.

> Se uma URL de webhook já foi publicada em versões anteriores do repositório, considere-a comprometida e gere uma nova no Make.com.

## SEO

- Dados estruturados (JSON-LD) para `Dentist` e `FAQPage` em `src/routes/index.tsx`
- `public/sitemap.xml` e `public/robots.txt` (apontando para `/sitemap.xml`)
- `public/manifest.json` + ícones para instalação como PWA

> A URL do site está em `SITE_URL` (`src/content/odontoprime.ts`), `sitemap.xml` e `robots.txt`. Ao mudar de domínio, atualize os três.

## Deploy

Publicado em Cloudflare Workers (conforme URL de demo).

## Autor

Muryllo Douglas

## Licença

MIT — ver [`LICENSE`](./LICENSE).
