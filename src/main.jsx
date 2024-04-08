import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Day10 from "./routes/Day10.jsx";
import CurrencyCalculator from "./routes/CurrencyCalculator.jsx";

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
        element: <Day10 />,
      },
      {
        path: "day13",
        element: <CurrencyCalculator />,
      },
    ],
    path: "/day10",
    element: <Day10 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
