import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
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
					<Button variant="ghost" as="span">
						Back
					</Button>
				</Link>
			) : (
				<Button variant="ghost" as="button" onClick={() => setStep(step - 1)}>
					Back
				</Button>
			)}
			<div>Wrench</div>
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
