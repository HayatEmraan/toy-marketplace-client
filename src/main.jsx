import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import OneContext from "./Context/OneContext";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <OneContext>
    <RouterProvider router={router}></RouterProvider>
  </OneContext>
);
