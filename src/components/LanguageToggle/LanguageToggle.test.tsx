import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LanguageToggle } from "./LanguageToggle";

import * as translateHook from "@/hooks/useTranslate";

vi.mock("@/hooks/useTranslate", () => ({
  useTranslate: () => ({
    currentLanguage: "EN",
    toggleLanguage: vi.fn(),
  }),
}));

describe("LanguageToggle", () => {
  it("renders the current language", () => {
    render(<LanguageToggle />);

    expect(screen.getByTestId("language-toggle-button")).toHaveTextContent(
      "EN"
    );
  });

  it("calls toggleLanguage when button is clicked", () => {
    const buttonSpy = vi.spyOn(translateHook, "useTranslate").mockReturnValue({
      currentLanguage: "PTBR",
      toggleLanguage: vi.fn(),
      setSavedLanguage: vi.fn(),
    });

    render(<LanguageToggle />);

    fireEvent.click(screen.getByTestId("language-toggle-button"));

    expect(buttonSpy).toHaveBeenCalled();
    expect(screen.getByTestId("language-toggle-button")).toHaveTextContent(
      "PTBR"
    );
  });
});
