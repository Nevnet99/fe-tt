import { render, screen } from "@testing-library/react";
import { Typography } from ".";
import { describe, it, expect } from "vitest";

describe("Typography", () => {
	it("renders a heading", () => {
		render(<Typography as="h1">Hello World</Typography>);
		expect(screen.getByText("Hello World")).toBeInTheDocument();
	});

	it("Renders the correct element", () => {
		render(<Typography as="h2">Hello World</Typography>);
		expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
	});

	it("Renders the correct variant", () => {
		render(
			<Typography as="h1" variant="heading" visual="large">
				Hello World
			</Typography>,
		);

		expect(screen.getByText("Hello World")).toHaveClass(
			"text-4xl font-medium leading-[40px] tracking-[-0.025em]",
		);
	});
});
