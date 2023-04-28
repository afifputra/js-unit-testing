/**
 * @vitest-environment happy-dom
 */

import fs from "fs";
import path from "path";

import { it, expect, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htlmDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htlmDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocContent);
});

it('should add an error paragraph to the id="errors" element', () => {
  showError("test");

  const errorContainerElement = document.getElementById("errors");
  const errorMessageElement = errorContainerElement.querySelector("p");

  expect(errorMessageElement).not.toBeNull();
});

it("should not contain an error paragraph before calling showError", () => {
  const errorContainerElement = document.getElementById("errors");
  const errorMessageElement = errorContainerElement.querySelector("p");

  expect(errorMessageElement).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
  const testMessage = "Test Message";

  showError(testMessage);

  const errorContainerElement = document.getElementById("errors");
  const errorMessageElement = errorContainerElement.querySelector("p");

  expect(errorMessageElement.textContent).toBe(testMessage);
});
