import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={location} ></Navigate>;
  }
  return children;
};

export default PrivateRoute;
