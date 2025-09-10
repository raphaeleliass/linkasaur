import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";

type PostgresError = Error & {
	code?: string;
	detail?: string;
	table?: string;
	column?: string;
};

export const errorMiddleware = (error: Error, c: Context) => {
	if (error instanceof HTTPException) {
		return c.json({ error: error.message }, error.status);
	}

	const pgError = error as PostgresError;
	if (pgError.code) {
		switch (pgError.code) {
			case "23505": // unique_violation
				return c.json({ error: "Dados duplicados." }, 409);
			case "23503": // foreign_key_violation
				return c.json({ error: "ID inválido fornecido." }, 400);
			case "42703": // undefined_column
				return c.json({ error: "Coluna inválida." }, 400);
			case "42P01": // undefined_table
				return c.json({ error: "Tabela não encontrada." }, 500);
			default:
				console.error("Postgres Error:", pgError);
				return c.json({ error: "Erro interno do servidor." }, 500);
		}
	}

	console.error("Server Error:", error);
	return c.json({ error: "Erro interno do servidor." }, 500);
};
