import type { Meta, StoryObj } from "@storybook/react";
import { SummaryChartCard } from ".";

const meta: Meta<typeof SummaryChartCard> = {
	title: "Molecules/SummaryChartCard",
	component: SummaryChartCard,
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof SummaryChartCard>;

export const Default: Story = {
	args: {
		summary: {
			completed: 12,
			running: 5,
			failed: 3,
		},
	},
};

export const Empty: Story = {
	args: {
		summary: {
			completed: 0,
			running: 0,
			failed: 0,
		},
	},
};
