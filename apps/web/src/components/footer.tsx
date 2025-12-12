import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const links = [
	{
		title: "Features",
		href: "/#features",
	},
	{
		title: "Pricing",
		href: "/#pricing",
	},
	{
		title: "About",
		href: "/#about",
	},
];

export default function FooterSection() {
	return (
		<footer className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<Link
					href="/"
					aria-label="go home"
					className="mx-auto block size-fit"
				/>

				<div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
					{links.map((link) => (
						<Link
							key={link.title}
							href={link.href}
							className="block text-muted-foreground duration-150 hover:text-primary"
						>
							<span>{link.title}</span>
						</Link>
					))}
				</div>
				<div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
					<Link
						href="https://github.com/raphaeleliass/linkasaur"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="TikTok"
						className="block text-muted-foreground hover:text-primary"
					>
						<SiGithub />
					</Link>
				</div>
				<span className="block text-center text-muted-foreground text-sm">
					{" "}
					© {new Date().getFullYear()} Linkasaur, All rights reserved
				</span>
			</div>
		</footer>
	);
}
