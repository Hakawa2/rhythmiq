import { detailsHeaderMock } from "@/tests/mocks/details-header";
import { renderWithRouter } from "@/tests/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DetailsHeader } from "./DetailsHeader";

describe("Details Header component", () => {
  it("should render the header with the correct test id", () => {
    renderWithRouter(<DetailsHeader {...detailsHeaderMock} />);

    expect(screen.getByTestId("details-header")).toBeInTheDocument();
  });

  it("should render the BackButton component", () => {
    renderWithRouter(<DetailsHeader {...detailsHeaderMock} />);

    const backButton = screen.getByRole("button");

    expect(backButton).toBeInTheDocument();
  });

  it("should render the image with correct src and alt", () => {
    renderWithRouter(<DetailsHeader {...detailsHeaderMock} />);

    const img = screen.getByRole("img", { hidden: true });

    expect(img).toHaveAttribute("src", detailsHeaderMock.image);
  });

  it("should render the title, subtitle, description, and optional information", () => {
    renderWithRouter(<DetailsHeader {...detailsHeaderMock} />);

    expect(screen.getByText(detailsHeaderMock.title)).toBeInTheDocument();
    expect(
      screen.getByText(detailsHeaderMock.subtitle.key)
    ).toBeInTheDocument();
    expect(
      screen.getByText(detailsHeaderMock.description.key)
    ).toBeInTheDocument();
    expect(
      screen.getByText(detailsHeaderMock.optionalInformation.key)
    ).toBeInTheDocument();
  });
});
