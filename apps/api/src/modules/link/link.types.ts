import type { z } from "zod";
import type {
	createLinkSchema,
	deleteLinkSchema,
	updateLinkSchema,
} from "./link.schemas";

export type createLinkType = z.infer<typeof createLinkSchema>;
export type updateLinkType = z.infer<typeof updateLinkSchema>;
export type deleteLinkType = z.infer<typeof deleteLinkSchema>;
