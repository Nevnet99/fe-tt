import type { Meta, StoryObj } from "@storybook/react";
import { ErrorNotice } from ".";

const meta: Meta<typeof ErrorNotice> = {
	title: "Molecules/ErrorNotice",
	component: ErrorNotice,
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof ErrorNotice>;

export const Default: Story = {
	args: {
		message: "An error occurred while processing your request.",
	},
};

export const LongMessage: Story = {
	args: {
		message:
			"Sum of Warmup epochs and Evaluation epochs must not exceed total epochs.",
	},
};
