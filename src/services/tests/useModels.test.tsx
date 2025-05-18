import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useModels } from "../useModels";
import api from "../../lib/axios";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientTesting } from "../../tests/setup";

vi.mock("../../lib/axios");

describe("useModels", () => {
	const mockModels = [
		{
			id: "model-1",
			displayName: "Model 1",
		},
		{
			id: "model-2",
			displayName: "Model 2",
		},
	];

	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("getModels", () => {
		it("fetches models when enabled", async () => {
			vi.mocked(api.get).mockResolvedValueOnce({
				data: mockModels,
			});

			const { result } = renderHook(() => useModels({ fetchOnInit: true }), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});

			await waitFor(() => {
				expect(api.get).toHaveBeenCalledWith("/models");
				expect(result.current.models.data?.data).toEqual(mockModels);
			});
		});

		it("handles fetch error", async () => {
			const error = new Error("API Error");
			vi.mocked(api.get).mockRejectedValueOnce(error);

			const { result } = renderHook(() => useModels({ fetchOnInit: true }), {
				wrapper: ({ children }) => (
					<QueryClientProvider client={queryClientTesting}>
						{children}
					</QueryClientProvider>
				),
			});

			await waitFor(() => {
				expect(result.current.models.error).toBeTruthy();
			});
		});
	});
});
