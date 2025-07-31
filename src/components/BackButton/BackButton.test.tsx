import { renderWithRouter } from "@/tests/utils";
import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BackButton } from "./BackButton";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("BackButton component", () => {
  it("should render back button", () => {
    renderWithRouter(<BackButton />);

    const button = screen.getByTestId("back-button");
    expect(button).toBeInTheDocument();
  });

  it('should call navigate("/") on click', () => {
    renderWithRouter(<BackButton />);

    const button = screen.getByTestId("back-button");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
