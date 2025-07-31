import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchHandler } from "./SearchHandler";

vi.mock("@/layouts/DetailsLoading/DetailsLoading", () => ({
  DetailsLoading: () => <div data-testid="details-loading" />,
}));

vi.mock("@/layouts/ListLoading/ListLoading", () => ({
  ListLoading: () => <div data-testid="list-loading" />,
}));

describe("SearchHandler", () => {
  it("renders ListLoading when isLoading is true and type is 'list'", () => {
    render(
      <SearchHandler isLoading={true} isError={false} type="list">
        <div>children</div>
      </SearchHandler>
    );

    expect(screen.getByTestId("list-loading")).toBeInTheDocument();
  });

  it("renders DetailsLoading when isLoading is true and type is 'details'", () => {
    render(
      <SearchHandler isLoading={true} isError={false} type="details">
        <div>children</div>
      </SearchHandler>
    );

    expect(screen.getByTestId("details-loading")).toBeInTheDocument();
  });

  it("renders error message when isError is true", () => {
    render(
      <SearchHandler isLoading={false} isError={true} type="list">
        <div>children</div>
      </SearchHandler>
    );

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Erro ao carregar dados 😢"
    );
  });

  it("renders empty message when isEmpty is true", () => {
    render(
      <SearchHandler
        isLoading={false}
        isError={false}
        isEmpty={true}
        type="list"
      >
        <div>children</div>
      </SearchHandler>
    );

    expect(screen.getByTestId("empty-message")).toHaveTextContent(
      "Nenhum Resultado foi encontrado 😢"
    );
  });

  it("renders children when not loading, not error, and not empty", () => {
    render(
      <SearchHandler
        isLoading={false}
        isError={false}
        isEmpty={false}
        type="list"
      >
        <div data-testid="children">children content</div>
      </SearchHandler>
    );

    expect(screen.getByTestId("children")).toHaveTextContent(
      "children content"
    );
  });

  it("renders children when isEmpty is undefined", () => {
    render(
      <SearchHandler isLoading={false} isError={false} type="list">
        <div data-testid="children">children content</div>
      </SearchHandler>
    );

    expect(screen.getByTestId("children")).toHaveTextContent(
      "children content"
    );
  });
});
