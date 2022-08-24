import React, { useState } from "react";
import dataHome from "../dataHome";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="w-[100vw] overflow-hidden relative">
      <div className="h-[calc(100vh-70px)] w-[400vw] flex">
        {dataHome.map((d) => (
          <div className="h-[100%] w-[100vw]">
            <img
              className="h-[100%]  w-[100%] object-cover"
              src={d.img}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="absolute left-5 top-[50%] text-4xl opacity-50">
        <FaAngleLeft className="text-[#F7FAF9]" />
      </div>
      <div className="absolute right-5 top-[50%] text-4xl opacity-50">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default Home;
