import { paginationMock } from "@/tests/mocks/pagination";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PaginationController } from "./PaginationController";

describe("PaginationController", () => {
  it("renders nothing if pagination prop is not provided", () => {
    const { container } = render(
      <PaginationController handleNewPage={vi.fn()} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders pagination controls when pagination prop is provided", () => {
    render(
      <PaginationController
        pagination={paginationMock}
        handleNewPage={vi.fn()}
      />
    );

    expect(screen.getByTestId("pagination-previous")).toBeInTheDocument();
    expect(screen.getByTestId("pagination-next")).toBeInTheDocument();
  });

  it("calls handleNewPage with previous when previous button is clicked", () => {
    const handleNewPage = vi.fn();

    render(
      <PaginationController
        pagination={paginationMock}
        handleNewPage={handleNewPage}
      />
    );

    const prevButton = screen.getByTestId("pagination-previous");
    fireEvent.click(prevButton);

    expect(handleNewPage).toHaveBeenCalledWith("prev-page");
  });

  it("calls handleNewPage with next when next button is clicked", () => {
    const handleNewPage = vi.fn();

    render(
      <PaginationController
        pagination={paginationMock}
        handleNewPage={handleNewPage}
      />
    );

    const nextButton = screen.getByTestId("pagination-next");
    fireEvent.click(nextButton);

    expect(handleNewPage).toHaveBeenCalledWith("next-page");
  });
});
