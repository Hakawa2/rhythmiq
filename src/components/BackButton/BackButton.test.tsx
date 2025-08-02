import { mockNavigate } from "@/tests/setupTests";
import { renderWithRouter } from "@/tests/utils";
import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BackButton } from "./BackButton";

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
