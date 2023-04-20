import { describe, it, expect, vi } from "vitest";

import { generateReportData } from "./data.js";

describe("generateReportData", () => {
  // Try to test spy function
  it("should execute function parameter that passed to it", () => {
    const logFn = vi.fn();

    // To Replace the original function with a mock function
    // logFn.mockImplementation(() => {});

    generateReportData(logFn);

    expect(logFn).toHaveBeenCalled();
  });
});
