import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import ErrorPage from "./error-page.jsx";
import MockAuth from "./routes/MockAuth.jsx";
import CurrencyConverter from "./routes/CurrencyConverter.jsx";
import Counter from "./routes/Counter.jsx";
import "./global.css";
import { BASE_URL } from "./constants/constant.js";
import Todolist from "./routes/Todolist.jsx";
import Contacts from "./routes/Contacts.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: `mission`,
      children: [
        {
          path: "day10",
          element: <MockAuth />,
        },
        {
          path: "day13",
          element: <CurrencyConverter />,
        },
        {
          path: "day15",
          element: <Contacts />,
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: `project`,
      children: [
        {
          path: "counter",
          element: <Counter />,
        },
        {
          path: "todolist",
          element: <Todolist />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: `/${BASE_URL}`,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
