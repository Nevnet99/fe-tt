import { render, screen } from "@testing-library/react";
import { SummaryChartCard } from ".";
import { describe, expect, it } from "vitest";

describe("SummaryChartCard", () => {
	it("renders summary data correctly", () => {
		const summary = {
			completed: 12,
			running: 5,
			failed: 3,
		};

		render(<SummaryChartCard summary={summary} />);

		expect(screen.getByText("12 jobs")).toBeInTheDocument();
		expect(screen.getByText("5 jobs")).toBeInTheDocument();
		expect(screen.getByText("3 jobs")).toBeInTheDocument();
	});

	it("renders empty state correctly", () => {
		const summary = {
			completed: 0,
			running: 0,
			failed: 0,
		};

		render(<SummaryChartCard summary={summary} />);

		expect(screen.getAllByText("0 jobs")).toHaveLength(3);
	});
});
