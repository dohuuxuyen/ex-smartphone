import React from "react";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] bg-[#F7FAF9] ">
      <div className="w-[100%] max-w-[1200px] h-[100%] flex items-center justify-between ">
        <ul className="flex">
          <li>
            <NavLink to="/" className="py-2 mr-3 font-semibold opacity-50">
              TRANG CHỦ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="py-2 mr-3 font-semibold opacity-50"
            >
              SẢN PHẨM
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="py-2 mr-3 font-semibold opacity-50">
              GIỚI THIỆU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="py-2 mr-3 font-semibold opacity-50"
            >
              LIÊN HỆ
            </NavLink>
          </li>
        </ul>
        <div className="ml-[-15%] ">Logo</div>
        <div className="flex ">
          <button className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white mr-2">
            <FiLogIn className="mr-2" />
            ĐĂNG NHẬP
          </button>
          <button className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white">
            <FiShoppingCart className="mr-2" />
            GIỎ HÀNG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
