"use client";

import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import { FormHeader } from "@/components/molecules/FormHeader";
import { FormProgress } from "@/components/molecules/FormProgress";
import { useJobs } from "@/services/useJobs";
import { useModels } from "@/services/useModels";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

type FineTuningFormProperties = {
	className?: string;
};

const stepTitle = (step: number) => {
	switch (step) {
		case 1:
			return {
				title: "Setup your run",
			};
		case 2:
			return {
				title: "Configure your run",
			};
		case 3:
			return {
				title: "Review your job",
				description:
					"Adjust these parameters to control how your model learns, balances performance, and prevents overfitting during fine-tuning. See the docs for guidance on setting these parameters for optimal fine-tuning.",
			};
		default:
			return {
				title: "Setup your run",
			};
	}
};

const formSchema = z
	.object({
		name: z.string().min(1, { message: "Name is required" }),
		baseModel: z.string().min(1, { message: "Base model is required" }),
		epochs: z.number().min(1, { message: "Epochs must be at least 1" }),
		warmupEpochs: z
			.number()
			.min(1, { message: "Warmup epochs must be at least 1" }),
		evaluationEpochs: z
			.number()
			.min(1, { message: "Evaluation epochs must be at least 1" }),
		learningRate: z
			.number()
			.min(0, { message: "Learning rate must be ≥ 0" })
			.max(1, { message: "Learning rate must be ≤ 1" }),
	})
	.refine((data) => data.warmupEpochs + data.evaluationEpochs <= data.epochs, {
		message:
			"Sum of warmupEpochs and evaluationEpochs must not exceed total epochs.",
		path: ["evaluationEpochs"],
	});

export const FineTuningForm = ({ className }: FineTuningFormProperties) => {
	const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>();
	const {
		createJob: { mutate: createJob },
	} = useJobs({});

	const {
		models: { data: models },
	} = useModels({ fetchOnInit: true });

	const [stateStep, setStateStep] = useState(1);

	const handleStep = (step: number) => {
		setStateStep(step);
	};

	const { title, description } = stepTitle(stateStep);

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);

		createJob({
			name: values.name,
			baseModel: values.baseModel,
			epochs: values.epochs,
			evaluationEpochs: values.evaluationEpochs,
			learningRate: values.learningRate,
			warmupEpochs: values.warmupEpochs,
		});

		redirect("/");
	};

	return (
		<form
			className={twMerge("relative", className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormHeader
				label="Fine-tune a model"
				subtitle="Fine-tuning"
				setStep={setStateStep}
				step={stateStep}
			/>
			<Card.Container className="relative">
				<Card.Header>
					<Typography as="h2" variant="heading" visual="tiny">
						{title}
					</Typography>
					<Typography
						className="text-tertiary"
						as="p"
						variant="paragraph"
						visual="small"
					>
						{description}
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
							<input type="text" placeholder="Job name" {...register("name")} />
						</label>

						<label className="flex flex-col gap-2">
							Base model
							<select id="base-model" {...register("baseModel")}>
								{models?.data?.map((model) => (
									<option key={model.id} value={model.id}>
										{model.displayName}
									</option>
								))}
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
						<label className="flex flex-col gap-2">
							Epochs
							<input
								type="number"
								{...register("epochs", {
									valueAsNumber: true,
								})}
							/>
						</label>

						<label className="flex flex-col gap-2">
							Warmup epochs
							<input
								type="number"
								{...register("warmupEpochs", {
									valueAsNumber: true,
								})}
							/>
						</label>

						<label className="flex flex-col gap-2">
							Evaluation epochs
							<input
								type="number"
								{...register("evaluationEpochs", {
									valueAsNumber: true,
								})}
							/>
						</label>

						<label className="flex flex-col gap-2">
							Learning rate
							<input
								type="number"
								{...register("learningRate", {
									valueAsNumber: true,
								})}
							/>
						</label>

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
					<Button variant="primary" className="w-full" type="submit">
						Start fine tuning
					</Button>
				)}
			</Card.Container>
		</form>
	);
};
