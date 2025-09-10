# Linkasaur: Plataforma de Gerenciamento de Links

Bem-vindo ao repositório do Linkasaur, uma plataforma robusta e moderna para gerenciamento de links, desenvolvida com foco em performance, segurança e escalabilidade. Este projeto demonstra a aplicação de boas práticas de desenvolvimento de software, utilizando uma arquitetura modular e tecnologias de ponta.

## Visão Geral do Projeto

O Linkasaur é uma aplicação full-stack que permite aos usuários gerenciar seus links de forma eficiente. O backend, construído com Hono e Prisma, oferece uma API RESTful segura e performática, enquanto o frontend (localizado em `apps/web`) proporciona uma experiência de usuário intuitiva e responsiva.

## Destaques Técnicos

### Arquitetura e Design

O projeto adota uma arquitetura limpa e modular, seguindo princípios como SOLID e separação de responsabilidades. Isso garante um código organizado, fácil de manter e expandir. A estrutura é dividida em:

-   **`apps/api`**: Backend da aplicação, responsável pela lógica de negócios, autenticação e interação com o banco de dados.

### Tecnologias Utilizadas (Backend - `apps/api`)

-   **TypeScript**: Garante maior segurança de tipo e melhora a manutenibilidade do código.
-   **Hono**: Um framework web rápido e leve para construir APIs, otimizado para edge runtimes.
-   **Prisma**: ORM (Object-Relational Mapper) moderno e poderoso para interação com o banco de dados PostgreSQL, com schemas bem definidos para garantir a integridade dos dados.
-   **better-auth**: Solução de autenticação robusta e flexível, garantindo a segurança dos usuários e seus dados.
-   **Zod**: Biblioteca de validação de schemas para garantir que os dados de entrada da API estejam sempre corretos e seguros.
-   **PostgreSQL**: Banco de dados relacional robusto e escalável.

### Estrutura do Código

A estrutura do backend (`apps/api`) é organizada de forma clara:

-   **`src/app.ts`**: Configuração principal da aplicação Hono, incluindo middlewares globais como CORS, logging e autenticação.
-   **`src/lib/auth.ts`**: Configuração da biblioteca de autenticação `better-auth`.
-   **`src/middlewares`**: Contém middlewares para autenticação (`auth.middleware.ts`), tratamento de erros (`error.middleware.ts`) e validação de dados (`validate.middleware.ts`).
-   **`src/modules`**: Módulos de domínio, como `link` e `user`, cada um contendo seus próprios controllers, services e repositories, promovendo a modularidade e a separação de preocupações.
-   **`src/routers`**: Definição das rotas da API, organizadas por funcionalidade (`linkRouter.ts`, `userRouter.ts`).
-   **`prisma/schema`**: Definição dos schemas do banco de dados para `auth`, `link` e o schema principal, garantindo um modelo de dados claro e consistente.

## Como Rodar o Projeto (Backend)

Para configurar e rodar o backend do Linkasaur, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/raphaeleliass/linkasaur]
    cd linkasaur/apps/api
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o `bun` instalado. Se não tiver, você pode instalá-lo via `npm` ou `yarn`:
    ```bash
    npm install -g bun # ou yarn global add bun
    ```
    Em seguida, instale as dependências do projeto:
    ```bash
    bun install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do diretório `apps/api` baseado no `.env.example` e preencha com suas configurações de banco de dados e CORS.
    ```
    DATABASE_URL="postgresql://user:password@host:port/database"
    CORS_ORIGIN="http://localhost:3000" # ou a URL do seu frontend
    ```

4.  **Prepare o banco de dados:**
    Gere o cliente Prisma e aplique as migrações no banco de dados:
    ```bash
    bun run db:generate
    bun run db:push
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    bun run dev
    ```
    O servidor estará disponível em `http://localhost:3000` (ou a porta configurada).

## Considerações Finais

Este projeto demonstra uma sólida base para o desenvolvimento de aplicações web modernas, com foco em código limpo, segurança e escalabilidade.
