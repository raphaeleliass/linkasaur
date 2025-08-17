import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { AppVariables } from "types/appVariables";
import { auth } from "./lib/auth";

export const app = new Hono<AppVariables>();

app.use(logger());
app.use(
	"/*",
	cors({
		origin: process.env.CORS_ORIGIN || "",
		allowMethods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
		maxAge: 600,
		credentials: true,
	}),
);

app.use("*", async (c, next) => {
	const session = await auth.api.getSession({ headers: c.req.raw.headers });

	if (!session) {
		c.set("user", null);
		c.set("session", null);
		return next();
	}

	c.set("user", session.user);
	c.set("session", session.session);
	return next();
});

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
	return c.text("OK");
});

app.post("/sign-in", async (c) => {
	const { email, password } = await c.req.json();

	const user = await auth.api.signInEmail({
		body: {
			email,
			password,
		},
	});

	return c.json(user);
});

app.get("/valid", (c) => {
	const user = c.get("user");
	if (!user) return c.json({ message: "not auth" });
	return c.json({ message: "pass" });
});
