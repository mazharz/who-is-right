import { describe, expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/preact";
import { App } from "./app";

describe("App", () => {
  test("should render form", () => {
    const { container } = render(<App />);
    expect(container.textContent).toMatch("Who is right?");
    expect(container.textContent).toMatch(
      "Enter your name below to find out if you are right or not.",
    );
  });

  test("should report not right if arbitrary value given", () => {
    const { container, getByRole } = render(<App />);
    const input = getByRole("input");
    const btn = getByRole("button");

    fireEvent.change(input, { target: { value: "abcd" } });
    fireEvent.click(btn);
    expect(container.textContent).toMatch(
      "Nope, I'm sorry, you are not right.",
    );
  });

  test("should report right if either of the right names are used", () => {
    const { container, getByRole } = render(<App />);
    const input = getByRole("input");
    const btn = getByRole("button");
    const names = ["afra", "afoo"];

    names.forEach((name) => {
      fireEvent.change(input, { target: { value: name } });
      fireEvent.click(btn);
      expect(container.textContent).toMatch(
        "Of course, Afra is always right, ALWAYS!",
      );
      fireEvent.click(getByRole("button"));
    });
  });
});
