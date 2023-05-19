import React from "react";
import Header from "../Shared/Header/Header";
import FooterComponents from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
          <Header />
          <div className="min-h-[calc(100vh-120px)]">
              <Outlet/>
          </div>
          <FooterComponents/>
    </div>
  );
};

export default LayOut;
