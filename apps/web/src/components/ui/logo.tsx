import type { HTMLAttributes, Ref } from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends HTMLAttributes<HTMLParagraphElement> {
	className?: string;
	ref?: Ref<HTMLParagraphElement>;
}

export default function Logo({ className, ref, ...props }: LogoProps) {
	return (
		<p
			className={cn("font-logo text-3xl text-primary", className)}
			ref={ref}
			{...props}
		>
			Linkasaur
		</p>
	);
}
