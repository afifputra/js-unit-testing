import { it, expect, describe } from "vitest";

import { add, calculateResult } from "./math";

describe("add", () => {
  it("should summarize all number values in an array", () => {
    // Arrange
    const numbers = [1, 2];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
    expect(result).toBe(expectedResult);
  });

  it("should yield NaN if a least one invalid number is provided", () => {
    const inputs = ["invalid", 1];

    const result = add(inputs);

    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];

    const result = add(numbers);

    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };
    expect(resultFn).toThrow(/is not iterable/);
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
      add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/);
  });
});

describe("calculateResult", () => {
  it("should yield the correct result and type of result is a string", () => {
    const inputs = ["1", "2"];

    const result = calculateResult(inputs);

    const expectedResult = inputs.reduce((prevValue, curValue) => +prevValue + +curValue, 0).toString();

    expect(result).toBe(expectedResult);
    expect(result).toBeTypeOf("string");
  });

  it("should yield a result that contains the error message if an error is thrown", () => {
    const inputs = ["invalid", "1"];

    const result = calculateResult(inputs);

    expect(result).toMatch(/Invalid/);
  });
});
