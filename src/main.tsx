import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/main.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./modules/home";
import { Cursos } from "./modules/Cursos/cursos"
import './index.css'
import { Auth } from "./modules/auth";
import { Layout } from "./modules/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
  {
    path: "cursos",
    element: <Cursos/>
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
