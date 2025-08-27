import type { Context } from "hono";
import type { UserService } from "./user.service";
import type { usernameTypes } from "./user.types";

export class UserController {
	userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;

		this.getUserByUsername = this.getUserByUsername.bind(this);
	}

	async getUserByUsername(c: Context) {
		const username: usernameTypes = c.req.param() as usernameTypes;
		const user = await this.userService.getUserByUsername(username);

		return c.json(user);
	}
}
