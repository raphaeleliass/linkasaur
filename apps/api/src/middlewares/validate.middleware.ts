import type { Context, Next } from "hono";
import { type ZodObject, z } from "zod";

export const validateMiddleware =
	(schema: ZodObject, type: "json" | "query" | "param" = "json") =>
	async (c: Context, next: Next) => {
		try {
			let data: unknown;
			if (type === "json") data = await c.req.json();

			if (type === "query") data = c.req.query();

			if (type === "param") data = c.req.param();

			const result = schema.safeParse(data);

			if (!result.success)
				return c.json(
					{
						error: "Failed to validate input.",
						cause: z.treeifyError(result.error).properties,
					},
					400,
				);

			c.set("validatedData", result.data);

			await next();
		} catch (err: unknown) {
			if (err instanceof Error)
				return c.json({ error: "Invalid JSON body.", cause: err.message });
		}
	};
