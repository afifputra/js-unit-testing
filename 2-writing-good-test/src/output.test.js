import { it, expect, describe } from "vitest";
import { generateResultText, outputResult } from "./output.js";

describe("generateResultText", () => {
  it("should return a string, no matter what the input is", () => {
    const val1 = 1;
    const val2 = "invalid";

    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is provided as a result", () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = "no-calc";

    const resultText = generateResultText(result);

    expect(resultText).toBe("");
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
});

// describe("outputResult", () => {
//   it('should set the textContent of the result element to "Result: 5"', () => {
//     const resultElement = { textContent: "" };
//     outputResult(5, resultElement);
//     expect(resultElement.textContent).toBe("Result: 5");
//   });

//   it('should set the textContent of the result element to "Invalid input. You must enter valid numbers."', () => {
//     const resultElement = { textContent: "" };
//     outputResult("invalid", resultElement);
//     expect(resultElement.textContent).toBe("Invalid input. You must enter valid numbers.");
//   });
// });

// Path: 2-writing-good-test\src\output.js
