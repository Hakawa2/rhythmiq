import { detailsHeaderMock } from "@/tests/mocks/details-header";
import { renderWithRouter } from "@/tests/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DetailsHeader } from "./DetailsHeader";

describe("Details Header component", () => {
  it("should render details header", () => {
    renderWithRouter(<DetailsHeader {...detailsHeaderMock} />);

    const text = screen.getByRole("heading");
    expect(text.textContent).toBe("mock-title");
  });

  it("should render back button", () => {
    renderWithRouter(<DetailsHeader {...detailsHeaderMock} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
