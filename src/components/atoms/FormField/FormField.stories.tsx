import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from ".";

const meta: Meta<typeof FormField> = {
	title: "Atoms/FormField",
	component: FormField,
	tags: ["autodocs"],
	args: {
		inputId: "field-1",
		errorId: "error-1",
		label: "Field Label",
		children: <input id="field-1" type="text" placeholder="Enter text..." />,
	},
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {};

export const WithHelper: Story = {
	args: {
		helper: "This is a helpful message",
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
