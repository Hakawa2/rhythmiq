import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SearchProvider } from "./search-provider";
import { useSearchContext } from "./useSearchContext";

function TestComponent() {
  const { state, dispatch } = useSearchContext();
  return (
    <div>
      <span data-testid="offset">{state.offset}</span>
      <button onClick={() => dispatch({ type: "SET_OFFSET", payload: "5" })}>
        Set Offset
      </button>
    </div>
  );
}

describe("SearchContext", () => {
  it("provides initial state", () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    expect(screen.getByTestId("offset").textContent).toBe("0");
  });

  it("updates state via dispatch", () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    const btn = screen.getByText("Set Offset");
    fireEvent.click(btn);

    expect(screen.getByTestId("offset").textContent).toBe("5");
  });
});
