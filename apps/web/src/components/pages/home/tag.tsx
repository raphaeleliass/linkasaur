import clsx from "clsx";
import type { ReactNode } from "react";

interface Props {
	className?: string;
	children: ReactNode;
}

export default function Tag({ className, children }: Props) {
	return (
		<p
			className={clsx(
				"z-40 flex flex-row items-center gap-2 rounded-full border border-green-500 bg-background px-2 py-1 text-primary text-xs drop-shadow-sm",
				className,
			)}
		>
			{children}
		</p>
	);
}
