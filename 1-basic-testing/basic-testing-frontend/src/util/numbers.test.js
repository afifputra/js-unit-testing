import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string to a number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(1);
});

it("should throw an error if value is a alphabet", () => {
  const input = "a";

  const resultFn = () => {
    transformToNumber(input);
  };

  expect(resultFn).toThrow(/is not a number/);
});
