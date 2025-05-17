import { render, screen } from "@testing-library/react";
import { TextField } from ".";
import { describe, it, expect } from "vitest";

describe("TextField", () => {
	it("renders a text input with label", () => {
		render(
			<TextField
				id="test-input"
				errorId="test-error"
				label="Test Label"
				placeholder="Enter text..."
			/>,
		);
		expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
	});

	it("displays helper text when provided", () => {
		render(
			<TextField
				id="test-input"
				errorId="test-error"
				label="Test Label"
				helper="Helper message"
			/>,
		);
		expect(screen.getByText("Helper message")).toBeInTheDocument();
	});

	it("displays error message when provided", () => {
		render(
			<TextField
				id="test-input"
				errorId="test-error"
				label="Test Label"
				error="Error message"
			/>,
		);
		expect(screen.getByText("Error message")).toBeInTheDocument();
	});

	it("passes through additional input props", () => {
		render(
			<TextField
				id="test-input"
				errorId="test-error"
				label="Test Label"
				disabled
				data-testid="text-field"
			/>,
		);
		const input = screen.getByTestId("text-field");
		expect(input).toBeDisabled();
	});
});
