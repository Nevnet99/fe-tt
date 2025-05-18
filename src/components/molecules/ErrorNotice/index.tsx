import { Typography } from "@/components/atoms/Typography";
import { twMerge } from "tailwind-merge";
export const ErrorNotice = ({
	className,
	message,
}: {
	className?: string;
	message?: string;
}) => {
	if (!message) return null;
	return (
		<div
			className={twMerge(
				"bg-background-extensions-background-red rounded-lg p-4 my-4",
				className,
			)}
		>
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
