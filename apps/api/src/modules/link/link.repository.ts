import type { PrismaClient } from "prisma/generated/client";
import type {
	createLinkType,
	deleteLinkType,
	updateLinkType,
} from "./link.types";

export class LinkRepository {
	prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async createLink({
		userId,
		title,
		href,
	}: createLinkType & { userId: string }) {
		const createdLink = await this.prisma.link.create({
			data: { userId, title, href },
		});

		return createdLink;
	}

	async getLinkById({ id }: deleteLinkType) {
		const link = await this.prisma.link.findUnique({
			where: { id },
		});

		return link;
	}

	async updateLink({ id, title, href }: updateLinkType) {
		const updatedLink = await this.prisma.link.update({
			where: { id },
			data: { id, title, href },
		});

		return updatedLink;
	}

	async deleteLink({ id }: deleteLinkType) {
		const deletedLink = await this.prisma.link.delete({
			where: { id },
		});

		return deletedLink;
	}
}
