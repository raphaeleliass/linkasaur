import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username } from "better-auth/plugins";
import { db } from "@/db/db";
import {
	accountTable,
	sessionTable,
	userTable,
	verificationTable,
} from "@/db/schema";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			user: userTable,
			session: sessionTable,
			verification: verificationTable,
			account: accountTable,
		},
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
