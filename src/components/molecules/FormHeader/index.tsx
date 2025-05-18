import { Button } from "../../atoms/Button";
import { Typography } from "../../atoms/Typography";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { ColourWrench } from "../../icons/ColourWrench";
import Link from "next/link";
import React from "react";

export type TFormHeaderProperties = {
	label: string;
	subtitle: string;
	setStep: (step: number) => void;
	step: number;
};

export const FormHeader = ({
	label,
	subtitle,
	setStep,
	step,
}: TFormHeaderProperties) => {
	return (
		<header className="flex items-center gap-4 mb-18">
			{step === 1 ? (
				<Link href="/">
					<Button aria-label="Back to home" variant="ghost" as="span">
						<ArrowLeft />
					</Button>
				</Link>
			) : (
				<Button
					aria-label="Back"
					type="button"
					variant="ghost"
					as="button"
					onClick={() => setStep(step - 1)}
				>
					<ArrowLeft />
				</Button>
			)}
			<div className="flex items-center justify-center border border-border-primary rounded-lg p-2">
				<ColourWrench />
			</div>
			<div>
				<Typography
					className="text-tertiary"
					as="p"
					variant="code"
					visual="tiny"
				>
					{subtitle}
				</Typography>
				<Typography as="h1" variant="heading" visual="large">
					{label}
				</Typography>
			</div>
		</header>
	);
};
