import { it, expect, describe } from "vitest";

import writeData from "./io.js";

describe("writeData", () => {
  it("should execute function writeData", async () => {
    const data = "Hello World";
    const fileName = "test.txt";

    const file = await writeData(data, fileName);

    expect(file).toBeUndefined();
  });
});
