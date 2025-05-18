import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GettingStartedCard } from "./index";

describe("GettingStartedCard", () => {
	it("renders card with correct title", () => {
		render(<GettingStartedCard />);
		expect(screen.getByText("Get Started")).toBeInTheDocument();
	});

	it("renders horizontal card with correct content", () => {
		render(<GettingStartedCard />);

		expect(
			screen.getByText("Get started with Fine-tuning"),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				"Simple, ready-to-use inference endpoints that are paid for per request. No commitments, only pay for what you use with Nscale Serverless.",
			),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: "New Fine-tuning Job" }),
		).toBeInTheDocument();
		expect(screen.getByRole("link")).toHaveAttribute(
			"href",
			"/fine-tuning-job",
		);
	});
});
