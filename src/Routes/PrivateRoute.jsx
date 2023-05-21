import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/OneContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(authContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={location} ></Navigate>;
  }
  return children;
};

export default PrivateRoute;
