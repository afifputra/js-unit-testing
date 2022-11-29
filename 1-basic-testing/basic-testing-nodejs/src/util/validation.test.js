import { it, expect, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty", () => {
  it("should throw an error if an empty string is passed in", () => {
    const input = "";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/must not be empty/);
  });

  it("should throw an error if a string with only whitespace is passed in", () => {
    const input = " ";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/must not be empty/);
  });
});

describe("validateNumber", () => {
  it("should throw an error if a non-number value is passed in", () => {
    const input = "a";

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input/);
  });

  it("should throw an error if an object is passed in", () => {
    const input = {};

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input/);
  });

  it("should throw an error if an array is passed in", () => {
    const input = [];

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input/);
  });
});
