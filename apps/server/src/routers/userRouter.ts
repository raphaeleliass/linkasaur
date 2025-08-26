import { Hono } from "hono";
import { cache } from "hono/cache";
import { UserController } from "@/modules/user/user.controller";
import { UserRepository } from "@/modules/user/user.repository";
import { UserService } from "@/modules/user/user.service";
import prisma from "../../prisma/index";

export const userRouter = new Hono();

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get(
	"/:username",
	userController.getUserByUsername,
	cache({ cacheName: "Linkasaur", cacheControl: "max-age=3600", wait: true }),
);
