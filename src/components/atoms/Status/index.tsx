import { twMerge } from "tailwind-merge";
import { Typography } from "../Typography";
import { toTitle } from "../../../utils/toTitle";

export type TStatusProperties = {
	className?: string;
	variant: "completed" | "running" | "failed";
};

const styles = {
	container: {
		completed: "bg-background-extensions-background-green ",
		running: "bg-background-extensions-background-blue",
		failed: "bg-background-extensions-background-red",
	},
	label: {
		completed: "text-extensions-content-green",
		running: "text-extensions-content-blue",
		failed: "text-extensions-content-red",
	},
};

export const Status = ({ className, variant }: TStatusProperties) => {
	return (
		<div
			className={twMerge(
				className,
				"rounded-md px-1.5 py-1 text-sm w-fit",
				styles.container[variant],
			)}
		>
			<Typography
				className={styles.label[variant]}
				as="p"
				variant="code"
				visual="tiny"
			>
				{toTitle(variant)}
			</Typography>
		</div>
	);
};
