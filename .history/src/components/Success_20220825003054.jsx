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
        <div className="mt-[300px] mx-auto">
          <h2>Bạn đã đặt hàng thành công!</h2>
          <div className="border w-[250px] flex   bg-[#f7faf9] mb-[360px] sm:mb-[400px]">
            <NavLink
              to="/products"
              className="uppercase mx-auto px-6 py-2 text-center font-medium"
            >
              Tiếp tục mua hàng
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
