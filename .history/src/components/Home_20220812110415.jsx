import React from "react";
import dataHome from "../dataHome";

const Home = () => {
  return (
    <div className="border h-[calc(100vh-70px)] w-screen">
      {dataHome.map((d) => (
        <div className="h-[100%] flex">
          <img className="h-[100%]  w-[100%] object-cover" src={d.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
