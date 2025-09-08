import clsx from "clsx";
import type { HTMLAttributes, ReactNode, Ref } from "react";

interface BaseProps<T extends HTMLElement> extends HTMLAttributes<T> {
	className?: string;
	ref?: Ref<T>;
	children?: ReactNode;
}

export const FeatureCard = ({
	className,
	ref,
	children,
	...props
}: BaseProps<HTMLDivElement>) => (
	<div
		className={clsx("rounded-2xl border bg-secondary shadow-xl", className)}
		{...props}
	>
		{children}
	</div>
);

export const FeatureCardContent = ({
	className,
	ref,
	...props
}: BaseProps<HTMLDivElement>) => (
	<div className={clsx("p-5", className)} ref={ref} {...props} />
);

export const FeatureCardTitle = ({
	className,
	ref,
	...props
}: BaseProps<HTMLHeadingElement>) => (
	<h2 className={clsx("text-primary text-xl", className)} {...props} />
);

export const FeatureCardDescription = ({
	className,
	ref,
	...props
}: BaseProps<HTMLParagraphElement>) => (
	<div
		className={clsx("text-muted-foreground text-sm", className)}
		ref={ref}
		{...props}
	/>
);
