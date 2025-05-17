import { render, screen } from "@testing-library/react";
import { FormField } from ".";
import { describe, expect, it } from "vitest";

describe("FormField", () => {
	it("renders label and input", () => {
		render(
			<FormField inputId="test-input" errorId="test-error" label="Test Label">
				<input id="test-input" />
			</FormField>,
		);

		expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("displays helper text when provided", () => {
		render(
			<FormField
				inputId="test-input"
				errorId="test-error"
				label="Test Label"
				helper="Helper text"
			>
				<input id="test-input" />
			</FormField>,
		);

		expect(screen.getByText("Helper text")).toBeInTheDocument();
	});

	it("displays error message when provided", () => {
		render(
			<FormField
				inputId="test-input"
				errorId="test-error"
				label="Test Label"
				error="Error message"
			>
				<input id="test-input" />
			</FormField>,
		);

		expect(screen.getByText("Error message")).toBeInTheDocument();
	});

	it("displays both helper and error when provided", () => {
		render(
			<FormField
				inputId="test-input"
				errorId="test-error"
				label="Test Label"
				helper="Helper text"
				error="Error message"
			>
				<input id="test-input" />
			</FormField>,
		);

		expect(screen.getByText("Helper text")).toBeInTheDocument();
		expect(screen.getByText("Error message")).toBeInTheDocument();
	});
});
