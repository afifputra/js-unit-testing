import { it, expect, vi } from "vitest";

import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Body should be a string.");
    }
    const testResponse = {
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

it("should return any available response data", async () => {
  const testData = { key: "test" };

  const responseData = await sendDataRequest(testData);

  expect(responseData).toEqual(testResponseData);
});

it("should convert the provided data to JSON before sending the request", () => {
  const testData = { key: "test" };

  return expect(sendDataRequest(testData)).not.rejects.toBe("Body should be a string.");
});
