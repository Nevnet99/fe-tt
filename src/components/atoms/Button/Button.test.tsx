import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
	it("renders children correctly", () => {
		render(<Button variant="primary">Click me</Button>);
		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

	it("applies primary variant styles", () => {
		render(<Button variant="primary">Click me</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass(
			"text-inverse-primary",
			"bg-background-inverse-primary",
			"border-border-inverse-primary",
		);
	});

	it("applies onlyIcon styles when onlyIcon prop is true", () => {
		render(
			<Button variant="primary" onlyIcon>
				🔍
			</Button>,
		);
		const button = screen.getByRole("button");
		expect(button).toHaveClass(
			"flex",
			"items-center",
			"justify-center",
			"w-6",
			"h-6",
		);
	});

	it("applies fill styles when fill prop is true", () => {
		render(
			<Button variant="primary" fill>
				Click me
			</Button>,
		);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("w-full");
	});

	it("merges custom className with default styles", () => {
		render(
			<Button variant="primary" className="custom-class">
				Click me
			</Button>,
		);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("custom-class");
	});

	it("when passed onClick prop, it calls the function", async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();
		render(
			<Button variant="primary" onClick={handleClick}>
				Click me
			</Button>,
		);

		const button = screen.getByRole("button");

		await user.click(button);

		expect(handleClick).toHaveBeenCalled();
	});
});
