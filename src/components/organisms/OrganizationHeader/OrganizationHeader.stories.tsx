import type { Meta, StoryObj } from "@storybook/react";
import { OrganizationHeader } from "./index";

const meta = {
	title: "Organisms/OrganizationHeader",
	component: OrganizationHeader,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof OrganizationHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
