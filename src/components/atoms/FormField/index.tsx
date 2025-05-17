import { Typography } from "../Typography";

type TFormFieldProperties = {
	inputId: string;
	label: string;
	errorId: string;
	children: React.ReactNode;
	error?: string;
	helper?: string;
};

export const FormField = ({
	inputId,
	errorId,
	label,
	children,
	error,
	helper,
}: TFormFieldProperties) => {
	return (
		<div className="flex flex-col gap-3">
			<label htmlFor={inputId}>
				<Typography as="span" variant="label" visual="small">
					{label}
				</Typography>
			</label>
			{children}
			<div>
				{helper && (
					<Typography
						className="text-tertiary"
						as="p"
						variant="paragraph"
						visual="tiny"
					>
						{helper}
					</Typography>
				)}
				{error && (
					<Typography
						className="text-extensions-content-red"
						as="p"
						variant="paragraph"
						visual="tiny"
					>
						{error}
					</Typography>
				)}
			</div>
		</div>
	);
};
