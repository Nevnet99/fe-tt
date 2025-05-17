import { render, screen } from "@testing-library/react";
import { Select } from ".";
import { describe, it, expect } from "vitest";

describe("Select", () => {
	it("renders a select input with label", () => {
		render(
			<Select
				id="test-select"
				errorId="test-error"
				label="Test Label"
				options={[
					{ value: "option1", label: "Option 1" },
					{ value: "option2", label: "Option 2" },
				]}
			/>,
		);
		expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
		expect(screen.getByRole("combobox")).toBeInTheDocument();
		expect(screen.getAllByRole("option")).toHaveLength(2);
	});

	it("displays helper text when provided", () => {
		render(
			<Select
				id="test-select"
				errorId="test-error"
				label="Test Label"
				helper="Helper message"
				options={[{ value: "option1", label: "Option 1" }]}
			/>,
		);
		expect(screen.getByText("Helper message")).toBeInTheDocument();
	});

	it("displays error message when provided", () => {
		render(
			<Select
				id="test-select"
				errorId="test-error"
				label="Test Label"
				error="Error message"
				options={[{ value: "option1", label: "Option 1" }]}
			/>,
		);
		expect(screen.getByText("Error message")).toBeInTheDocument();
	});

	it("renders all provided options", () => {
		const options = [
			{ value: "option1", label: "Option 1" },
			{ value: "option2", label: "Option 2" },
			{ value: "option3", label: "Option 3" },
		];

		render(
			<Select
				id="test-select"
				errorId="test-error"
				label="Test Label"
				options={options}
			/>,
		);

		for (const option of options) {
			expect(screen.getByText(option.label)).toBeInTheDocument();
		}
	});
});
