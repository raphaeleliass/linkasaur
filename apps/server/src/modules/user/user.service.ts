import { HTTPException } from "hono/http-exception";
import type { UserRepository } from "./user.repository";
import type { usernameTypes } from "./user.types";

export class UserService {
	userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async getUserByUsername({ username }: usernameTypes) {
		const userData = await this.userRepository.getUserByUsername({ username });

		if (!userData.length)
			throw new HTTPException(404, { message: "User not found" }); // 404 em vez de 403

		const user = {
			name: userData[0].name,
			displayUsername: userData[0].displayUsername,
			image: userData[0].image,
			links: userData
				.filter((row) => row.linkId !== null)
				.map((row) => ({
					id: row.linkId,
					title: row.linkTitle,
					href: row.linkHref,
				})),
		};

		return { user }; // ou apenas return user, dependendo do padrão da sua API
	}
}
