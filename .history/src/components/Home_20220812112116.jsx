import React from "react";
import dataHome from "../dataHome";

const Home = () => {
  return (
    <div className="">
      <div className="h-[calc(100vh-70px)] w-[400vw] flex overflow-hidden">
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
    </div>
  );
};

export default Home;
