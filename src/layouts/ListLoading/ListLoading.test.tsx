import { listConfig } from "@/config/list.config";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ListLoading } from "./ListLoading";

describe("ListLoading", () => {
  it("renders a container with correct aria-label", () => {
    render(<ListLoading />);
    expect(screen.getByLabelText("carregando")).toBeInTheDocument();
  });

  it("renders the correct number of SkeletonLoading components", () => {
    render(<ListLoading />);

    expect(screen.getAllByTestId("skeleton-loading")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("skeleton-loading")[1]).toBeInTheDocument();
  });

  it("passes correct props to SkeletonLoading", () => {
    render(<ListLoading />);
    const trackSkeletons = screen.getAllByTestId("skeleton-loading");
    expect(trackSkeletons.length).toBe(listConfig.quantity);
  });
});
