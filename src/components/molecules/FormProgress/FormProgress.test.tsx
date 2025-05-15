import { render, screen } from "@testing-library/react";
import { FormProgress } from ".";
import { describe, expect, it } from "vitest";

describe("FormProgress", () => {
	it("renders step and max values correctly", () => {
		render(<FormProgress step={2} max={4} />);
		expect(screen.getByText("2")).toBeInTheDocument();
		expect(screen.getByText("of 4")).toBeInTheDocument();
	});

	it("uses code variant with large visual style", () => {
		render(<FormProgress step={1} max={3} />);
		const container = screen.getByText("1");
		expect(container).toHaveClass("font-mono");
		expect(container).toHaveClass("text-lg");
	});

	it("renders 'of' text in tertiary color", () => {
		render(<FormProgress step={1} max={3} />);
		const ofText = screen.getByText("of 3");
		expect(ofText).toHaveClass("text-tertiary");
	});
});
