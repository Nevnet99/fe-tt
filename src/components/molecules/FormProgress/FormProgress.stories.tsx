import type { Meta, StoryObj } from "@storybook/react";
import { FormProgress } from ".";

const meta = {
	title: "Molecules/FormProgress",
	component: FormProgress,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof FormProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		step: 1,
		max: 3,
	},
};

export const LastStep: Story = {
	args: {
		step: 3,
		max: 3,
	},
};
