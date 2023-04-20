import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError", () => {
  it("shoud have statusCode property", () => {
    const error = new HttpError(404, "Not Found");
    expect(error.statusCode).toBe(404);
  });

  it("shoud have message property", () => {
    const error = new HttpError(404, "Not Found");
    expect(error.message).toBe("Not Found");
  });

  it("shoud have data property", () => {
    const error = new HttpError(404, "Not Found", { data: "data" });
    expect(error.data).toEqual({ data: "data" });
  });
});

describe("ValidationError", () => {
  it("shoud have message property", () => {
    const error = new ValidationError("Validation Error");
    expect(error.message).toBe("Validation Error");
  });
});
