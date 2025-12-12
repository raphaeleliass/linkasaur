import type { Metadata } from "next";
import {
	Jersey_15,
	JetBrains_Mono,
	Noto_Serif,
	Poppins,
} from "next/font/google";
import "./index.css";
import Providers from "@/components/providers";

const jersey = Jersey_15({
	variable: "--font-jersey",
	subsets: ["latin"],
	weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});
const noto = Noto_Serif({
	variable: "--font-noto",
	subsets: ["latin"],
});
const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["300", "500", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "linkasaur",
	description: "linkasaur",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${jetbrainsMono.variable} ${noto.variable} ${poppins.variable} ${jersey.variable} antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
