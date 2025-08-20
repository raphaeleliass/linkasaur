import type { Context } from "hono";
import type { AppVariables } from "types/appVariables";
import type { LinkService } from "./link.service";
import type {
	createLinkType,
	deleteLinkType,
	updateLinkType,
} from "./link.types";

export class LinkController {
	linkService: LinkService;

	constructor(linkService: LinkService) {
		this.linkService = linkService;

		this.createLink = this.createLink.bind(this);
		this.updatedLink = this.updatedLink.bind(this);
		this.deleteLink = this.deleteLink.bind(this);
	}

	async createLink(c: Context<AppVariables>) {
		const { title, href } = c.get("validatedData") as createLinkType;
		const user = c.get("user");

		if (!user) return;

		const createdLink = await this.linkService.createLink({
			userId: user.id,
			title,
			href,
		});

		return c.json(createdLink, 200);
	}

	async updatedLink(c: Context<AppVariables>) {
		const { id, title, href } = c.get("validatedData") as updateLinkType;
		const user = c.get("user");
		if (!user) return;

		const updatedLink = await this.linkService.updateLink(
			{ id, title, href },
			user.id,
		);

		return c.json(updatedLink, 200);
	}

	async deleteLink(c: Context<AppVariables>) {
		const id = c.get("validatedData") as deleteLinkType;
		const user = c.get("user");
		if (!user) return;
		const deletedLink = await this.linkService.deleteLink(id, user.id);

		return c.json(deletedLink, 200);
	}
}
