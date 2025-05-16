"use client";

import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import { FormProgress } from "@/components/molecules/FormProgress";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type FineTuningFormProperties = {
	className?: string;
};

export const FineTuningForm = ({ className }: FineTuningFormProperties) => {
	const [stateStep, setStateStep] = useState(1);

	const handleStep = (step: number) => {
		setStateStep(step);
	};

	return (
		<form className={twMerge("relative", className)}>
			<Card.Container className="relative">
				<Card.Header>
					<Typography as="h2" variant="heading" visual="tiny">
						Setup your run
					</Typography>
				</Card.Header>
				<FormProgress
					className="absolute top-8 right-8"
					step={stateStep}
					max={3}
				/>
				{stateStep === 1 && (
					<>
						<label className="flex flex-col gap-2">
							Name your job
							<input type="text" placeholder="Job name" />
						</label>

						<label className="flex flex-col gap-2">
							Base model
							<select name="base-model" id="base-model">
								<option value="gpt-3.5-turbo">GPT-3.5-turbo</option>
								<option value="gpt-4">GPT-4</option>
								<option value="gpt-4o">GPT-4o</option>
							</select>
						</label>

						<Button
							variant="primary"
							className="w-full"
							onClick={() => handleStep(2)}
						>
							Next: Configure
						</Button>
					</>
				)}

				{stateStep === 2 && (
					<>
						<Button
							variant="primary"
							className="w-full"
							onClick={() => handleStep(3)}
						>
							Next: Review
						</Button>
					</>
				)}

				{stateStep === 3 && (
					<Link href="/">
						<Button as="span" variant="primary" className="w-full">
							Start fine tuning
						</Button>
					</Link>
				)}
			</Card.Container>
		</form>
	);
};
