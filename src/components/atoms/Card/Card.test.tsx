import { render, screen } from "@testing-library/react";
import { Card } from ".";
import { describe, expect, it } from "vitest";

describe("Card", () => {
	describe("Container", () => {
		it("renders children correctly", () => {
			render(
				<Card.Container>
					<div>Test Content</div>
				</Card.Container>,
			);
			expect(screen.getByText("Test Content")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			const { container } = render(
				<Card.Container className="custom-class">
					<div>Content</div>
				</Card.Container>,
			);

			expect(container.firstChild).toHaveClass("custom-class");
		});

		it("passes through additional props", () => {
			render(
				<Card.Container data-testid="card">
					<div>Content</div>
				</Card.Container>,
			);

			expect(screen.getByTestId("card")).toBeInTheDocument();
		});
	});

	describe("Header", () => {
		it("renders children correctly", () => {
			render(
				<Card.Header>
					<div>Header Content</div>
				</Card.Header>,
			);

			expect(screen.getByText("Header Content")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			const { container } = render(
				<Card.Header className="custom-header">
					<div>Content</div>
				</Card.Header>,
			);

			expect(container.firstChild).toHaveClass("custom-header");
		});

		it("passes through additional props", () => {
			render(
				<Card.Header data-testid="header">
					<div>Content</div>
				</Card.Header>,
			);

			expect(screen.getByTestId("header")).toBeInTheDocument();
		});
	});
});
