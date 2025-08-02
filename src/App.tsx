import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { SearchProvider } from "./context/search/search-provider";
import { router } from "./router";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </QueryClientProvider>
  );
}
