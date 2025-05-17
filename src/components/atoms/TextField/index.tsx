import { FormField } from "../FormField";

type TTextFieldProperties = {
	label: string;
	helper?: string;
	error?: string;
	id: string;
	errorId: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
	label,
	helper,
	error,
	id,
	errorId,
	...props
}: TTextFieldProperties) => {
	return (
		<FormField
			label={label}
			helper={helper}
			error={error}
			inputId={id}
			errorId={errorId}
		>
			<input
				className="shadow-shadow-sm border border-border-primary rounded-md px-3 py-1.5 text-input"
				id={id}
				type="text"
				aria-describedby={errorId}
				{...props}
			/>
		</FormField>
	);
};
