# ✂️ Barbershop Pro Showcase

Uma vitrine estática de frontend para apresentar uma experiência premium de barbearia. O projeto preserva o trabalho de UI/UX, responsividade e animação, mas foi deliberadamente reduzido a uma demonstração local e fictícia.

> 🔒 **Privacidade por design:** esta versão não possui backend, cliente de API, autenticação, cadastro, pagamentos, analytics, pixels, webhooks ou integrações externas.

## ✨ Destaques

- interface responsiva para desktop e mobile;
- navegação pública com React Router;
- componentes reutilizáveis e acessíveis;
- animações sutis com Framer Motion;
- design system escuro com tipografia e tokens próprios;
- conteúdo local, genérico e explicitamente fictício.

## 🛡️ Garantias da vitrine

- nenhuma chave, token, credencial ou variável de ambiente;
- nenhum domínio, telefone, documento ou perfil social real;
- nenhuma chamada `fetch`, proxy ou conexão com serviços;
- nenhum formulário de dados pessoais ou credenciais;
- nenhum cookie, `localStorage` ou `sessionStorage`;
- nenhum asset associado ao negócio que originou o layout;
- nenhum fluxo administrativo, financeiro ou operacional.

Os horários, profissionais, métricas e textos exibidos existem somente para composição visual.

## 🧰 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

## 🚀 Execução local

Requisitos: Node.js 20+ e pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Não é necessário criar `.env` ou configurar qualquer serviço.

## ✅ Validação

```bash
pnpm typecheck
pnpm build
pnpm audit
```

## 📁 Estrutura

```text
src/
├── components/   # blocos visuais reutilizáveis
├── hooks/        # dados locais da demonstração
├── lib/          # utilitários puros
└── pages/        # páginas públicas da vitrine
```

## 📜 Uso

Projeto de portfólio e demonstração técnica. O conteúdo não representa uma operação comercial ativa.
