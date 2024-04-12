import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./modules/home";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
