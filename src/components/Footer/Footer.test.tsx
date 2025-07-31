import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the footer element", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    render(<Footer />);
    expect(screen.getByText(/Feito por Rythmiq/i)).toBeInTheDocument();
  });
});
