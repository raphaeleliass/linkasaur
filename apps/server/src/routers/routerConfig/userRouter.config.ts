import { createRoute } from "@hono/zod-openapi";
import {
	getUserResponseSchema,
	getUserSchema,
	userSchema,
} from "@/modules/user/user.schemas";

export const getMeRoute = createRoute({
	method: "get",
	path: "/me",
	tags: ["Users"],
	summary: "Get authenticated user",
	responses: {
		200: {
			content: {
				"application/json": {
					schema: userSchema,
				},
			},
			description: "Retrieve authenticated user",
		},
		400: {
			description: "Bad Request",
		},
		404: {
			description: "Not Found",
		},
	},
});

export const getUserRoute = createRoute({
	method: "get",
	path: "/user/:username",
	tags: ["Users"],
	summary: "Get public user",
	description: "Get a public static",
	request: {
		params: getUserSchema,
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: getUserResponseSchema,
				},
			},
			description: "Retrieve user",
		},
		400: {
			description: "Bad Request",
		},
		404: {
			description: "Not Found",
		},
	},
});
