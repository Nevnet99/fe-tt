import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorNotice } from "./";

describe("ErrorNotice", () => {
	it("renders the error message", () => {
		const message = "Test error message";
		render(<ErrorNotice message={message} />);
		expect(screen.getByText(message)).toBeInTheDocument();
	});

	it("applies custom className when provided", () => {
		const className = "custom-class";
		const { container } = render(
			<ErrorNotice message="Test message" className={className} />,
		);
		expect(container.firstChild).toHaveClass(className);
	});
});
