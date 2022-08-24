import React, { useState } from "react";
import dataHome from "../dataHome";
import { FaAngleLeft, FaAngleRight, FaRegHandshake } from "react-icons/fa";
import { BiShoppingBag, BiCreditCard } from "react-icons/bi";
import { RiVipDiamondLine } from "react-icons/ri";
import data from "../data";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let dataHomeLength = dataHome.length;
  const handleLeft = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0);
  };
  const handleRight = () => {
    setCurrentSlide(currentSlide < dataHomeLength - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="w-[100%] max-w-[1200px] mx-auto">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>
      <div className=" flex items-center justify-between mx-auto overflow-hidden ">
        <div className="h-[calc(100vh-102px)] w-[400vw] flex relative">
          {dataHome.map((d) => (
            <div
              style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
              className="h-[90%] w-[100vw]"
            >
              <img
                className="h-[100%]  w-[100%] object-fill"
                src={d.img}
                alt=""
              />
            </div>
          ))}
        </div>
        <div
          onClick={handleLeft}
          className="absolute left-5 top-[50%] text-4xl cursor-pointer opacity-50 "
        >
          <FaAngleLeft />
        </div>
        <div
          onClick={handleRight}
          className="absolute right-5 top-[50%] text-4xl cursor-pointer opacity-50 p-3"
        >
          <FaAngleRight />
        </div>
      </div>

      <div className="flex justify-between mb-6">
        <img
          className="w-[32%] h-[369px] object-fill"
          src="./assets/images/logo/xiaomi.png"
          alt=""
        />
        <img
          className="w-[32%] h-[369px] object-fill"
          src="./assets/images/logo/apple.jpg"
          alt=""
        />
        <img
          className="w-[32%] h-[369px] object-fill"
          src="./assets/images/logo/samsung.png"
          alt=""
        />
      </div>
      <div className="h-[calc(100vh-70px)] bg-[#F7FAF9] flex items-center justify-center">
        <div className="w-[1076px] h-[500px] flex justify-between flex-col">
          <h2 className="text-[39px] font-semibold text-center">
            SẢN PHẨM MỚI
          </h2>
          <div className="flex">
            {data
              .filter((f) => f.newsProducts)
              .map((d, index) => (
                <div className="m-auto text-center">
                  <img
                    key={index}
                    className="w-[224px] h-[281px] object-cover"
                    src={d.newsProducts}
                    alt=""
                  />
                  <h3 className="mt-4">{d.title}</h3>
                  <p className="my-3">{d.sizes[0].price}</p>
                  <button className="border rounded border-black bg-black text-white font-semibold p-2 hover:bg-white hover:text-black">
                    CHỌN MUA
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12 ">
        <div className="flex items-center h-[84px] w-[23.5%] border border-gray-500 rounded-md">
          <BiShoppingBag className="h-10 w-10 mx-5" />
          <div>
            <h3 className="font-semibold mb-1">Miễn phí giao hàng</h3>
            <span className="text-sm block opacity-70">
              Miễn phí ship với đơn hàng > 2 sản phẩm
            </span>
          </div>
        </div>
        <div className="flex items-center h-[84px] w-[23.5%] border border-gray-500 rounded-md">
          <BiCreditCard className="h-10 w-10 mx-5" />
          <div>
            <h3 className="font-semibold mb-1">Thanh toán COD</h3>
            <span className="text-sm block opacity-70">
              Thanh toán khi nhận hàng (COD)
            </span>
          </div>
        </div>
        <div className="flex items-center h-[84px] w-[23.5%] border border-gray-500 rounded-md">
          <RiVipDiamondLine className="h-10 w-10 mx-5" />
          <div>
            <h3 className="font-semibold mb-1">Khách hàng VIP</h3>
            <span className="text-sm block opacity-70">
              Ưu đãi dành cho khách hàng VIP
            </span>
          </div>
        </div>
        <div className="flex items-center h-[84px] w-[23.5%] border border-gray-500 rounded-md">
          <FaRegHandshake className="h-10 w-10 mx-5" />
          <div>
            <h3 className="font-semibold mb-1">Hỗ trợ bảo hành</h3>
            <span className="text-sm block opacity-70">
              Đổi, sửa đồ tại tất cả stores
            </span>
          </div>
        </div>
      </div>
      {data.filter((lls) => lls.category).map()}
    </div>
  );
};

export default Home;