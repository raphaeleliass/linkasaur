import type { auth } from "@/lib/auth";

export type AppVariables = {
	Variables: {
		user: typeof auth.$Infer.Session.user | null;
		session: typeof auth.$Infer.Session.session | null;
	};
};
