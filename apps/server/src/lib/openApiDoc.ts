export const openApiDoc = {
	openapi: "3.1.0",
	info: {
		title: "Linkasaur API Documentation",
		version: "1.0.0",
		description: "API documentation for Linkasaur",
	},
	paths: {
		"/api/health": {
			get: {
				summary: "Health check",
				tags: ["Health"],
				responses: {
					"200": {
						description: "Service is healthy",
					},
				},
			},
		},
		"/user/link/create": {
			post: {
				summary: "Create a new link",
				tags: ["Link"],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["title", "href"],
								properties: {
									title: {
										type: "string",
										minLength: 2,
										description: "Title of the link",
									},
									href: {
										type: "string",
										format: "uri",
										description: "URL of the link",
									},
								},
								example: {
									title: "Meu GitHub",
									href: "https://github.com/usuario",
								},
							},
						},
					},
				},
				responses: {
					"200": {
						description: "Link created successfully",
					},
					"400": {
						description:
							"Invalid input - Title must have 2 characters at least or Invalid URL",
					},
				},
			},
		},
		"/user/link/update": {
			patch: {
				summary: "Update an existing link",
				tags: ["Link"],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["id", "title", "href"],
								properties: {
									id: {
										type: "string",
										format: "uuid",
										description: "UUID do link",
									},
									title: {
										type: "string",
										minLength: 3,
										description: "Novo título do link",
									},
									href: {
										type: "string",
										format: "uri",
										description: "Nova URL do link",
									},
								},
								example: {
									id: "123e4567-e89b-12d3-a456-426614174000",
									title: "Meu LinkedIn",
									href: "https://linkedin.com/in/usuario",
								},
							},
						},
					},
				},
				responses: {
					"200": {
						description: "Link updated successfully",
					},
					"400": {
						description:
							"Invalid input - Title must have 3 characters at least, Invalid URL, or Invalid UUID",
					},
				},
			},
		},
		"/user/link/delete": {
			delete: {
				summary: "Delete a link",
				tags: ["Link"],
				parameters: [
					{
						in: "query",
						name: "id",
						required: true,
						schema: {
							type: "string",
							format: "uuid",
						},
						description: "UUID do link a ser deletado",
						example: "123e4567-e89b-12d3-a456-426614174000",
					},
				],
				responses: {
					"200": {
						description: "Link deleted successfully",
					},
					"400": {
						description: "Invalid UUID",
					},
				},
			},
		},
		"/user/{username}": {
			get: {
				summary: "Get user by username",
				tags: ["User"],
				parameters: [
					{
						in: "path",
						name: "username",
						required: true,
						schema: {
							type: "string",
							pattern: "^[^\\s]+$",
						},
						description: "Nome de usuário (não pode conter espaços)",
						example: "johndoe",
					},
				],
				responses: {
					"200": {
						description: "User data retrieved successfully",
					},
					"400": {
						description: "Username cannot include spaces",
					},
				},
			},
		},
	},
};
