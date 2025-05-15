import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";
import { Typography } from "../Typography";

const meta = {
	title: "Atoms/Card",
	component: Card.Container,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Card.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Card.Container>
			<Card.Header>
				<Typography as="h2" variant="heading" visual="tiny">
					Fine-tuning usage
				</Typography>
				<Typography
					as="p"
					variant="paragraph"
					className="text-tertiary"
					visual="small"
				>
					Card Description
				</Typography>
			</Card.Header>
			<Typography as="p" variant="paragraph" visual="base">
				This is the card content. The card component provides a container with
				consistent styling including background color, border, and rounded
				corners.
			</Typography>
		</Card.Container>
	),
};

export const HeaderOnly: Story = {
	render: () => (
		<Card.Container>
			<Card.Header>
				<Typography as="h2" variant="heading" visual="small">
					Header Only Card
				</Typography>
			</Card.Header>
		</Card.Container>
	),
};
