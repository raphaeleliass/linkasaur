import z from "zod";

export const usernameSchema = z.object({
	username: z
		.string()
		.nonempty("Field username cannot be empty!")
		.refine(
			(username) => !username.includes(" "),
			"Username cannot include spaces",
		),
});
