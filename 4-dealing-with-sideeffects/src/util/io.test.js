import { it, expect, describe, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io.js";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

describe("writeData", () => {
  it("should execute function writeFile", async () => {
    const data = "Hello World";
    const fileName = "test.txt";

    await writeData(data, fileName);

    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(fileName, data);
  });

  it("should return a promise that resolves to no value if called correctly", async () => {
    const data = "Hello World";
    const fileName = "test.txt";

    const result = await writeData(data, fileName);

    expect(result).toBeUndefined();
  });
});
