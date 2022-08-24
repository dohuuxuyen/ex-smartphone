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
      <div className="absolute l-5  ">
        <FaAngleLeft />
      </div>
      <div>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default Home;
