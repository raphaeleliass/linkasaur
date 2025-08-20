import { HTTPException } from "hono/http-exception";
import type { LinkRepository } from "./link.repository";
import type {
	createLinkType,
	deleteLinkType,
	updateLinkType,
} from "./link.types";

export class LinkService {
	linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	async createLink(data: createLinkType & { userId: string }) {
		const createdLink = await this.linkRepository.createLink(data);

		return createdLink;
	}

	async updateLink({ id, title, href }: updateLinkType, userId: string) {
		const link = await this.linkRepository.getLinkById({ id });

		if (!link) {
			throw new HTTPException(404, { message: "Link not found" });
		}

		if (link.userId !== userId) {
			throw new HTTPException(403, { message: "Forbidden" });
		}

		const updatedLink = await this.linkRepository.updateLink({
			id,
			title,
			href,
		});

		return updatedLink;
	}

	async deleteLink({ id }: deleteLinkType, userId: string) {
		const link = await this.linkRepository.getLinkById({ id });

		if (!link) {
			throw new HTTPException(404, { message: "Link not found" });
		}

		if (link.userId !== userId) {
			throw new HTTPException(403, { message: "Forbidden" });
		}

		const deletedLink = await this.linkRepository.deleteLink({ id });

		return deletedLink;
	}
}
