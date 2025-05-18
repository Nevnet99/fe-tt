import { useState } from "react";
import { FormField } from "../FormField";
import { Typography } from "../Typography";
import {
	type Control,
	Controller,
	type FieldValues,
	type Path,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

type TNumberInputProperties = {
	label: string;
	helper?: string;
	error?: string;
	id: string;
	errorId: string;
	onValueChange: (value: number) => void;
	defaultValue?: number;
	min?: number;
	max?: number;
	className?: string;
};

// Quick note: This is a quick implementation of a number input that is not fully
// accessible. If I was building for a11y here, I would have to hack around with the number input.
export const NumberInput = ({
	label,
	helper,
	error,
	id,
	errorId,
	onValueChange,
	defaultValue,
	min,
	max,
	className,
}: TNumberInputProperties) => {
	const [value, setValue] = useState(defaultValue || 1);

	const handleIncrement = () => {
		if (max && value >= max) {
			return;
		}
		setValue(value + 1);
		onValueChange(value + 1);
	};

	const handleDecrement = () => {
		if (min && value <= min) {
			return;
		}
		setValue(value - 1);
		onValueChange(value - 1);
	};

	return (
		<FormField
			label={label}
			helper={helper}
			error={error}
			inputId={id}
			errorId={errorId}
		>
			<div
				className={twMerge(
					className,
					"flex items-center gap-2 bg-background-tertiary rounded-lg max-w-[98px] py-2 border border-border-primary",
				)}
			>
				<button
					className="w-[40px] cursor-pointer"
					aria-label="Decrement"
					type="button"
					onClick={handleDecrement}
				>
					-
				</button>
				<Typography as="p" variant="code" visual="base" className="text-center">
					{value}
				</Typography>
				<button
					className="w-[40px] cursor-pointer"
					aria-label="Increment"
					type="button"
					onClick={handleIncrement}
				>
					+
				</button>
			</div>
		</FormField>
	);
};

type TRHFControllerNumberInputProperties<T extends FieldValues> = {
	label: string;
	id: string;
	errorId: string;
	control: Control<T>;
	name: Path<T>;
	error?: string;
	className?: string;
	helper?: string;
};

export const RHFControllerNumberInput = <T extends FieldValues>({
	label,
	id,
	errorId,
	control,
	name,
	error,
	helper,
}: TRHFControllerNumberInputProperties<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<NumberInput
					label={label}
					id={id}
					errorId={errorId}
					onValueChange={field.onChange}
					defaultValue={field.value}
					error={error}
					helper={helper}
				/>
			)}
		/>
	);
};
