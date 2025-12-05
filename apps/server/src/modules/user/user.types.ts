import type z from "zod";
import type { getMeSchema, getUserSchema, userSchema } from "./user.schemas";

export type TUser = z.infer<typeof userSchema>;
export type TGetMe = z.infer<typeof getMeSchema>;
export type TGetUser = z.infer<typeof getUserSchema>;
