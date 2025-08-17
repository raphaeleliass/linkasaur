# linkasaur

Uma ferramenta de código aberto simples e poderosa para gerenciar e encurtar seus links. Este projeto foi criado com uma stack TypeScript moderna que combina Next.js, Hono e muito mais.

## Funcionalidades

- **TypeScript** - Para segurança de tipos e melhor experiência de desenvolvimento
- **Next.js** - Framework React full-stack
- **TailwindCSS** - CSS utility-first para desenvolvimento rápido de UI
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Hono** - Framework de servidor leve e performático
- **Node.js** - Ambiente de execução
- **Prisma** - ORM TypeScript-first
- **PostgreSQL** - Mecanismo de banco de dados
- **Autenticação** - Autenticação por e-mail e senha com Better Auth
- **Biome** - Linting e formatação
- **Husky** - Hooks do Git para qualidade de código
- **Turborepo** - Sistema de build otimizado para monorepo

## Desenvolvimento

Para executar o servidor de desenvolvimento:

```bash
pnpm dev
```

Abra [http://localhost:3001](http://localhost:3001) no seu navegador para ver a aplicação web.
A API está rodando em [http://localhost:3000](http://localhost:3000).



## Estrutura do Projeto

```
linkasaur/
├── apps/
│   ├── web/         # Aplicação frontend (Next.js)
│   └── server/      # API backend (Hono)
```

## Scripts Disponíveis

- `pnpm dev`: Inicia todas as aplicações em modo de desenvolvimento
- `pnpm build`: Compila todas as aplicações
- `pnpm dev:web`: Inicia apenas a aplicação web
- `pnpm dev:server`: Inicia apenas o servidor
- `pnpm check-types`: Verifica os tipos TypeScript em todas as aplicações
- `pnpm db:push`: Envia as alterações do schema para o banco de dados
- `pnpm db:studio`: Abre a UI do studio do banco de dados
- `pnpm check`: Executa a formatação e o linting do Biome
