import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";
import prisma from "../../prisma";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: true,
	},

	advanced: {
		cookiePrefix: "linkasaur",
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			partitioned: true,
		},
		cookies: {
			sessionToken: {
				attributes: {
					sameSite: "none",
					secure: true,
					partitioned: true,
				},
			},
		},
	},
	plugins: [username()],
});
