import type { Meta, StoryObj } from "@storybook/react";
import { Table } from ".";
import { CopyCode } from "@/components/molecules/CopyCode";
import { Status } from "@/components/atoms/Status";

const meta = {
	title: "Molecules/Table",
	component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		headers: [
			{ id: "1", label: "Job ID" },
			{ id: "2", label: "Date" },
			{ id: "3", label: "Status", align: "right" },
		],
		rows: [
			{
				id: "1-row",
				cells: [
					{ id: "1", render: <CopyCode code="bbddd55ea1-41a-10e-9090" /> },
					{ id: "2", render: <p>2024-01-15</p> },
					{ id: "3", render: <Status variant="running" />, align: "right" },
				],
			},
			{
				id: "2-row",
				cells: [
					{ id: "1", render: <CopyCode code="bbddd55ea1-41a-10e-9090" /> },
					{ id: "2", render: <p>2024-01-14</p> },
					{ id: "3", render: <Status variant="completed" />, align: "right" },
				],
			},
		],
	},
};
