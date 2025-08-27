import { z } from "zod";

export const createLinkSchema = z.object({
	title: z.string().min(2, "Title must have 2 characters at least!"),
	href: z.url("Invalid URL!"),
});

export const updateLinkSchema = z.object({
	id: z.uuid("Invalid UUID!"),
	title: z.string().min(3, "Title must have 3 characters at least!"),
	href: z.url("Invalid URL!"),
});

export const deleteLinkSchema = z.object({
	id: z.uuid("Invalid UUID!"),
});
