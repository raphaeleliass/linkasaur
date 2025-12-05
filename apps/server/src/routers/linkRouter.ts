import { OpenAPIHono } from "@hono/zod-openapi";
import { db } from "@/db/db";
import { LinkController } from "@/modules/link/link.controller";
import { LinkRepository } from "@/modules/link/link.repository";
import { LinkService } from "@/modules/link/link.service";
import type { AppVariables } from "@/types/appVariables";
import {
	createLinkRoute,
	deleteLinkRoute,
	getLinksRoute,
	updateLinkRoute,
} from "./routerConfig/linkRouter.config";

export const linkRouter = new OpenAPIHono<AppVariables>();

const linkRepository = new LinkRepository(db);
const linkService = new LinkService(linkRepository);
const linkController = new LinkController(linkService);

linkRouter.openapi(getLinksRoute, linkController.getLinks);
linkRouter.openapi(createLinkRoute, linkController.createLink);
linkRouter.openapi(updateLinkRoute, linkController.updateLink);
linkRouter.openapi(deleteLinkRoute, linkController.deleteLink);
