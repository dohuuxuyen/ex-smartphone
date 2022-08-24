import React from "react";
import dataHome from "../dataHome";

const Home = () => {
  return (
    <div className="w-[100vw] ">
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
    </div>
  );
};

export default Home;
