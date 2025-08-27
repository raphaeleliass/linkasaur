import { HTTPException } from "hono/http-exception";
import type { UserRepository } from "./user.repository";
import type { usernameTypes } from "./user.types";

export class UserService {
	userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async getUserByUsername({ username }: usernameTypes) {
		const user = await this.userRepository.getUserByUsername({ username });

		if (!user) throw new HTTPException(403, { message: "Cannot find user" });

		return user;
	}
}
