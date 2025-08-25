import { swaggerUI } from "@hono/swagger-ui";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { rateLimiter } from "hono-rate-limiter";
import type { AppVariables } from "types/appVariables";
import { auth } from "./lib/auth";
import { openApiDoc } from "./lib/openApiDoc";
import { authMiddleware } from "./middlewares/auth.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import { appRouter } from "./routers";

export const app = new Hono<AppVariables>();

app.use(logger());

app.use(prettyJSON());

app.use(
	rateLimiter({
		windowMs: 20 * 60 * 1000,
		limit: 100,
		standardHeaders: "draft-6",
		keyGenerator: (c) =>
			c.req.header("x-forwarded-for") ??
			c.req.raw.headers.get("host") ??
			"unknown",
	}),
);

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

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.use("/user/link/*", authMiddleware);

app.route("/user/link", appRouter.linkRouter);
app.route("/user", appRouter.userRouter);

app.get("/api/health", (c) => {
	return c.json({
		message: "Service is healthy",
	});
});

app.get("/docs", (c) => c.json(openApiDoc));

app.get("/docs/ui", swaggerUI({ url: "/docs" }));

app.onError((err, c) => {
	return errorMiddleware(err, c);
});
