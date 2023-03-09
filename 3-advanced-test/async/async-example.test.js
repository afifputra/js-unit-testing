import { it, expect, describe } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (error, token) => {
      try {
        expect(token).toBeDefined();
        //   expect(token).toBe(2);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise", () => {
  it("should generate a token value", async () => {
    const testUserEmail = "test@test.com";

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
  });
});
