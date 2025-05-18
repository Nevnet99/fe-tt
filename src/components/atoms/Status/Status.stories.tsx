import type { Meta, StoryObj } from "@storybook/react";
import { Status } from ".";

const meta = {
	title: "Atoms/Status",
	component: Status,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Completed: Story = {
	args: {
		variant: "completed",
	},
};

export const Running: Story = {
	args: {
		variant: "running",
	},
};

export const Failed: Story = {
	args: {
		variant: "failed",
	},
};
