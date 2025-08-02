import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTranslate } from "./useTranslate";

const mockChangeLanguage = vi.fn();
const mockI18n = {
  language: "en",
  changeLanguage: mockChangeLanguage,
};
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: mockI18n,
  }),
}));

describe("useTranslate", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.clear();
    mockI18n.language = "en";
  });

  it("returns currentLanguage in uppercase", () => {
    const { result } = renderHook(() => useTranslate());
    expect(result.current.currentLanguage).toBe("EN");
  });

  it("toggleLanguage switches language from 'en' to 'ptBr'", () => {
    const { result } = renderHook(() => useTranslate());
    act(() => {
      result.current.toggleLanguage();
    });
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "language",
      "ptBr"
    );
    expect(mockChangeLanguage).toHaveBeenCalledWith("ptBr");
  });

  it("toggleLanguage switches language from 'ptBr' to 'en'", () => {
    mockI18n.language = "ptBr";
    const { result } = renderHook(() => useTranslate());
    act(() => {
      result.current.toggleLanguage();
    });
    expect(window.localStorage.setItem).toHaveBeenCalledWith("language", "en");
    expect(mockChangeLanguage).toHaveBeenCalledWith("en");
  });

  it("setSavedLanguage uses stored language if available", () => {
    window.localStorage.setItem("language", "ptBr");
    const { result } = renderHook(() => useTranslate());
    act(() => {
      result.current.setSavedLanguage();
    });
    expect(mockChangeLanguage).toHaveBeenCalledWith("ptBr");
  });

  it("setSavedLanguage defaults to 'en' if no stored language", () => {
    const { result } = renderHook(() => useTranslate());
    act(() => {
      result.current.setSavedLanguage();
    });
    expect(mockChangeLanguage).toHaveBeenCalledWith("en");
  });
});
