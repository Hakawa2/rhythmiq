import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with the correct value and placeholder", () => {
    render(
      <Input value="test value" setValue={() => {}} placeholder="Enter text" />
    );

    const input = screen.getByPlaceholderText("Enter text") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("test value");
  });

  it("calls setValue on change", () => {
    const setValue = vi.fn();

    render(<Input value="" setValue={setValue} placeholder="Type here" />);

    const input = screen.getByPlaceholderText("Type here");
    fireEvent.change(input, { target: { value: "abc" } });

    expect(setValue).toHaveBeenCalledWith("abc");
  });

  it("applies the correct class names", () => {
    render(<Input value="" setValue={() => {}} placeholder="Class test" />);

    const input = screen.getByPlaceholderText("Class test");

    expect(input).toHaveClass(
      "w-full",
      "p-3",
      "rounded-xl",
      "text-white",
      "placeholder-gray-500",
      "outline-none",
      "ring-2",
      "ring-purple-400"
    );
  });
});
