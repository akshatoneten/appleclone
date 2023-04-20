import React from "react";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner flex flex-col justify-start items-center bg-black pt-4 h-[600px]  ">
      <h2 className="text-white text-[55px] font-semibold">iPhone 14 Pro</h2>
      <h5 className="text-white text-[32px] ">Pro. Beyond.</h5>
      <div className="flex text-[18px] font-semibold gap-[50px] text-blue-600 pt-3">
        <p >Learn more > </p>
        <p>Buy > </p>
      </div>
    </div>
  );
};

export default Banner;
