import type { Meta, StoryObj } from "@storybook/react";
import { ReviewCard } from ".";

const meta = {
	title: "Molecules/ReviewCard",
	component: ReviewCard,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Example Title",
		subtitle: ["Subtitle Item 1", "Subtitle Item 2"],
		icon: "chat",
	},
};

export const WithoutSubtitle: Story = {
	args: {
		title: "Example Title",
		icon: "chat",
	},
};

export const LongSubtitle: Story = {
	args: {
		title: "Configuration",
		subtitle: [
			"Epochs: 10",
			"Eval Epochs: 2",
			"Warmup Epochs: 2",
			"Learning rate: 0.00002",
		],
		icon: "cog",
	},
};
