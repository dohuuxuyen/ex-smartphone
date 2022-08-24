import React from "react";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] border border-gray-500 bg-[#F7FAF9]">
      <div className="w-[100%] max-w-[1200px] h-[100%] flex items-center justify-between mx-auto">
        <ul className="flex">
          <li>
            <NavLink to="/" className=" p-[10px]">
              TRANG CHỦ
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className=" p-[10px]">
              SẢN PHẨM
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className=" p-[10px]">
              GIỚI THIỆU
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className=" p-[10px]">
              LIÊN HỆ
            </NavLink>
          </li>
        </ul>
        <div className="ml-[-15%] ">Logo</div>
        <div>
          <button className="flex  border rounded border-black bg-white p-2">
            <FiLogIn />
            ĐĂNG NHẬP
          </button>
          <button>GIỎ HÀNG</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
