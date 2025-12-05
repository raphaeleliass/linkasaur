import type { z } from "zod";
import type {
	createLinkSchema,
	deleteLinkSchema,
	getLinksSchema,
	linkSchema,
	updateLinkSchema,
} from "./link.schemas";

export type linkType = z.infer<typeof linkSchema>;
export type createLinkType = z.infer<typeof createLinkSchema>;
export type updateLinkType = z.infer<typeof updateLinkSchema>;
export type deleteLinkType = z.infer<typeof deleteLinkSchema>;
export type getLinksType = z.infer<typeof getLinksSchema>;
