import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../Typography";

export type TButtonProperties = PropsWithChildren<{
	as?: "button" | "span";
	variant: "primary" | "ghost";
	onlyIcon?: boolean;
	fill?: boolean;
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
	base: "cursor-pointer ",
	primary:
		"text-inverse-primary bg-background-inverse-primary border border-border-inverse-primary rounded-lg px-2.5 py-1.5 disabled:opacity-50 min-w-[220px]",
	ghost: "",
};

const onlyIconStyles = "flex items-center justify-center w-6 h-6";

export const Button = ({
	as = "button",
	children,
	variant,
	onlyIcon,
	className,
	fill = false,
	...props
}: TButtonProperties) => {
	const Component = as;

	return (
		<Component
			className={twMerge(
				fill && "w-full",
				styles.base,
				styles[variant],
				onlyIcon && onlyIconStyles,
				className,
			)}
			{...props}
		>
			<Typography as="span" variant="label" visual="small">
				{children}
			</Typography>
		</Component>
	);
};
