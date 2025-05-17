import { FormField } from "../FormField";

type TSelectProperties = {
	label: string;
	helper?: string;
	error?: string;
	id: string;
	errorId: string;
	options: { value: string; label: string }[];
	isLoading?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
	label,
	helper,
	error,
	id,
	errorId,
	options,
	isLoading,
	...props
}: TSelectProperties) => {
	return (
		<FormField
			label={label}
			helper={helper}
			error={error}
			inputId={id}
			errorId={errorId}
		>
			{isLoading ? (
				<div className="w-full h-10 bg-gray-200 rounded-md animate-pulse" />
			) : (
				<select
					className="shadow-shadow-sm border border-border-primary rounded-md px-3 py-2 text-input"
					id={id}
					aria-describedby={errorId}
					{...props}
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			)}
		</FormField>
	);
};
