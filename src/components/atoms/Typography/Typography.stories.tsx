import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const meta = {
	title: "Atoms/Typography",
	component: Typography,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingLarge: Story = {
	args: {
		as: "h1",
		variant: "heading",
		visual: "large",
		children: "Heading Large",
	},
};

export const HeadingSmall: Story = {
	args: {
		as: "h2",
		variant: "heading",
		visual: "small",
		children: "Heading Small",
	},
};

export const HeadingTiny: Story = {
	args: {
		as: "h3",
		variant: "heading",
		visual: "tiny",
		children: "Heading Tiny",
	},
};

export const LabelBase: Story = {
	args: {
		as: "span",
		variant: "label",
		visual: "base",
		children: "Label Base",
	},
};

export const LabelSmall: Story = {
	args: {
		as: "span",
		variant: "label",
		visual: "small",
		children: "Label Small",
	},
};

export const ParagraphBase: Story = {
	args: {
		as: "p",
		variant: "paragraph",
		visual: "base",
		children: "Paragraph Base",
	},
};

export const ParagraphSmall: Story = {
	args: {
		as: "p",
		variant: "paragraph",
		visual: "small",
		children: "Paragraph Small",
	},
};

export const ParagraphTiny: Story = {
	args: {
		as: "p",
		variant: "paragraph",
		visual: "tiny",
		children: "Paragraph Tiny",
	},
};

export const CodeLarge: Story = {
	args: {
		as: "p",
		variant: "code",
		visual: "large",
		children: "Code Large",
	},
};

export const CodeSmall: Story = {
	args: {
		as: "p",
		variant: "code",
		visual: "small",
		children: "Code Small",
	},
};

export const CodeTiny: Story = {
	args: {
		as: "p",
		variant: "code",
		visual: "tiny",
		children: "Code Tiny",
	},
};
