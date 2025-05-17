import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta = {
	title: "Atoms/Select",
	component: Select,

	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "default-select",
		errorId: "default-select-error",
		label: "Select base model",
		options: [
			{ value: "option1", label: "Option 1" },
			{ value: "option2", label: "Option 2" },
			{ value: "option3", label: "Option 3" },
		],
	},
};

export const WithHelper: Story = {
	args: {
		...Default.args,
		helper: "Choose from the available options",
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: "Please select a valid option",
	},
};
