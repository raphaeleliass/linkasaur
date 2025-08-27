import { linkRouter } from "./linkRouter";
import { userRouter } from "./userRouter";

export const appRouter = {
	linkRouter,
	userRouter,
};
export type AppRouter = typeof appRouter;
