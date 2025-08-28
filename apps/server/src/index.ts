import "dotenv/config";
import { serve } from "@hono/node-server";
import { app } from "./app";

const PORT = process.env.PORT || 1000;

serve(
	{
		fetch: app.fetch,
		port: Number(PORT),
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
