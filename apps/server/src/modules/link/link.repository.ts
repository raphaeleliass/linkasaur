import { and, eq } from "drizzle-orm";
import type { db } from "@/db/db";
import { linkTable } from "@/db/schemas/link";
import type {
	createLinkType,
	deleteLinkType,
	getLinksType,
	updateLinkType,
} from "./link.types";

export type DrizzleDB = typeof db;

export class LinkRepository {
	db: DrizzleDB;

	constructor(db: DrizzleDB) {
		this.db = db;
	}

	getLinks = async ({ userId }: getLinksType) => {
		const links = await this.db
			.select({
				id: linkTable.id,
				title: linkTable.title,
				url: linkTable.url,
				index: linkTable.index,
				createdAt: linkTable.createdAt,
				updatedAt: linkTable.updatedAt,
			})
			.from(linkTable)
			.where(eq(linkTable.userId, userId));

		return links || null;
	};

	createLink = async ({ userId, title, url, index }: createLinkType) => {
		const [createdLink] = await this.db
			.insert(linkTable)
			.values({ title, url, index, userId })
			.returning();

		return createdLink || null;
	};

	updateLink = async ({ id, title, url, userId, index }: updateLinkType) => {
		const [updatedLink] = await this.db
			.update(linkTable)
			.set({ title, url, index })
			.where(and(eq(linkTable.userId, userId), eq(linkTable.id, id)))
			.returning();

		return updatedLink || null;
	};

	deleteLink = async ({ id, userId }: deleteLinkType) => {
		const [deletedLink] = await this.db
			.delete(linkTable)
			.where(and(eq(linkTable.id, id), eq(linkTable.userId, userId)))
			.returning();

		return deletedLink || null;
	};
}
