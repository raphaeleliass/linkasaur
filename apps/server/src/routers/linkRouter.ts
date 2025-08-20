import { Hono } from "hono";
import type { AppVariables } from "types/appVariables";
import { validateMiddleware } from "@/middlewares/validate.middleware";
import { LinkController } from "@/modules/link/link.controller";
import { LinkRepository } from "@/modules/link/link.repository";
import {
	createLinkSchema,
	deleteLinkSchema,
	updateLinkSchema,
} from "@/modules/link/link.schemas";
import { LinkService } from "@/modules/link/link.service";
import prisma from "../../prisma/index";

export const linkRouter = new Hono<AppVariables>();

const linkRepository = new LinkRepository(prisma);
const linkService = new LinkService(linkRepository);
const linkController = new LinkController(linkService);

linkRouter.post(
	"/create",
	validateMiddleware(createLinkSchema, "json"),
	linkController.createLink,
);
linkRouter.patch(
	"/update",
	validateMiddleware(updateLinkSchema, "json"),
	linkController.updatedLink,
);
linkRouter.delete(
	"/delete",
	validateMiddleware(deleteLinkSchema, "query"),
	linkController.deleteLink,
);
