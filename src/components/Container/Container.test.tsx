import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container component", () => {
  it("should render a children component", () => {
    render(
      <Container>
        <h1>test</h1>
      </Container>
    );

    const text = screen.getByRole("heading");
    expect(text.textContent).toBe("test");
  });
});
