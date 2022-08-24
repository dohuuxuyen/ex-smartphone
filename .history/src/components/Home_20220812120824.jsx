import React, { useState } from "react";
import dataHome from "../dataHome";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
    <div className="flex flex-col">
      <div className="w-[100%] max-w-[1200px] flex items-center justify-between mx-auto overflow-hidden relative">
        <div>Uư đãi giảm 10% khi thanh toán trả trước</div>
        <div className="h-[calc(100vh-70px)] w-[400vw] flex">
          {dataHome.map((d) => (
            <div
              style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
              className="h-[90%] w-[100vw] m-auto"
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
    </div>
  );
};

export default Home;
