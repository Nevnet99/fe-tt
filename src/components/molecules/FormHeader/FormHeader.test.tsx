import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormHeader } from "./";

describe("FormHeader", () => {
	const defaultProps = {
		label: "Test Label",
		subtitle: "Test Subtitle",
		setStep: vi.fn(),
		step: 2,
	};

	it("renders the label and subtitle", () => {
		render(<FormHeader {...defaultProps} />);
		expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
		expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
	});

	it("shows home link on step 1", () => {
		render(<FormHeader {...defaultProps} step={1} />);
		expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute(
			"href",
			"/",
		);
	});

	it("shows back button after step 1", async () => {
		const user = userEvent.setup();
		render(<FormHeader {...defaultProps} />);

		const backButton = screen.getByRole("button", { name: "Back" });
		await user.click(backButton);

		expect(defaultProps.setStep).toHaveBeenCalledWith(1);
	});
});
