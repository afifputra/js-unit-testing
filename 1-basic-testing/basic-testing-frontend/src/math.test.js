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

it("should return 0 if the array is empty", () => {
  const numbers = [];

  const result = add(numbers);
  const expectedResult = 0;
  expect(result).toBe(expectedResult);
});
