import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TCardProperties = PropsWithChildren<{
	padding?: boolean;
	type?: "default" | "form";
}> &
	React.HTMLAttributes<HTMLDivElement>;

export type TCardHeaderProperties = PropsWithChildren<{
	type?: "default" | "form";
}> &
	React.HTMLAttributes<HTMLDivElement>;

const Container = ({
	children,
	className,
	padding = true,
	type = "default",
	...props
}: TCardProperties) => {
	return (
		<article
			className={twMerge(
				"bg-background-primary border-1 border-border-primary rounded-xl overflow-hidden",
				padding && "px-6 pt-6 pb-8",
				type === "form" && "px-8 pt-8 pb-10",
				className,
			)}
			{...props}
		>
			{children}
		</article>
	);
};

const Header = ({
	children,
	className,
	type = "default",
	...props
}: TCardHeaderProperties) => {
	return (
		<header
			className={twMerge(
				"flex-col gap-0.5 mb-6",
				type === "form" && "mb-8",
				className,
			)}
			{...props}
		>
			{children}
		</header>
	);
};

export const Card = {
	Container,
	Header,
};
