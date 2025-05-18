import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TCardProperties = PropsWithChildren<{
	padding?: boolean;
}> &
	React.HTMLAttributes<HTMLDivElement>;

const Container = ({
	children,
	className,
	padding = true,
	...props
}: TCardProperties) => {
	return (
		<article
			className={twMerge(
				"bg-background-primary border-1 border-border-primary rounded-xl",
				padding && "px-6 pt-6 pb-8",
				className,
			)}
			{...props}
		>
			{children}
		</article>
	);
};

const Header = ({ children, className, ...props }: TCardProperties) => {
	return (
		<header className={twMerge("flex-col gap-0.5 mb-6", className)} {...props}>
			{children}
		</header>
	);
};

export const Card = {
	Container,
	Header,
};
