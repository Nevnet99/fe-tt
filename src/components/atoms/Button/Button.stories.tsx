import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
	title: "Atoms/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		children: "New Fine-tuning Job",
	},
};

export const PrimaryIcon: Story = {
	args: {
		variant: "primary",
		onlyIcon: true,
		children: "🔍",
	},
};

export const PrimaryFill: Story = {
	args: {
		variant: "primary",
		fill: true,
		children: "New Fine-tuning Job",
	},
};
