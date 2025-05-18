import { render } from "@testing-library/react";
import { Pip } from "./index";
import { describe, expect, it } from "vitest";

describe("Pip", () => {
	it("renders with default classes", () => {
		const { container } = render(<Pip />);
		const pip = container.firstChild as HTMLElement;
		expect(pip).toHaveClass("w-2", "h-2", "rounded-full");
	});

	it("merges custom className with default classes", () => {
		const { container } = render(<Pip className="bg-blue-500" />);
		const pip = container.firstChild as HTMLElement;
		expect(pip).toHaveClass("w-2", "h-2", "rounded-full", "bg-blue-500");
	});

	it("renders as a div element", () => {
		const { container } = render(<Pip />);
		expect(container.firstChild?.nodeName).toBe("DIV");
	});
});
