import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>
);
