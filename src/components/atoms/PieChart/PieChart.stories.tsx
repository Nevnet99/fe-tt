import type { Meta, StoryObj } from "@storybook/react";
import { PieChart } from "./index";

const meta = {
	title: "Atoms/PieChart",
	component: PieChart,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: [
			{
				name: "Completed",
				value: 5,
				color: "#15803D",
			},
			{
				name: "Running",
				value: 3,
				color: "#1D4ED8",
			},
			{
				name: "Failed",
				value: 2,
				color: "#B91C1C",
			},
		],
	},
};
