import "dotenv/config";
import { serve } from "@hono/node-server";
import { app } from "./app";

serve(
	{
		fetch: app.fetch,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
