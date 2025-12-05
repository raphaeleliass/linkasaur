import z from "zod";
import { linkSchema } from "../link/link.schemas";

export const userSchema = z
	.object({
		id: z.uuid(),
		name: z.string().nonempty(),
		email: z.email().nonempty(),
		emailVerified: z.boolean().default(false).nonoptional(),
		image: z.string().nullable(),
		createdAt: z.date().nonoptional(),
		updatedAt: z.date().nonoptional(),
		username: z
			.string()
			.refine(
				(username) => !username.includes(" "),
				"Username cannot include spaces",
			),
		displayUsername: z.string().nullable(),
		links: z.array(linkSchema),
	})
	.openapi("User schema");

export const getMeSchema = userSchema.pick({ id: true });

export const getUserSchema = userSchema
	.pick({ username: true })
	.openapi("Get user schema");

export const getUserResponseSchema = userSchema
	.pick({
		name: true,
		image: true,
		username: true,
		displayUsername: true,
		links: true,
	})
	.strict();
