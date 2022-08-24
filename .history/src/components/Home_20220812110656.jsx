import React from "react";
import dataHome from "../dataHome";

const Home = () => {
  return (
    <div className="border h-[calc(100vh-70px)] w-screen flex relative">
      {dataHome.map((d) => (
        <div className="h-[100%]">
          <img
            className="h-[100%]  w-[100vw] object-cover"
            src={d.img}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
