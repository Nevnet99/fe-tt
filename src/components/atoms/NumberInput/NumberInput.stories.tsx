import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from ".";

const meta = {
	title: "Atoms/NumberInput",
	component: NumberInput,
	tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Epochs",
		id: "number-input",
		errorId: "number-input-error",
		onValueChange: (value) => console.log(value),
	},
};

export const WithHelper: Story = {
	args: {
		...Default.args,
		helper: "This is a helper text",
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: "This is an error message",
	},
};

export const WithMinMax: Story = {
	args: {
		...Default.args,
		min: 1,
		max: 10,
		defaultValue: 5,
	},
};
