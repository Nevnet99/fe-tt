import { Typography } from "../../atoms/Typography";

export type TFormProgressProperties = {
	step: number;
	max: number;
};

export const FormProgress = ({ step, max }: TFormProgressProperties) => {
	return (
		<Typography
			className="bg-background-secondary border border-border-primary rounded-lg px-3"
			as="p"
			variant="code"
			visual="large"
		>
			{step} <span className="text-tertiary">of {max}</span>
		</Typography>
	);
};
