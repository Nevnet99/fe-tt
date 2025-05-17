import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberInput } from ".";

describe("NumberInput", () => {
	it("renders with default value", () => {
		const onValueChange = vi.fn();
		render(
			<NumberInput
				label="Test Input"
				id="test"
				errorId="test-error"
				onValueChange={onValueChange}
			/>,
		);

		expect(screen.getByText("Test Input")).toBeInTheDocument();
		expect(screen.getByText("1")).toBeInTheDocument();
	});

	it("increments value when + button is clicked", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();
		render(
			<NumberInput
				label="Test Input"
				id="test"
				errorId="test-error"
				onValueChange={onValueChange}
				defaultValue={1}
			/>,
		);

		await user.click(screen.getByLabelText("Increment"));
		expect(screen.getByText("2")).toBeInTheDocument();
		expect(onValueChange).toHaveBeenCalledWith(2);
	});

	it("decrements value when - button is clicked", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();
		render(
			<NumberInput
				label="Test Input"
				id="test"
				errorId="test-error"
				onValueChange={onValueChange}
				defaultValue={2}
			/>,
		);

		await user.click(screen.getByLabelText("Decrement"));
		expect(screen.getByText("1")).toBeInTheDocument();
		expect(onValueChange).toHaveBeenCalledWith(1);
	});

	it("respects min value constraint", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();
		render(
			<NumberInput
				label="Test Input"
				id="test"
				errorId="test-error"
				onValueChange={onValueChange}
				defaultValue={1}
				min={1}
			/>,
		);

		await user.click(screen.getByLabelText("Decrement"));
		expect(screen.getByText("1")).toBeInTheDocument();
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it("respects max value constraint", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();
		render(
			<NumberInput
				label="Test Input"
				id="test"
				errorId="test-error"
				onValueChange={onValueChange}
				defaultValue={10}
				max={10}
			/>,
		);

		await user.click(screen.getByLabelText("Increment"));
		expect(screen.getByText("10")).toBeInTheDocument();
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it("displays helper text when provided", () => {
		const onValueChange = vi.fn();
		render(
			<NumberInput
				label="Test Input"
				id="test"
				errorId="test-error"
				onValueChange={onValueChange}
				helper="Helper text"
			/>,
		);

		expect(screen.getByText("Helper text")).toBeInTheDocument();
	});

	it("displays error message when provided", () => {
		const onValueChange = vi.fn();
		render(
			<NumberInput
				label="Test Input"
				id="test"
				errorId="test-error"
				onValueChange={onValueChange}
				error="Error message"
			/>,
		);

		expect(screen.getByText("Error message")).toBeInTheDocument();
	});
});
