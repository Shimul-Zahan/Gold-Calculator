import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider.jsx";
import "./index.css";
import Router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={Router}></RouterProvider>
            <Toaster/>
        </AuthProvider>
    </React.StrictMode>
);
