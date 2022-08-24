import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] border border-gray-500">
      <div className="w-[100%] max-w-[1200px] h-[100%] px-[50px] flex items-center justify-between">
        <ul className="flex">
          <li>
            <NavLink to="/" className="font-medium p-[10px]">
              TRANG CHỦ
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="font-medium p-[10px]">
              SẢN PHẨM
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="font-medium p-[10px]">
              GIỚI THIỆU
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="font-medium p-[10px]">
              LIÊN HỆ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
