"use client";

import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { RHFControllerNumberInput } from "@/components/atoms/NumberInput";
import { Select } from "@/components/atoms/Select";
import { TextField } from "@/components/atoms/TextField";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { ReviewCard } from "@/components/molecules/ReviewCard";
import { ErrorNotice } from "@/components/molecules/ErrorNotice";

type FineTuningFormProperties = {
	className?: string;
};

const stepTitle = (step: number) => {
	switch (step) {
		case 1:
			return {
				title: "Set up your run",
			};
		case 2:
			return {
				title: "Configure your run",
				description:
					"Adjust these parameters to control how your model learns, balances performance, and prevents overfitting during fine-tuning. See the docs for guidance on setting these parameters for optimal fine-tuning.",
			};
		case 3:
			return {
				title: "Review your job",
			};
		default:
			return {
				title: "Set up your run",
			};
	}
};

const formSchema = z
	.object({
		name: z
			.string()
			.min(1, { message: "Name is required" })
			.regex(/^[a-z0-9-]+$/, {
				message: "Can only contain lowercase letters, numbers, and dashes.",
			}),
		baseModel: z
			.string()
			.min(1, { message: "Base model is required" })
			.refine((value) => value !== "placeholder", {
				message: "Base model is required",
			}),
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
		epochTotalError: z.string().optional(),
	})
	.refine((data) => data.warmupEpochs + data.evaluationEpochs <= data.epochs, {
		message:
			"Sum of warmupEpochs and evaluationEpochs must not exceed total epochs.",
		path: ["epochTotalError"],
	});

export const FineTuningForm = ({ className }: FineTuningFormProperties) => {
	const {
		createJob: { mutate: createJob },
	} = useJobs({});
	const {
		models: { data: models, isLoading: isModelsLoading },
	} = useModels({ fetchOnInit: true });

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		trigger,
		getValues,
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			baseModel: "placeholder",
			epochs: 6,
			warmupEpochs: 2,
			evaluationEpochs: 2,
			learningRate: 0.00002,
		},
		mode: "all",
	});

	const [stateStep, setStateStep] = useState(1);
	const { title, description } = stepTitle(stateStep);

	const handleStep = async (step: number) => {
		const isValid = await trigger();

		if (isValid) {
			setStateStep(step);
		}
	};

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

	const values = getValues();

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
			<Card.Container className="relative" type="form">
				<Card.Header type="form">
					<Typography as="h2" variant="heading" visual="tiny">
						{title}
					</Typography>
					<Typography
						className="text-tertiary md:max-w-[90%] mt-4"
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
					<div className="grid grid-cols-2 grid-rows-3 gap-y-12">
						<div className="row-start-1">
							<TextField
								id="name"
								errorId="name-error"
								label="Name your job"
								helper="Can only contain lowercase alphanumeric characters and dashes."
								placeholder="Job name"
								{...register("name")}
								error={errors.name?.message}
							/>
						</div>
						<div className="row-start-2">
							<Select
								id="base-model"
								errorId="base-model-error"
								label="Select base model"
								isLoading={isModelsLoading}
								options={[
									{
										value: "placeholder",
										label: "Select a model",
									},
									...(models?.data?.map((model) => ({
										value: model.id,
										label: model.displayName,
									})) || []),
								]}
								error={errors.baseModel?.message}
								{...register("baseModel")}
							/>
						</div>

						<Button
							variant="primary"
							className="row-start-3 w-1/4 h-fit"
							onClick={() => handleStep(2)}
						>
							Next: Configure
						</Button>
					</div>
				)}

				{stateStep === 2 && (
					<>
						{errors.epochTotalError && (
							<ErrorNotice message={errors.epochTotalError.message} />
						)}
						<div className="grid grid-cols-2 gap-10">
							<div className="w-1/2">
								<RHFControllerNumberInput
									label="Epochs"
									id="epochs"
									errorId="epochs-error"
									control={control}
									name="epochs"
									error={errors.epochs?.message}
									helper={
										"Number of times the model sees the full dataset during training"
									}
								/>
							</div>
							<div className="w-1/2">
								<RHFControllerNumberInput
									label="Warmup Epochs"
									id="warmup-epochs"
									errorId="warmup-epochs-error"
									control={control}
									name="warmupEpochs"
									error={errors.warmupEpochs?.message}
									helper="Gradually increases the learning rate at the start of training"
								/>
							</div>
							<div className="w-1/2">
								<RHFControllerNumberInput
									label="Evaluation Epochs"
									id="evaluation-epochs"
									errorId="evaluation-epochs-error"
									control={control}
									name="evaluationEpochs"
									error={errors.evaluationEpochs?.message}
									helper="How often the model is evaluated during training"
								/>
							</div>
							<div className="w-1/2">
								<TextField
									id="learning-rate"
									errorId="learning-rate-error"
									label="Learning rate"
									error={errors.learningRate?.message}
									helper="Controls how much the model updates during training"
									{...register("learningRate", { valueAsNumber: true })}
								/>
							</div>

							<Button
								className="w-1/4 h-fit"
								variant="primary"
								onClick={() => handleStep(3)}
							>
								Next: Review
							</Button>
						</div>
					</>
				)}

				{stateStep === 3 && (
					<>
						<ul className="flex flex-col gap-4 mb-8">
							<li>
								<ReviewCard center title={values.name} icon="wrench" />
							</li>
							<li>
								<ReviewCard
									icon="chat"
									title="Model"
									subtitle={[
										models?.data?.find((model) => model.id === values.baseModel)
											?.displayName || "Models failed to load",
									]}
								/>
							</li>
							<li>
								<ReviewCard
									icon="cog"
									title="Configuration"
									subtitle={[
										`Epochs: ${values.epochs}`,
										`Eval Epochs: ${values.warmupEpochs}`,
										`Warmup Epochs: ${values.warmupEpochs}`,
										`Learning rate: ${values.learningRate}`,
									]}
								/>
							</li>
						</ul>
						<Button variant="primary" className="w-1/4 h-fit" type="submit">
							Start fine-tuning
						</Button>
					</>
				)}
			</Card.Container>
		</form>
	);
};
