import { createRoute, z } from "@hono/zod-openapi";
import {
	createLinkSchema,
	deleteLinkSchema,
	linkResponseSchema,
	updateLinkSchema,
} from "@/modules/link/link.schemas";

export const getLinksRoute = createRoute({
	method: "get",
	path: "/all",
	tags: ["Links"],
	summary: "Get all user links",

	responses: {
		200: {
			content: {
				"application/json": {
					schema: z.array(linkResponseSchema),
				},
			},
			description: "Retrieve all user links",
		},
		400: {
			description: "Invalid input data - missing or malformed fields",
		},
		500: {
			description: "Internal server error",
		},
	},
});

export const createLinkRoute = createRoute({
	method: "post",
	path: "/create",
	tags: ["Links"],
	summary: "Create a new link",
	request: {
		body: {
			content: {
				"application/json": {
					schema: createLinkSchema.omit({ userId: true }),
				},
			},
			description: "Create a new link",
		},
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: linkResponseSchema,
				},
			},
			description: "Retrieve the created link",
		},
		400: {
			description: "Invalid input data - missing or malformed fields",
		},
		500: {
			description: "Internal server error",
		},
	},
});

export const updateLinkRoute = createRoute({
	method: "patch",
	path: "/update",
	tags: ["Links"],
	summary: "Update an existing link",
	request: {
		body: {
			content: {
				"application/json": {
					schema: updateLinkSchema.omit({ userId: true }),
				},
			},
			description: "Update link schema",
		},
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: linkResponseSchema,
				},
			},
			description: "Retrieve the updated link",
		},
		400: {
			description: "Invalid input data - missing or malformed fields",
		},
		404: {
			description: "Not Found",
		},
	},
});

export const deleteLinkRoute = createRoute({
	method: "delete",
	path: "/delete",
	tags: ["Links"],
	summary: "Delete a link",
	request: {
		query: deleteLinkSchema.omit({ userId: true }),
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: linkResponseSchema,
				},
			},
			description: "Retrieve the deleted link",
		},
		400: {
			description: "Invalid input data - missing or malformed fields",
		},
		404: {
			description: "Not Found",
		},
	},
});
