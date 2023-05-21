import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import LogIn from "../SEC/LogIn/LogIn";
import Register from "../SEC/Register/Register";
import NotFound from "../Pages/404/NotFound";
import Forgot from "../SEC/Forgot/Forgot";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blog/Blogs";
import Edit from "../libs/Edit/Edit";
import Details from "../libs/Details/Details";
import Private0 from "./private0";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit/:id",
        element: (
          <PrivateRoute>
            <Edit />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Private0>
            <Details />
          </Private0>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
