"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { userStore } from "@/store/userStore";

export default function Page() {
	const { user, setUser } = userStore();
	return (
		<main className="">
			{user && (
				<Button
					variant={"destructive"}
					onClick={async () => {
						await authClient.signOut();
						setUser(null);
						redirect("/");
					}}
				>
					{" "}
					sair
				</Button>
			)}
		</main>
	);
}
