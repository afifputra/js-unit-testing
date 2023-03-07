import { it, expect, describe } from "vitest";
import { generateResultText, outputResult } from "./output.js";

describe("generateResultText", () => {
  it('should return "Invalid input. You must enter valid numbers." if calculationResult is "invalid"', () => {
    expect(generateResultText("invalid")).toBe("Invalid input. You must enter valid numbers.");
  });
  it('should return "Result: 5" if calculationResult is 5', () => {
    expect(generateResultText(5)).toBe("Result: 5");
  });
  it('should return "" if calculationResult is "no-calc"', () => {
    expect(generateResultText("no-calc")).toBe("");
  });
});

describe("outputResult", () => {
  it('should set the textContent of the result element to "Result: 5"', () => {
    const resultElement = { textContent: "" };
    outputResult(5, resultElement);
    expect(resultElement.textContent).toBe("Result: 5");
  });
});
