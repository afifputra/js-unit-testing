import { it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

// vi.mock("./errors", () => ({
//   ValidationError: class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   },
// }));

// it("should throw ValidationError", () => {
//   expect(() => validateNotEmpty("", "Validation Error")).toThrowError("Validation Error");
// });

// it("should not throw ValidationError", () => {
//   expect(() => validateNotEmpty("test", "Validation Error")).not.toThrowError("Validation Error");
// });

it("should throw an error if an empty string is provided as a value", () => {
  const testInput = "";

  const validationFn = () => validateNotEmpty(testInput, "Validation Error");

  expect(validationFn).toThrowError("Validation Error");
});

it("should throw an error if an space string is provided as a value", () => {
  const testInput = " ";

  const validationFn = () => validateNotEmpty(testInput, "Validation Error");

  expect(validationFn).toThrowError("Validation Error");
});

it("should not throw an error if a non-empty string is provided as a value", () => {
  const testInput = "test";

  const validationFn = () => validateNotEmpty(testInput, "Validation Error");

  expect(validationFn).not.toThrowError("Validation Error");
});

// Path: util\validation.test.js
