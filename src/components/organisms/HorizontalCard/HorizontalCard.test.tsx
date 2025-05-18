import { render, screen } from "@testing-library/react";
import { HorizontalCard } from "./index";
import { describe, expect, it } from "vitest";

describe("HorizontalCard", () => {
	const defaultProps = {
		title: "Test Title",
		href: "/test-link",
		buttonText: "Click Me",
		description: "Test description text",
	};

	it("renders all components correctly", () => {
		render(<HorizontalCard {...defaultProps} />);

		expect(
			screen.getByRole("heading", { name: defaultProps.title }),
		).toBeInTheDocument();
		expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
		expect(screen.getByRole("link")).toHaveAttribute("href", defaultProps.href);
		expect(screen.getByText(defaultProps.buttonText)).toBeInTheDocument();
	});
});
