import React, { useState } from "react";
import { useSelector } from "react-redux/";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ activeUser }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const state = useSelector((state) => state.productReducer);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleRemoveMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className=" h-[70px] bg-[#F7FAF9] fixed inset-x-0 top-0 z-[999] sm:overflow-hidden">
      <div className=" h-[100%] flex items-center w-[100%] max-w-[1200px] justify-between sm:px-2 mx-auto ">
        {!openMenu ? (
          <ul className=" flex sm:fixed sm:right-[-200px] sm:top-0 sm:bottom-0 sm:bg-[#F7FAF9] sm:mt-[70px] sm:justify-center sm:items-center sm:py-[200px] sm:w-[200px] sm:flex-col sm:text-[25px]">
            <li className="sm:mb-1">
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
            <li className="sm:my-1">
              <NavLink
                to="/about"
                className="py-2 mr-3 font-semibold opacity-50"
              >
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
        ) : (
          <ul className="flex sm:fixed sm:right-0 sm:top-0 sm:bottom-0 sm:bg-[#F7FAF9] sm:mt-[70px] sm:justify-center sm:items-center sm:py-[200px] sm:w-[200px] sm:flex-col sm:text-[25px]">
            <li onClick={handleRemoveMenu} className="sm:mb-1">
              <NavLink to="/" className="py-2 mr-3 font-semibold opacity-50">
                TRANG CHỦ
              </NavLink>
            </li>
            <li onClick={handleRemoveMenu}>
              <NavLink
                to="/products"
                className="py-2 mr-3 font-semibold opacity-50"
              >
                SẢN PHẨM
              </NavLink>
            </li>
            <li onClick={handleRemoveMenu} className="sm:my-1">
              <NavLink
                to="/about"
                className="py-2 mr-3 font-semibold opacity-50"
              >
                GIỚI THIỆU
              </NavLink>
            </li>
            <li onClick={handleRemoveMenu}>
              <NavLink
                to="/contact"
                className="py-2 mr-3 font-semibold opacity-50"
              >
                LIÊN HỆ
              </NavLink>
            </li>
          </ul>
        )}
        <NavLink
          to="/"
          className="ml-[-5%] text-xl font-semibold text-red-500 sm:ml-0 sm:text-[17px] sm:w-[100px] sm:text-center "
        >
          EX SMARTPHONE
        </NavLink>
        <div className="flex ">
          {activeUser ? (
            <div className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white mr-2 sm:text-[12px]  sm:h-[36px] sm:px-1">
              <FaUserCircle className="mr-2" />
              Admin
            </div>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white mr-2 sm:text-[12px] sm:h-[36px] sm:px-1"
            >
              <FiLogIn className="mr-2 sm:mr-1" />
              ĐĂNG NHẬP
            </NavLink>
          )}
          <NavLink
            to="/cart"
            className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white sm:text-[12px]  sm:h-[36px] sm:px-1"
          >
            <FiShoppingCart className="mr-2 sm:mr-1" />
            GIỎ HÀNG
            <p className="ml-1">({state.length})</p>
          </NavLink>
        </div>
        <div className="hidden sm:block">
          {!openMenu ? (
            <div className="sm:text-[28px] cursor-pointer" onClick={handleMenu}>
              <AiOutlineMenu />
            </div>
          ) : (
            <div className="sm:text-[28px] cursor-pointer" onClick={handleMenu}>
              <AiOutlineClose />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;