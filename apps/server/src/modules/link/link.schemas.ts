import { z } from "zod";

export const linkSchema = z
	.object({
		id: z.uuid().nonempty(),
		title: z.string().min(2).max(255).nonempty(),
		url: z.url().nonempty(),
		index: z.number().nonoptional(),
		userId: z.uuid(),
	})
	.openapi("Link schema");

export const createLinkSchema = linkSchema
	.pick({
		title: true,
		url: true,
		index: true,
		userId: true,
	})
	.openapi("Create link schema");

export const updateLinkSchema = linkSchema
	.partial()
	.extend({ id: linkSchema.shape.id, userId: linkSchema.shape.userId })
	.strict()
	.openapi("Update link schema");

export const deleteLinkSchema = linkSchema
	.pick({ id: true, userId: true })
	.strict()
	.openapi("Delete link schema");

export const getLinksSchema = linkSchema.pick({ userId: true });

export const linkResponseSchema = linkSchema.omit({ userId: true });
