import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((a, b) => a + b, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 2];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const inputs = ["1", "2", "3"];

  const result = add(inputs);

  const expectedResult = numbers.reduce((a, b) => a + b, 0);

  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const inputs = [];

  const result = add(inputs);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});
