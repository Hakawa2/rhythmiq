import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the header element", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders the main title", () => {
    render(<Header />);
    const title = screen.getByRole("heading", { name: /rhythmiq/i });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Rhythmiq");
  });

  it("renders the subtitle", () => {
    render(<Header />);
    const subtitle = screen.getByText(/descubra seu novo artista favorito/i);
    expect(subtitle).toBeInTheDocument();
  });
});
