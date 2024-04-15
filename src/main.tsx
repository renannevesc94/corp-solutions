import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./modules/home";
import { Auth } from "./modules/auth";
import { Layout } from "./modules/layout";
import { AuthProvider } from "./providers/AuthProvider";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <AuthProvider />,
        children: [
          {
            path: "/auth",
            element: <Auth />,
          },
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
