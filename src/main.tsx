import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/main.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./modules/home";
import { Auth } from "./modules/auth";
import { Layout } from "./modules/layout";
import { Chat } from "./modules/chat";
import { RelationShip } from "./modules/relationShip";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
