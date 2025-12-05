import { OpenAPIHono } from "@hono/zod-openapi";
import { db } from "@/db/db";
import { UserController } from "@/modules/user/user.controller";
import { UserRepository } from "@/modules/user/user.repository";
import { UserService } from "@/modules/user/user.service";
import type { AppVariables } from "@/types/appVariables";
import { getMeRoute, getUserRoute } from "./routerConfig/userRouter.config";

export const userRouter = new OpenAPIHono<AppVariables>();

const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.openapi(getUserRoute, userController.getUser);
userRouter.openapi(getMeRoute, userController.getMe);
