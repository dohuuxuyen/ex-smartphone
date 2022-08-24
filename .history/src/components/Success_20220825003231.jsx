import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Success = ({ activeUser, setActiveUser }) => {
  const handleLogout = () => {
    setActiveUser(false);
  };
  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] sm:px-2">
        <div className="mt-[250px] flex flex-col items-center justify-center">
          <h2>Bạn đã đặt hàng thành công!</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
