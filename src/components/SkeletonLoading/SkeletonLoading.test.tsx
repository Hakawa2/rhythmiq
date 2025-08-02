import { skeletonsMock } from "@/tests/mocks/skeleton";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SkeletonLoading } from "./SkeletonLoading";

vi.mock("../ui/skeleton", () => ({
  Skeleton: ({ className }: { className?: string }) => (
    <div data-testid="skeleton" className={className} />
  ),
}));

describe("SkeletonLoading", () => {
  it("renders the correct number of skeletons", () => {
    render(<SkeletonLoading skeletons={skeletonsMock} />);
    const skeletonElements = screen.getAllByTestId("skeleton");
    expect(skeletonElements).toHaveLength(2);
  });

  it("applies the containerClassName to the wrapper div", () => {
    render(
      <SkeletonLoading
        skeletons={skeletonsMock}
        containerClassName="test-container"
      />
    );
    const container = screen.getByTestId("skeleton-loading");
    expect(container).toHaveClass("test-container");
  });

  it("applies the correct className to each Skeleton", () => {
    render(<SkeletonLoading skeletons={skeletonsMock} />);

    const skeletonElements = screen.getAllByTestId("skeleton");

    expect(skeletonElements[0]).toHaveClass("h-4 w-4");
    expect(skeletonElements[1]).toHaveClass("h-8 w-8");
  });
});
