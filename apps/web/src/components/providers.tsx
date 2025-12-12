"use client";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { userStore } from "@/store/userStore";
import FooterSection from "./footer";
import Header from "./header";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
	const { setUser } = userStore();

	// biome-ignore lint: not necessary add setUser to array of dependencies
	useEffect(() => {
		(async () => {
			const { data } = await authClient.getSession();

			if (!data) {
				setUser(null);
				return;
			}

			setUser(data.user);
		})();
	}, []);

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<Header />
			{children}
			<Toaster richColors />
			<FooterSection />
		</ThemeProvider>
	);
}
