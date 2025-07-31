import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { SearchProvider } from "./context/search/search-provider";
import { useTranslate } from "./hooks/useTranslate";
import { router } from "./router";

export function App() {
  const { setSavedLanguage } = useTranslate();
  const queryClient = new QueryClient();

  setSavedLanguage();
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </QueryClientProvider>
  );
}
