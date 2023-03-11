import { it, expect, describe, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io.js";

vi.mock("fs");

describe("writeData", () => {
  it("should execute function writeFile", async () => {
    const data = "Hello World";
    const fileName = "test.txt";

    await writeData(data, fileName);

    expect(fs.writeFile).toBeCalled();
  });
});
