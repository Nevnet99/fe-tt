import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { FineTuningCard } from "./index";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientTesting } from "../../../tests/setup";
import { useJobs } from "../../../services/useJobs";
import userEvent from "@testing-library/user-event";

vi.mock("../../../services/useJobs");

describe("FineTuningCard", () => {
	const mockJobs = [
		{
			id: "job-1",
			name: "Test Job 1",
			baseModel: "gpt-3.5-turbo",
			epochs: 3,
			evaluationEpochs: 1,
			warmupEpochs: 1,
			learningRate: 0.1,
			date: "2024-01-01",
			createdAt: "2024-01-01T12:00:00Z",
			status: "Running",
		},
		{
			id: "job-2",
			name: "Test Job 2",
			baseModel: "gpt-3.5-turbo",
			epochs: 3,
			evaluationEpochs: 1,
			warmupEpochs: 1,
			learningRate: 0.1,
			date: "2024-01-02",
			createdAt: "2024-01-02T12:00:00Z",
			status: "Completed",
		},
	];

	const mockSummary = {
		completed: 1,
		running: 1,
		failed: 0,
	};

	const mockDeleteJob = vi.fn();

	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(useJobs).mockReturnValue({
			getJobs: {
				data: {
					data: {
						jobs: mockJobs,
						summary: mockSummary,
					},
				},
				isLoading: false,
				isError: false,
			},
			deleteJob: {
				mutate: mockDeleteJob,
			},
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} as any);
	});

	const renderComponent = () =>
		render(
			<QueryClientProvider client={queryClientTesting}>
				<FineTuningCard />
			</QueryClientProvider>,
		);

	it("renders loading state", () => {
		vi.mocked(useJobs).mockReturnValueOnce({
			getJobs: {
				isLoading: true,
				data: null,
				isError: false,
			},
			deleteJob: {
				mutate: mockDeleteJob,
			},
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} as any);

		renderComponent();
		expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
	});

	it("renders error state", () => {
		vi.mocked(useJobs).mockReturnValueOnce({
			getJobs: {
				isLoading: false,
				data: null,
				isError: true,
			},
			deleteJob: {
				mutate: mockDeleteJob,
			},
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} as any);

		renderComponent();
		expect(
			screen.getByText("Error fetching jobs, please try again later"),
		).toBeInTheDocument();
	});

	it("renders jobs table with correct data", () => {
		renderComponent();

		expect(screen.getByText("Job ID")).toBeInTheDocument();
		expect(screen.getByText("Date")).toBeInTheDocument();
		expect(screen.getByText("Status")).toBeInTheDocument();
		expect(screen.getByText("Actions")).toBeInTheDocument();

		for (const job of mockJobs) {
			expect(screen.getByText(job.id)).toBeInTheDocument();
		}
	});

	it("calls deleteJob when delete button is clicked", async () => {
		renderComponent();
		const deleteButtons = screen.getAllByTitle("Delete");
		await userEvent.click(deleteButtons[0]);

		expect(mockDeleteJob).toHaveBeenCalledWith("job-1");
	});
});
