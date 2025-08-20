import type z from "zod";
import type { usernameSchema } from "./user.schemas";

export type usernameTypes = z.infer<typeof usernameSchema>;
