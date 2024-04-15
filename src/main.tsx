import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/main.css";

import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./modules/home";
import { Cursos } from "./modules/Cursos/cursos";
import "./index.css";
import { Auth } from "./modules/auth";
import { Layout } from "./modules/layout";
import { Chat } from "./modules/chat";
import { RelationShip } from "./modules/relationShip";
import { AuthProvider } from "./providers/AuthProvider";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/relationShip",
            element: <RelationShip />,
          },
        ],
      },

      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
    ],
  },
]);

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
