import { Typography } from "@/components/atoms/Typography";

export const ErrorNotice = ({ message }: { message?: string }) => {
	if (!message) return null;
	return (
		<div className="bg-background-extensions-background-red rounded-lg p-4 my-4 w-2/5">
			<Typography
				className="text-extensions-content-red"
				as="p"
				variant="paragraph"
				visual="small"
			>
				{message}
			</Typography>
		</div>
	);
};
