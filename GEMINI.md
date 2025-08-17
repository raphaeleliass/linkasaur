
# GEMINI.md

## Project Overview

This is a full-stack application built with the Better-T-Stack, featuring a Next.js frontend and a Hono backend. The project is a monorepo managed with Turborepo.

**Key Technologies:**

*   **Frontend:** Next.js, React, TailwindCSS, shadcn/ui, Radix UI, TanStack Query, Better Auth
*   **Backend:** Hono, Node.js, Prisma, PostgreSQL, Better Auth
*   **Tooling:** TypeScript, Turborepo, Biome, Husky

**Architecture:**

The project is structured as a monorepo with two main applications:

*   `apps/web`: The Next.js frontend application.
*   `apps/server`: The Hono backend API.

## Building and Running

**1. Installation:**

Install the dependencies using pnpm:

```bash
pnpm install
```

**2. Database Setup:**

This project uses PostgreSQL with Prisma.

1.  Make sure you have a PostgreSQL database set up.
2.  Update your `apps/server/.env` file with your PostgreSQL connection details.
3.  Generate the Prisma client and push the schema:

```bash
pnpm db:push
```

**3. Development:**

To run both the frontend and backend in development mode, use the following command:

```bash
pnpm dev
```

*   The web application will be available at `http://localhost:3001`.
*   The API will be running at `http://localhost:3000`.

**Available Scripts:**

*   `pnpm dev`: Start all applications in development mode.
*   `pnpm build`: Build all applications.
*   `pnpm dev:web`: Start only the web application.
*   `pnpm dev:server`: Start only the server.
*   `pnpm check-types`: Check TypeScript types across all apps.
*   `pnpm db:push`: Push schema changes to the database.
*   `pnpm db:studio`: Open the database studio UI.
*   `pnpm check`: Run Biome formatting and linting.

## Development Conventions

*   **Code Style:** The project uses Biome for formatting and linting. A pre-commit hook is set up with Husky to ensure code quality.
*   **Commits:** Conventional Commits are recommended.
*   **Authentication:** The project uses Better Auth for email and password authentication.
*   **Database:** Prisma is used as the ORM. Schema changes should be made in the `apps/server/prisma/schema` directory and then pushed to the database using `pnpm db:push`.
