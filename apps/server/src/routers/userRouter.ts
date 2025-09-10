import { Hono } from "hono";
import { db } from "@/db/db";
import { UserController } from "@/modules/user/user.controller";
import { UserRepository } from "@/modules/user/user.repository";
import { UserService } from "@/modules/user/user.service";

export const userRouter = new Hono();

const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get("/:username", userController.getUserByUsername);
