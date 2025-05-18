import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useJobs } from "../useJobs";
import api from "../../lib/axios";
import { queryClient } from "../../lib/QueryProvider";
import { toast } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientTesting } from "../../tests/setup";

vi.mock("../../lib/axios");
vi.mock("react-hot-toast");
vi.mock("../../lib/QueryProvider", () => ({
	queryClient: {
		invalidateQueries: vi.fn(),
	},
}));

describe("useJobs", () => {
	const mockJob = {
		id: "test-id",
		name: "Test Job",
		baseModel: "gpt-3.5-turbo",
		epochs: 3,
		evaluationEpochs: 1,
		warmupEpochs: 1,
		learningRate: 0.1,
		date: "2024-01-01",
		createdAt: "2024-01-01T12:00:00Z",
		status: "Running" as const,
	};

	const mockJobInput = {
		name: "Test Job",
		baseModel: "gpt-3.5-turbo",
		epochs: 3,
		evaluationEpochs: 1,
		warmupEpochs: 1,
		learningRate: 0.1,
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("getJobs", () => {
		it("fetches jobs when enabled", async () => {
			vi.mocked(api.get).mockResolvedValueOnce({
				data: {
					jobs: [mockJob],
					summary: {
						completed: 0,
						running: 1,
						failed: 0,
					},
				},
			});

			const { result } = renderHook(() => useJobs({ fetchOnInit: true }), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});

			await waitFor(() => {
				expect(result.current.getJobs.data?.data.jobs).toEqual([mockJob]);
			});
		});

		it("doesn't fetch jobs when disabled", () => {
			renderHook(() => useJobs({ fetchOnInit: false }), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});
			expect(api.get).not.toHaveBeenCalled();
		});
	});

	describe("createJob", () => {
		it("creates a job successfully", async () => {
			vi.mocked(api.post).mockResolvedValueOnce({ data: mockJob });

			const { result } = renderHook(() => useJobs({}), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});

			result.current.createJob.mutate(mockJobInput);

			await waitFor(() => {
				expect(queryClient.invalidateQueries).toHaveBeenCalledWith({
					queryKey: ["jobs"],
				});
				expect(toast.success).toHaveBeenCalledWith("Job created successfully", {
					id: "job-created",
				});
			});
		});

		it("handles creation error", async () => {
			const error = new Error("API Error");
			vi.mocked(api.post).mockRejectedValueOnce(error);

			const { result } = renderHook(() => useJobs({}), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});
			result.current.createJob.mutate(mockJobInput);

			await waitFor(() => {
				expect(toast.error).toHaveBeenCalledWith(
					"Failed to create job: API Error",
					{ id: "job-created" },
				);
			});
		});
	});

	describe("deleteJob", () => {
		it("deletes a job successfully", async () => {
			vi.mocked(api.delete).mockResolvedValueOnce({ data: mockJob });

			const { result } = renderHook(() => useJobs({}), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});
			result.current.deleteJob.mutate("test-id");

			await waitFor(() => {
				expect(queryClient.invalidateQueries).toHaveBeenCalledWith({
					queryKey: ["jobs"],
				});
				expect(toast.success).toHaveBeenCalledWith("Job deleted successfully", {
					id: "job-deleted",
				});
			});
		});

		it("handles deletion error", async () => {
			const error = new Error("API Error");
			vi.mocked(api.delete).mockRejectedValueOnce(error);

			const { result } = renderHook(() => useJobs({}), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});
			result.current.deleteJob.mutate("test-id");

			await waitFor(() => {
				expect(toast.error).toHaveBeenCalledWith(
					"Failed to delete job: API Error",
					{ id: "job-deleted" },
				);
			});
		});
	});
});
