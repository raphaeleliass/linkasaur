import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { PrismaClientKnownRequestError } from "prisma/generated/internal/prismaNamespace";

export const errorMiddleware = (error: Error, c: Context) => {
	if (error instanceof HTTPException) {
		return c.json({ error: error.message }, error.status);
	}

	if (error instanceof PrismaClientKnownRequestError) {
		switch (error.code) {
			case "P2025":
				return c.json({ error: "Recurso não encontrado." }, 404);
			case "P2003":
				return c.json({ error: "ID inválido fornecido." }, 400);
			case "P2002":
				return c.json({ error: "Dados duplicados." }, 409);
			default:
				console.error("Prisma Error:", error);
				return c.json({ error: "Erro interno do servidor." }, 500);
		}
	}

	console.error("Server Error:", error);
	return c.json({ error: "Erro interno do servidor." }, 500);
};
