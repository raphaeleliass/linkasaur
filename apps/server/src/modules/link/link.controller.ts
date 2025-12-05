import type { Context } from "hono";
import type { AppVariables } from "@/types/appVariables";
import type { LinkService } from "./link.service";

export type HonoVariables = Context<AppVariables>;

export class LinkController {
	linkService: LinkService;

	constructor(linkService: LinkService) {
		this.linkService = linkService;
	}

	getLinks = async (c: HonoVariables) => {
		const userId = c.get("userId") || "";

		const links = await this.linkService.getLinks({ userId });

		return c.json(links);
	};

	createLink = async (c: HonoVariables) => {
		const userId = c.get("userId") || "";
		const { title, url, index } = await c.req.json();

		const createdLink = await this.linkService.createLink({
			title,
			url,
			index,
			userId,
		});

		return c.json(createdLink, 200);
	};

	updateLink = async (c: HonoVariables) => {
		const userId = c.get("userId") || "";
		const { id, title, url, index } = await c.req.json();

		const updatedLink = await this.linkService.updateLink({
			id,
			title,
			url,
			index,
			userId,
		});

		return c.json(updatedLink, 200);
	};

	deleteLink = async (c: HonoVariables) => {
		const userId = c.get("userId") || "";
		const id = c.req.query("id") || "";

		const deletedLink = await this.linkService.updateLink({
			id,
			userId,
		});

		return c.json(deletedLink, 200);
	};
}
