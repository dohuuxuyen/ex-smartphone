import React from "react";
import dataHome from "../dataHome";

const Home = () => {
  return (
    <div className="border h-[calc(100vh-70px)] overflow-hidden">
      {dataHome.map((d) => (
        <div className="h-[100%] flex">
          <img src={d.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
