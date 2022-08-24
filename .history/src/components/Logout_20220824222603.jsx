import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Logout = ({ activeUser, setActiveUser }) => {
  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] sm:px-2">
        {activeUser && (
          <div className="border w-[250px] flex mx-auto mt-[300px] bg-[#f7faf9] mb-[360px] sm:mb-[400px]">
            <NavLink
              to="/login"
              className="uppercase mx-auto px-6 py-2 text-center font-medium"
            >
              Đăng xuất
            </NavLink>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Logout;
