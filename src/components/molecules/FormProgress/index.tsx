import { twMerge } from "tailwind-merge";
import { Typography } from "../../atoms/Typography";

export type TFormProgressProperties = {
	step: number;
	max: number;
	className?: string;
};

export const FormProgress = ({
	step,
	max,
	className,
}: TFormProgressProperties) => {
	return (
		<Typography
			className={twMerge(
				"bg-background-secondary border border-border-primary rounded-lg px-3",
				className,
			)}
			as="p"
			variant="code"
			visual="large"
		>
			{step} <span className="text-tertiary">of {max}</span>
		</Typography>
	);
};
