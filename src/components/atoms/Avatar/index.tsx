import { Typography } from "../Typography";

export type TAvatarProperties = {
	title: string;
};

// No need to test this component as it is a simple component that renders a Typography component

export const Avatar = ({ title }: TAvatarProperties) => (
	<Typography
		as="span"
		variant="heading"
		visual="large"
		className="flex items-center justify-center w-20 h-20 rounded-xl text-inverse-primary bg-background-inverse-primary border border-border-inverse-primary"
	>
		{title}
	</Typography>
);
