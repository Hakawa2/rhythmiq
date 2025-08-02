import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { SearchContext } from "./search-context";
import { SearchProvider } from "./search-provider";

describe("SearchProvider", () => {
  it("renders children", () => {
    render(
      <SearchProvider>
        <div data-testid="child">Child</div>
      </SearchProvider>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("provides context value with state and dispatch", () => {
    let contextValue = null;
    const TestComponent = () => {
      contextValue = React.useContext(SearchContext);
      return null;
    };

    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    expect(contextValue).toBeDefined();
    expect(contextValue).toHaveProperty("state");
    expect(contextValue).toHaveProperty("dispatch");
  });
});
