import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";

const meta: Meta<typeof TextField> = {
	title: "Atoms/TextField",
	component: TextField,
	tags: ["autodocs"],
	args: {
		id: "text-1",
		errorId: "error-1",
		label: "Name your job",
		placeholder: "Enter text...",
	},
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithHelper: Story = {
	args: {
		helper: "Can only contain lowercase alphanumeric characters and dashes.",
	},
};

export const WithError: Story = {
	args: {
		error: "This field has an error",
	},
};

export const WithHelperAndError: Story = {
	args: {
		helper: "This is a helpful message",
		error: "This field has an error",
	},
};
