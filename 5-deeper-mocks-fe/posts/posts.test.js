import { describe, it, expect, beforeEach, vi } from "vitest";

import { extractPostData, savePost } from "./posts";

const testTitle = "Test Title";
const testContent = "Test Content";
let testFormData = {
  title: testTitle,
  content: testContent,
};

describe("extractPostData", () => {
  beforeEach(() => {
    // make a fake form object
    testFormData = {
      get: (key) => {
        return key === "title" ? testTitle : testContent;
      },
    };
  });

  it("should extract the title and content from a form object", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toEqual(testTitle);
    expect(data.content).toEqual(testContent);
  });
});

describe("savePost", () => {
  beforeEach(() => {
    // testFormData = {
    //   get: (key) => {
    //     return key === "title" ? testTitle : testContent;
    //   },
    // };

    vi.stubGlobal(
      "fetch",
      vi.fn((url, options) => {
        return new Promise((resolve, reject) => {
          if (typeof options.body !== "string") {
            return reject(new Error("Body is not a string"));
          }
          const testResponse = {
            ok: true,
            json: () => {
              return new Promise((resolve, reject) => {
                resolve({});
              });
            },
          };
          resolve(testResponse);
        });
      })
    );
  });

  it("should send a request to the backend API", async () => {
    await savePost(testFormData);

    expect(fetch).toHaveBeenCalled();
  });

  it("should send the correct request body", async () => {
    await savePost(testFormData);

    const fetchArgs = fetch.mock.calls[0];

    expect(JSON.parse(fetchArgs[1].body)).toEqual({
      title: testTitle,
      content: testContent,
      created: expect.any(String),
    });
  });
});
