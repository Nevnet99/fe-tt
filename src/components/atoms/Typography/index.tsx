import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type THeadingVariant = {
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
	variant?: "heading";
	visual?: "large" | "small" | "tiny";
} & React.HTMLAttributes<HTMLHeadingElement>;

// ? This is a span so we can keep Biome reporting the required props when using a label
// ? htmlFor etc. so when using the label variant please wrap it in a label if required.
type TLabelVariant = {
	as: "span";
	variant?: "label";
	visual?: "base" | "small";
} & React.HTMLAttributes<HTMLSpanElement>;

type TParagraphVariant = {
	as: "p";
	variant?: "paragraph";
	visual?: "small" | "base" | "tiny";
} & React.HTMLAttributes<HTMLParagraphElement>;

type TCodeVariant = {
	as: "p";
	variant?: "code";
	visual?: "small" | "tiny" | "large" | "base";
} & React.HTMLAttributes<
	HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
>;

export type TTypographyProperties = PropsWithChildren<
	THeadingVariant | TLabelVariant | TParagraphVariant | TCodeVariant
>;

const styles = {
	heading: {
		large: "text-4xl font-semibold leading-[40px] tracking-[-0.025em]",
		tiny: "text-xl font-medium leading-[28px] tracking-[-0.025em]",
		small: "text-2xl font-semibold leading-[32px] tracking-[-0.025em]",
	},
	label: {
		base: "text-md font-medium leading-[24px] tracking-[0]",
		small: "text-sm font-semibold leading-[20px] tracking-[0]",
	},
	paragraph: {
		small: "text-sm font-medium leading-[20px] tracking-[0]",
		base: "text-md font-medium leading-[24px] tracking-[0]",
		tiny: "text-xs font-medium leading-[16px] tracking-[0]",
	},
	code: {
		large: "text-lg font-mono leading-[28px] tracking-[0]",
		small: "text-sm font-mono leading-[20px] tracking-[0]",
		tiny: "text-xs font-mono leading-[12px] tracking-[0]",
		base: "text-md font-mono leading-[24px] tracking-[0]",
	},
} as const;

/**
 * @description This is a component that can be used to render a variety of different typography elements.
 *
 * @note When using the label variant please wrap it in a label if required.
 *
 * @example
 * <Typography as="h1" variant="heading" visual="large">
 * 	Hello World
 * </Typography>
 *
 * @returns {React.ReactNode} The rendered component.
 */
export const Typography = ({
	as,
	children,
	className,
	variant = "paragraph",
	visual = "base",
	...props
}: TTypographyProperties) => {
	const Component = as;

	const resolvedClass =
		styles[variant][visual as keyof (typeof styles)[typeof variant]];

	return (
		<Component className={twMerge(resolvedClass, className)} {...props}>
			{children}
		</Component>
	);
};
