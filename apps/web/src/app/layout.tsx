import type { Metadata } from "next";
import { Inter, Lexend, Roboto_Serif } from "next/font/google";
import "./global.css";
import Providers from "@/components/providers";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	variable: "--font-inter",
	preload: true,
});
const lexend = Lexend({
	subsets: ["latin", "latin-ext"],
	variable: "--font-lexend",
	preload: true,
});
const robotoSerif = Roboto_Serif({
	subsets: ["latin", "latin-ext"],
	variable: "--font-roboto-serif",
	preload: true,
});

export const metadata: Metadata = {
	title: "linkasaur",
	description:
		"Welcome to linkasaur, your link management solution. Create, organize, and share your links with ease. Join us today!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${lexend.variable} ${robotoSerif.variable} ${inter.variable} antialiased`}
			>
				<Providers>
					<div className="grid h-svh grid-rows-[auto_1fr]">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
