import React from "react";
import "./Bannerb.css";

const Bannerb = () => {
  return (
    <div className="bannerb flex flex-col justify-start items-center bg-black pt-4 h-[600px] ">
      <h2 className="text-black text-[55px] font-semibold">iPhone 14</h2>
      <div className="flex text-center text-black text-[32px]">
        <p>
          Two great sizes. <br></br> Now with a splash of yellow
        </p>
      </div>
      <div className="flex text-[18px] font-semibold gap-[50px] text-blue-600 pt-3">
        <p>Learn more > </p>
        <p>Buy > </p>
      </div>
    </div>
  );
};

export default Bannerb;
