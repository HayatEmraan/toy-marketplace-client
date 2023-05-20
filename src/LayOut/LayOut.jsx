import React, { useContext } from "react";
import Header from "../Shared/Header/Header";
import FooterComponents from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { authContext } from "../Context/OneContext";
import Loader from "../libs/Loader/Loader";

const LayOut = () => {
  const { loading } = useContext(authContext);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Header />
        <div className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </div>
        <FooterComponents />
      </div>
    );
  }
  
};

export default LayOut;
