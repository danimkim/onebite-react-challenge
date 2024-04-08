import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import MockAuth from "./routes/MockAuth.jsx";
import CurrencyConverter from "./routes/CurrencyConverter.jsx";
import Counter from "./routes/Counter.jsx";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "mission",
    children: [
      {
        path: "day10",
        element: <MockAuth />,
      },
      {
        path: "day13",
        element: <CurrencyConverter />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "project",
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
