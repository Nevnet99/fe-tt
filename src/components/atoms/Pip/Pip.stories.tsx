import type { Meta, StoryObj } from "@storybook/react";
import { Pip } from "./index";

const meta = {
	title: "Atoms/Pip",
	component: Pip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Pip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Blue: Story = {
	args: {
		className: "bg-blue-500",
	},
};

export const Red: Story = {
	args: {
		className: "bg-red-500",
	},
};

export const Large: Story = {
	args: {
		className: "w-2 h-2 bg-gray-500",
	},
};
