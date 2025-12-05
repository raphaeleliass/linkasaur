import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { rateLimiter } from "hono-rate-limiter";
import type { AppVariables } from "@/types/appVariables";
import { licenseText } from "./data";
import { auth } from "./lib/auth";
import { authMiddleware } from "./middlewares/auth.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import { appRouter } from "./routers";

const app = new OpenAPIHono<AppVariables>();

app.use(logger());

app.use(
	"/*",
	cors({
		origin: process.env.CORS_ORIGIN || "",
		allowMethods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
		allowHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	}),
);

app.use(
	"/*",
	rateLimiter({
		windowMs: 15 * 60 * 1000,
		limit: 100,
		standardHeaders: "draft-6",
		keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "",
	}),
);

app.use(
	"/api/auth/*",
	rateLimiter({
		windowMs: 15 * 60 * 1000,
		limit: 100,
		standardHeaders: "draft-6",
		keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "",
	}),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.use("*", async (c, next) => {
	const session = await auth.api.getSession({ headers: c.req.raw.headers });

	if (!session) {
		c.set("user", null);
		c.set("session", null);
		c.set("userId", null);
		return next();
	}

	c.set("user", session.user);
	c.set("session", session.session);
	c.set("userId", session.user.id);
	return next();
});

app.get("/license", (c) => {
	return c.text(licenseText);
});

app.doc("/doc", {
	openapi: "3.0.0",
	info: {
		title: "API Linkasaur - Documentação Oficial",
		version: "v1",
		contact: {
			name: "Suporte Linkasaur",
			email: "raphaeleliass@outloook.com",
			url: "https://raphaelelias.vercel.app/",
		},
		license: {
			name: "MIT",
			url: "/license",
		},
	},
	tags: [
		{ name: "Links", description: "All links endpoints" },
		{ name: "Users", description: "All users endpoints" },
	],
});

app.get(
	"/docs",
	Scalar({
		pageTitle: "API Linkasaur",
		url: "/doc",
		theme: "fastify",
		showDeveloperTools: "localhost",
		hideClientButton: true,
	}),
);

app.use("/user/link/*", authMiddleware);
app.use("/users/me", authMiddleware);

app.route("/user/link", appRouter.linkRouter);
app.route("/users", appRouter.userRouter);

app.get("/api/health", (c) => {
	return c.json({
		message: "Service is healthy",
	});
});

app.onError(errorMiddleware);

export default app;
