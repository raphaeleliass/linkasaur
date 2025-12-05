import { eq } from "drizzle-orm";
import { userTable } from "@/db/schemas/auth";
import type { DrizzleDB } from "../link/link.repository";
import type { TGetMe, TGetUser } from "./user.types";

export class UserRepository {
	db: DrizzleDB;

	constructor(db: DrizzleDB) {
		this.db = db;
	}

	getMe = async ({ id }: TGetMe) => {
		const me = await this.db.query.userTable.findFirst({
			where: eq(userTable.id, id),
			with: {
				links: true,
			},
		});

		return me || null;
	};

	getUser = async ({ username }: TGetUser) => {
		const user = await this.db.query.userTable.findFirst({
			where: eq(userTable.username, username),
			columns: {
				id: false,
				email: false,
				emailVerified: false,
				createdAt: false,
				updatedAt: false,
			},
			with: {
				links: true,
			},
		});

		return user || null;
	};
}
