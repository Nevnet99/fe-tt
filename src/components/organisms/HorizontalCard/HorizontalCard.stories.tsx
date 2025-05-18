import type { Meta, StoryObj } from "@storybook/react";
import { HorizontalCard } from ".";

const meta = {
	title: "Organisms/HorizontalCard",
	component: HorizontalCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof HorizontalCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Get started with Fine-tuning",
		description:
			"Simple, ready-to-use inference endpoints that are paid for per request. No commitments, only pay for what you use with Nscale Serverless.",
		buttonText: "New Fine-tuning Job",
		href: "/fine-tuning-job",
	},
};
