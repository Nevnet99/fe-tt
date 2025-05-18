import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CopyCode } from "./";
import toast from "react-hot-toast";

vi.mock("react-hot-toast");

describe("CopyCode", () => {
	const mockCode = "test-code-123";

	afterEach(() => {
		vi.clearAllMocks();
	});

	it("renders the code text", () => {
		render(<CopyCode code={mockCode} />);
		expect(screen.getByText(mockCode)).toBeInTheDocument();
	});

	it("copies code to clipboard and shows toast when copy button clicked", async () => {
		const user = userEvent.setup();
		render(<CopyCode code={mockCode} />);

		const copyButton = screen.getByRole("button");
		await user.click(copyButton);
		const copiedText = await window.navigator.clipboard.readText();
		expect(copiedText).toBe(mockCode);
		expect(toast).toHaveBeenCalledWith("Copied to clipboard");
	});
});
