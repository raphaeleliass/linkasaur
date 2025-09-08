"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
	const headerRef = useRef<HTMLHeadElement>(null);
	const [isAuth, setIsAuth] = useState<{
		status: boolean;
		name: string | null;
	}>({ status: false, name: null });

	useEffect(() => {
		async function getSession() {
			const session = await authClient.getSession();

			if (!session.data?.session.token)
				return setIsAuth({
					status: false,
					name: null,
				});

			setIsAuth({ status: true, name: session.data?.user.username as string });
		}

		getSession();
	}, []);

	useGSAP(() => {
		if (!headerRef.current) return;

		gsap.to(
			headerRef.current,

			{ opacity: 1, delay: 1.5 },
		);
	}, []);

	const AuthButtons = isAuth.status ? (
		<Link href={"/dashboard"}>
			<Button>Dashboard</Button>
		</Link>
	) : (
		<div className="flex flex-row items-center gap-1">
			<Link href={"/signup"}>
				<Button size={"sm"} variant={"ghost"}>
					cadastre-se
				</Button>
			</Link>
			<Link href={"/signin"}>
				<Button size={"sm"} variant={"default"}>
					Entrar
				</Button>
			</Link>
		</div>
	);

	return (
		<header
			className="sticky top-4 right-0 left-0 z-50 mx-auto flex w-6xl flex-row items-center gap-4 rounded-full bg-background/70 px-8 py-2 opacity-0 shadow-2xl backdrop-blur-xl max-sm:max-w-sm max-sm:px-4 dark:border"
			ref={headerRef}
		>
			<Link href={"/"} className="font-bold font-lexend text-xl">
				Linkasaur
			</Link>
			<nav className="flex w-full flex-row items-center justify-between">
				<Link href={"/pricing"} className="max-sm:hidden">
					<Button variant={"link"}>Pricing</Button>
				</Link>

				<ul className="flex flex-row items-center gap-1 max-sm:ml-auto">
					<li>{AuthButtons}</li>
					<li className="max-sm:hidden">
						<AnimatedThemeToggler variant="secondary" size="sm" />
					</li>
					<li className="md:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant={"secondary"} size={"sm"}>
									<Menu />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>
									<AnimatedThemeToggler variant="outline" className="w-full" />
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Link href={"/pricing"}>
										<Button variant={"ghost"}>Pricing</Button>
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</li>
				</ul>
			</nav>
		</header>
	);
}
