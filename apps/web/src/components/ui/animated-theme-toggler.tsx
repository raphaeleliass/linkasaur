"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "./button";

type Props = {
	className?: string;
	size?: "sm" | "icon" | "lg" | "default";
	variant?:
		| "secondary"
		| "outline"
		| "ghost"
		| "link"
		| "destructive"
		| "default";
};

export const AnimatedThemeToggler = ({
	className,
	size = "default",
	variant = "default",
}: Props) => {
	const { theme, setTheme } = useTheme();
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const changeTheme = async () => {
		if (!buttonRef.current) return;

		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(theme === "light" ? "dark" : "light");
			});
		}).ready;

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect();
		const y = top + height / 2;
		const x = left + width / 2;

		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRad}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 700,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		);
	};

	return (
		<Button
			variant={variant}
			size={size}
			ref={buttonRef}
			onClick={changeTheme}
			className={cn(className)}
		>
			{!mounted ? null : theme === "light" ? <Sun /> : <Moon />}
		</Button>
	);
};
