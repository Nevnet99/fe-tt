import { twMerge } from "tailwind-merge";
import { Typography } from "../Typography";

export type TStatusProperties = {
	variant: "completed" | "running";
};

const styles = {
	container: {
		completed: "bg-background-extensions-background-green ",
		running: "bg-background-extensions-background-blue",
	},
	label: {
		completed: "text-extensions-content-green",
		running: "text-extensions-content-blue",
	},
};

export const Status = ({ variant }: TStatusProperties) => {
	return (
		<div
			className={twMerge(
				"rounded-md px-1.5 py-1 text-sm",
				styles.container[variant],
			)}
		>
			<Typography
				className={styles.label[variant]}
				as="p"
				variant="code"
				visual="tiny"
			>
				{variant === "completed" ? "Completed" : "Running"}
			</Typography>
		</div>
	);
};
