import type { PrismaClient } from "prisma/generated/client";
import type { usernameTypes } from "./user.types";

export class UserRepository {
	prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getUserByUsername({ username }: usernameTypes) {
		const user = this.prisma.user.findUnique({
			where: { username },
			select: {
				image: true,
				name: true,
				displayUsername: true,
				links: { select: { id: true, title: true, href: true } },
			},
		});

		return user;
	}
}
