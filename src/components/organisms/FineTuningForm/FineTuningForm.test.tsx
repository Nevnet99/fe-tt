import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { FineTuningForm } from "./index";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientTesting } from "../../../tests/setup";
import { useModels } from "../../../services/useModels";
import { useJobs } from "../../../services/useJobs";
import userEvent from "@testing-library/user-event";

vi.mock("../../../services/useModels");
vi.mock("../../../services/useJobs");
vi.mock("next/navigation", () => ({
	redirect: vi.fn(),
}));

describe("FineTuningForm", () => {
	const mockModels = [
		{
			id: "gpt-3.5-turbo",
			displayName: "GPT-3.5 Turbo",
		},
	];

	const mockCreateJob = vi.fn();

	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(useModels).mockReturnValue({
			models: {
				// @ts-expect-error I don't need the full axios type
				data: {
					data: mockModels,
					status: 200,
					statusText: "OK",
					headers: {},
				},
				isLoading: false,
				isError: false,
			},
		});
		vi.mocked(useJobs).mockReturnValue({
			createJob: {
				mutate: mockCreateJob,
			},
			// biome-ignore lint/suspicious/noExplicitAny: testing mock I do not need the full type
		} as any);
	});

	it("renders form with initial step", () => {
		render(
			<QueryClientProvider client={queryClientTesting}>
				<FineTuningForm />
			</QueryClientProvider>,
		);

		expect(screen.getByLabelText("Name your job")).toBeInTheDocument();
		expect(screen.getByLabelText("Select base model")).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "Next: Configure" }),
		).toBeInTheDocument();
	});

	it("shows error when models fail to load", () => {
		vi.mocked(useModels).mockReturnValue({
			models: {
				isError: true,
			},
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} as any);

		render(
			<QueryClientProvider client={queryClientTesting}>
				<FineTuningForm />
			</QueryClientProvider>,
		);

		expect(
			screen.getByText("Error fetching models, please try again later"),
		).toBeInTheDocument();
	});

	it("progresses through form steps", async () => {
		const user = userEvent.setup();

		render(
			<QueryClientProvider client={queryClientTesting}>
				<FineTuningForm />
			</QueryClientProvider>,
		);

		await user.type(screen.getByLabelText("Name your job"), "test-job");
		await user.selectOptions(
			screen.getByLabelText("Select base model"),
			"gpt-3.5-turbo",
		);
		await user.click(screen.getByRole("button", { name: "Next: Configure" }));

		await user.click(screen.getByRole("button", { name: "Next: Review" }));

		expect(screen.getByText("test-job")).toBeInTheDocument();
	});

	it("submits form with valid data", async () => {
		const user = userEvent.setup();

		render(
			<QueryClientProvider client={queryClientTesting}>
				<FineTuningForm />
			</QueryClientProvider>,
		);

		await user.type(screen.getByLabelText("Name your job"), "test-job");
		await user.selectOptions(
			screen.getByLabelText("Select base model"),
			"gpt-3.5-turbo",
		);
		await user.click(screen.getByRole("button", { name: "Next: Configure" }));

		await user.click(screen.getByRole("button", { name: "Next: Review" }));

		await user.click(screen.getByRole("button", { name: "Start fine-tuning" }));

		expect(mockCreateJob).toHaveBeenCalledWith({
			name: "test-job",
			baseModel: "gpt-3.5-turbo",
			epochs: 6,
			warmupEpochs: 2,
			evaluationEpochs: 2,
			learningRate: 0.00002,
		});
	});
});
