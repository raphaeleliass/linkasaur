import type { MiddlewareHandler } from "hono";
import type { AppVariables } from "types/appVariables";

export const authMiddleware: MiddlewareHandler<AppVariables> = async (
	c,
	next,
) => {
	const user = c.get("user");
	const session = c.get("session");

	if (!user && !session) return c.json({ error: "Unauthorized" }, 401);

	await next();
};
