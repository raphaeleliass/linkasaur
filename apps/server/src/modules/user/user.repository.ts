import { eq } from "drizzle-orm";
import { linkTable, userTable } from "@/db/schema";
import type { DrizzleDB } from "../link/link.repository";
import type { usernameTypes } from "./user.types";

export class UserRepository {
	db: DrizzleDB;

	constructor(db: DrizzleDB) {
		this.db = db;
	}

	async getUserByUsername({ username }: usernameTypes) {
		const user = await this.db
			.select({
				name: userTable.name,
				displayUsername: userTable.displayUsername,
				image: userTable.image,
				linkId: linkTable.id,
				linkTitle: linkTable.title,
				linkHref: linkTable.href,
			})
			.from(userTable)
			.leftJoin(linkTable, eq(linkTable.userId, userTable.id))
			.where(eq(userTable.username, username));

		return user;
	}
}
