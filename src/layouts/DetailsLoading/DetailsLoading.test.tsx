import { detailsConfig } from "@/config/details.config";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DetailsLoading } from "./DetailsLoading";

describe("DetailsLoading", () => {
  it("renders main container with correct aria-label", () => {
    render(<DetailsLoading />);
    expect(screen.getByLabelText("carregando")).toBeInTheDocument();
  });

  it("renders hero and header skeletons", () => {
    render(<DetailsLoading />);

    expect(screen.getAllByTestId("skeleton-loading")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("skeleton-loading")[1]).toBeInTheDocument();
  });

  it("renders correct number of track skeletons", () => {
    render(<DetailsLoading />);
    const trackSkeletons = screen.getAllByTestId("skeleton-loading").slice(2);
    expect(trackSkeletons.length).toBe(detailsConfig.tracksSkeleton.quantity);
  });
});
