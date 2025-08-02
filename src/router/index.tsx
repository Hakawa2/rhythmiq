import MainLayout from "@/layouts/MainLayout/MainLayout";
import { Albums } from "@/pages/Albums/Albums";
import { Artists } from "@/pages/Artists/Artists";
import { Home } from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "artists/:id", element: <Artists /> },
        { path: "albums/:id", element: <Albums /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: import.meta.env.PROD ? "/rhythmiq" : "/",
  }
);
