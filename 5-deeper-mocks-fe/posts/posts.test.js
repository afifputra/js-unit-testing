import { describe, it, expect, beforeEach } from "vitest";

import { extractPostData } from "./posts";

const testTitle = "Test Title";
const testContent = "Test Content";
let testFormData = null;

beforeEach(() => {
  // make a fake form object
  testFormData = {
    get: (key) => {
      return key === "title" ? testTitle : testContent;
    },
  };
});

describe("extractPostData", () => {
  it("should extract the title and content from a form object", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toEqual(testTitle);
    expect(data.content).toEqual(testContent);
  });
});
