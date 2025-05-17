import { render, screen } from "@testing-library/react";
import { ReviewCard } from ".";
import { describe, expect, it } from "vitest";

describe("ReviewCard", () => {
	it("renders title and icon", () => {
		render(<ReviewCard title="Test Title" icon="chat" />);

		expect(screen.getByText("Test Title")).toBeInTheDocument();
		expect(screen.getByTitle("Chat bubble")).toBeInTheDocument();
	});

	it("renders subtitle items with bullet separators", () => {
		render(
			<ReviewCard
				title="Test Title"
				subtitle={["Item 1", "Item 2", "Item 3"]}
				icon="cog"
			/>,
		);

		expect(screen.getByText("Item 1 •")).toBeInTheDocument();
		expect(screen.getByText("Item 2 •")).toBeInTheDocument();
		expect(screen.getByText("Item 3")).toBeInTheDocument();
	});

	it("renders different icons based on prop", () => {
		const { rerender } = render(<ReviewCard title="Test" icon="chat" />);
		expect(screen.getByTitle("Chat bubble")).toBeInTheDocument();

		rerender(<ReviewCard title="Test" icon="cog" />);
		expect(screen.getByTitle("Cog")).toBeInTheDocument();

		rerender(<ReviewCard title="Test" icon="wrench" />);
		expect(screen.getByTitle("Wrench and screwdriver")).toBeInTheDocument();
	});
});
