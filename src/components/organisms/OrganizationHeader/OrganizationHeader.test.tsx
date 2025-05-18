import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { OrganizationHeader } from "./index";

describe("OrganizationHeader", () => {
	it("renders organization header with avatar and title", () => {
		render(<OrganizationHeader />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /acme inc/i }),
		).toBeInTheDocument();
		expect(screen.getByText("AI")).toBeInTheDocument();
		expect(
			screen.getByText("Model tuning jobs", { selector: ".sr-only" }),
		).toBeInTheDocument();
	});
});
