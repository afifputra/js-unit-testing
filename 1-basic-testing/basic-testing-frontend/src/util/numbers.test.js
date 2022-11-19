import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should yield a number if transform a string of number to a number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(1);
});

it("should yield NaN if value is a alphabet", () => {
  const input = "a";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});

it("should yield NaN if value is a symbol", () => {
  const input = "!";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
