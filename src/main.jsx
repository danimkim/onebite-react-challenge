import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import MockAuth from "./routes/MockAuth.jsx";
import CurrencyConverter from "./routes/CurrencyConverter.jsx";
import Counter from "./routes/Counter.jsx";
import "./global.css";
import { BASE_URL } from "./constants/constant.js";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${BASE_URL}/mission`,
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
    path: `${BASE_URL}/project`,
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
