import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Profile from "./pages/Profile.jsx";
import FormContextProvider from "./context/PopstateContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <FormContextProvider>
    <RouterProvider router={router} />
  </FormContextProvider>
  // </React.StrictMode>
);
