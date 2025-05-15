import { render, screen } from "@testing-library/react";
import { Status } from ".";
import { describe, expect, it } from "vitest";

describe("Status", () => {
	it("renders completed status correctly", () => {
		render(<Status variant="completed" />);
		expect(screen.getByText("Completed")).toBeInTheDocument();
		expect(screen.getByText("Completed").parentElement).toHaveClass(
			"bg-background-extensions-background-green",
		);
	});

	it("renders running status correctly", () => {
		render(<Status variant="running" />);
		expect(screen.getByText("Running")).toBeInTheDocument();
		expect(screen.getByText("Running").parentElement).toHaveClass(
			"bg-background-extensions-background-blue",
		);
	});

	it("applies correct text color for completed status", () => {
		render(<Status variant="completed" />);
		expect(screen.getByText("Completed")).toHaveClass(
			"text-extensions-content-green",
		);
	});

	it("applies correct text color for running status", () => {
		render(<Status variant="running" />);
		expect(screen.getByText("Running")).toHaveClass(
			"text-extensions-content-blue",
		);
	});

	it("uses code variant with tiny visual style", () => {
		render(<Status variant="completed" />);
		const textElement = screen.getByText("Completed");
		expect(textElement).toHaveClass("font-mono");
		expect(textElement).toHaveClass("text-xs");
	});
});
