import type { HTMLAttributes, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	ref?: Ref<HTMLDivElement>;
	children: ReactNode;
}

export default function Badge({
	className,
	children,
	ref,
	...props
}: ButtonProps) {
	return (
		<span
			className={cn(
				"inline-flex shrink-0 scale-90 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-green-500 bg-green-300/10 px-4 py-1 font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</span>
	);
}
