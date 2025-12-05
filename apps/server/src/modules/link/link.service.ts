import { HTTPException } from "hono/http-exception";
import type { LinkRepository } from "./link.repository";
import type {
	createLinkType,
	deleteLinkType,
	getLinksType,
	updateLinkType,
} from "./link.types";

export class LinkService {
	linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	getLinks = async ({ userId }: getLinksType) => {
		if (!userId) throw new HTTPException(400, { message: "Missing userId" });

		const links = await this.linkRepository.getLinks({ userId });

		if (!links)
			throw new HTTPException(404, {
				message: "Links not found or not exists",
			});

		return links;
	};

	createLink = async ({ index, title, url, userId }: createLinkType) => {
		if (!index) throw new HTTPException(400, { message: "Missing index" });
		if (!title) throw new HTTPException(400, { message: "Missing title" });
		if (!url) throw new HTTPException(400, { message: "Missing url" });
		if (!userId) throw new HTTPException(400, { message: "Missing userId" });

		const createdLink = await this.linkRepository.createLink({
			index,
			title,
			url,
			userId,
		});

		if (!createdLink)
			throw new HTTPException(500, {
				message: "Failed to create link",
			});

		return createdLink;
	};

	updateLink = async ({ id, userId, index, title, url }: updateLinkType) => {
		if (!id) throw new HTTPException(400, { message: "Missing id" });
		if (!index) throw new HTTPException(400, { message: "Missing index" });
		if (!title) throw new HTTPException(400, { message: "Missing title" });
		if (!url) throw new HTTPException(400, { message: "Missing url" });
		if (!userId) throw new HTTPException(400, { message: "Missing userId" });

		const updatedLink = await this.linkRepository.updateLink({
			id,
			index,
			title,
			url,
			userId,
		});

		if (!updatedLink)
			throw new HTTPException(404, {
				message: "Link not found or access denied",
			});

		return updatedLink;
	};

	deleteLink = async ({ id, userId }: deleteLinkType) => {
		if (!id) throw new HTTPException(400, { message: "Missing id" });
		if (!userId) throw new HTTPException(400, { message: "Missing userId" });

		const deletedLink = await this.linkRepository.deleteLink({ id, userId });

		if (!deletedLink)
			throw new HTTPException(404, {
				message: "Link not found or access denied",
			});

		return deletedLink;
	};
}
