import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should yield a number if transform a string of number to a number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(1);
});

it("should yield NaN if non-transformable values sign", () => {
  const input = "a";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
