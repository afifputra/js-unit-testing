import { it, expect, vi } from "vitest";

import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject(new Error("Body is not a string"));
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

it("should convert the provided data to JSON before sending the request", async () => {
  const testData = { key: "test" };
  let errMessage = null;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errMessage = error;
  }

  expect(errMessage).toBeNull();
});

it("should throw an HttpError in case of non-ok responses", async () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json: () => {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });

  const testData = { key: "test" };

  let errMessage = null;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errMessage = error;
  }

  expect(errMessage).toBeInstanceOf(HttpError);
});
