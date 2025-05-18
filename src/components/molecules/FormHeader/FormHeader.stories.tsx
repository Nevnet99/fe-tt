import type { Meta, StoryObj } from "@storybook/react";
import { FormHeader } from "./";

const meta = {
	title: "Molecules/FormHeader",
	component: FormHeader,
	parameters: {
		layout: "centered",
	},
	args: {
		label: "Fine-tune a model",
		subtitle: "Fine-tuning",
		step: 1,
		setStep: () => {},
	},
} satisfies Meta<typeof FormHeader>;

export default meta;
type Story = StoryObj<typeof FormHeader>;

export const Default: Story = {};

export const Step2: Story = {
	args: {
		step: 2,
	},
};

export const Step3: Story = {
	args: {
		step: 3,
	},
};
