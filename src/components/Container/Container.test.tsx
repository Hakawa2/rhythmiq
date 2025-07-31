import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container component", () => {
  it("should render children correctly", () => {
    render(
      <Container>
        <h1 data-testid="child">test</h1>
      </Container>
    );

    const child = screen.getByTestId("child");

    expect(child).toBeInTheDocument();
    expect(child.textContent).toBe("test");
  });

  it("should render section with correct classes", () => {
    render(
      <Container>
        <span>content</span>
      </Container>
    );

    const section = screen.getByTestId("container");

    expect(section).toHaveClass("flex-1", "py-10", "px-6");
  });

  it("should wrap children in a div with max-w-6xl and mx-auto classes", () => {
    render(
      <Container>
        <span data-testid="child">content</span>
      </Container>
    );

    const child = screen.getByTestId("child");
    const parentDiv = child.parentElement;

    expect(parentDiv).toHaveClass("max-w-6xl", "mx-auto");
  });
});
