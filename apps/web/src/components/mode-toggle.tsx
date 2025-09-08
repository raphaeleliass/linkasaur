"use client";

import clsx from "clsx";
import { Eclipse } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<Button
			className={clsx("", className)}
			title="Toggle theme"
			onClick={toggleTheme}
			size={"sm"}
			variant={"secondary"}
		>
			<Eclipse />
		</Button>
	);
}
