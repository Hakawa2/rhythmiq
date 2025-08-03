import "@testing-library/jest-dom";
import i18next from "i18next";
import { vi } from "vitest";

import "../i18n";

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(global, "localStorage", {
  value: localStorageMock,
});

vi.stubEnv("VITE_CLIENT_ID", "test-client-id");
vi.stubEnv("VITE_CLIENT_SECRET", "test-client-secret");

export const mockNavigate = vi.fn();

i18next.changeLanguage("ptBr");

vi.mock("react-i18next", async () => {
  const actual = await vi.importActual<typeof import("react-i18next")>(
    "react-i18next"
  );

  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string, opts?: Record<string, unknown>) => {
        if (key === "search") return `Search ${opts?.term ?? ""}`;
        if (key === "albums") return "Albums";
        if (key === "clean") return "Clean";
        return i18next.t(key);
      },
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }),
  };
});

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useParams: vi.fn(() => ({ id: "123" })),
    useNavigate: () => mockNavigate,
    RouterProvider: () => <div data-testid="router-provider" />,
  };
});
