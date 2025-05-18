import { describe, expect, it } from "vitest";
import { toTitle } from "../toTitle";

describe("toTitle", () => {
	it("should capitalize first letter of a word", () => {
		expect(toTitle("hello")).toBe("Hello");
	});

	it("should handle empty string", () => {
		expect(toTitle("")).toBe("");
	});

	it("should handle already capitalized words", () => {
		expect(toTitle("Hello")).toBe("Hello");
	});

	it("should handle multi-word strings", () => {
		expect(toTitle("hello world")).toBe("Hello World");
	});

	it("should handle strings with numbers", () => {
		expect(toTitle("hello123")).toBe("Hello123");
	});
});
