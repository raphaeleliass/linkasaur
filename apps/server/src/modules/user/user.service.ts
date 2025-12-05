import { HTTPException } from "hono/http-exception";
import type { UserRepository } from "./user.repository";
import type { TGetMe, TGetUser } from "./user.types";

export class UserService {
	userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	getMe = async ({ id }: TGetMe) => {
		if (!id) throw new HTTPException(400, { message: "Missing id" });

		const me = await this.userRepository.getMe({ id });

		if (!me)
			throw new HTTPException(404, { message: "User not found or not exists" });

		return me;
	};

	getUser = async ({ username }: TGetUser) => {
		if (!username)
			throw new HTTPException(400, { message: "Missing username" });

		const user = await this.userRepository.getUser({ username });

		if (!user)
			throw new HTTPException(404, { message: "User not found or not exists" });

		return user;
	};
}
