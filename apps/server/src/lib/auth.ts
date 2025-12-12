import "dotenv/config";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username } from "better-auth/plugins";
import { db } from "@/db/db";
import {
	accountTable,
	sessionTable,
	userTable,
	verificationTable,
} from "@/db/schemas/auth";

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
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: true,
	},
	plugins: [username()],
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
		session: {
			cookieCache: {
				enabled: true,
				maxAge: 5 * 60,
			},
		},
	},
});
