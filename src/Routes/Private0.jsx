import React, { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../Context/OneContext";
import { Navigate, useLocation } from "react-router-dom";

const Private0 = ({ children }) => {
  const { user } = useContext(authContext);
  const location = useLocation();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    width: "26em",
  });
  const oneFireReturn = () => {
    Toast.fire({
      icon: "info",
      title: "You have to logIn First to View Details!",
    });
    setTimeout(() => {
      <Navigate to="/login" state={location}></Navigate>;
    }, 2000);
  };
  if (!user) {
    return <Navigate to="/login" state={location}></Navigate>;
  } else {
      return children;
  }
  
};

export default Private0;
