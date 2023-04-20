import { it, expect, vi } from "vitest";
import { validateNotEmpty } from "./validation";

vi.mock("./errors", () => ({
  ValidationError: class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  },
}));

it("should throw ValidationError", () => {
  expect(() => validateNotEmpty("", "Validation Error")).toThrowError("Validation Error");
});

it("should not throw ValidationError", () => {
  expect(() => validateNotEmpty("test", "Validation Error")).not.toThrowError("Validation Error");
});

// Path: util\validation.test.js
