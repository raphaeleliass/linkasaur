import { eq } from "drizzle-orm";
import type { db } from "@/db/db";
import { linkTable } from "@/db/schema";
import type {
	createLinkType,
	deleteLinkType,
	updateLinkType,
} from "./link.types";

export type DrizzleDB = typeof db;

export class LinkRepository {
	db: DrizzleDB;

	constructor(db: DrizzleDB) {
		this.db = db;
	}

	async createLink({
		userId,
		title,
		href,
	}: createLinkType & { userId: string }) {
		const createdLink = await this.db
			.insert(linkTable)
			.values({ title, href, userId })
			.returning();

		return createdLink;
	}

	async getLinkById({ id }: deleteLinkType) {
		const link = await this.db
			.select()
			.from(linkTable)
			.where(eq(linkTable.id, id));

		return link[0];
	}

	async updateLink({ id, title, href }: updateLinkType) {
		const updatedLink = await this.db
			.update(linkTable)
			.set({ title, href })
			.where(eq(linkTable.id, id))
			.returning();

		return updatedLink;
	}

	async deleteLink({ id }: deleteLinkType) {
		const deletedLink = await this.db
			.delete(linkTable)
			.where(eq(linkTable.id, id))
			.returning();

		return deletedLink;
	}
}
