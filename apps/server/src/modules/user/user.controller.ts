import type { Context } from "hono";
import type { AppVariables } from "@/types/appVariables";
import type { UserService } from "./user.service";

export class UserController {
	userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	getMe = async (c: Context<AppVariables>) => {
		const userId = c.get("userId");
		if (!userId) {
			return c.json({ error: "user not found" }, 404);
		}
		const me = await this.userService.getMe({ id: userId });

		return c.json(me);
	};

	getUser = async (c: Context<AppVariables>) => {
		const username = c.req.param("username");

		const user = await this.userService.getUser({ username });

		if (!user) {
			return c.json({ error: "user not found" }, 404);
		}

		return c.json(user);
	};
}
