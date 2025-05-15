import type { Meta, StoryObj } from "@storybook/react";
import { CopyCode } from ".";

const meta = {
	title: "Atoms/CopyCode",
	component: CopyCode,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof CopyCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		code: "bbddd55ea1-41a-10e-9090",
	},
};
