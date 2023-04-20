import React from "react";
import whitelogo from "../images/white logo.png";
import "./Bannerc.css";

const Bannerc = () => {
  return (
    <div className="bannerc flex flex-col justify-start items-center bg-black pt-6 h-[600px]">
      <div className="flex items-center gap-2 ">
        <img src={whitelogo} className="w-10"></img>
        <h2 className="text-white text-[50px] font-semibold">WATCH</h2>
      </div>
      <h5 className="text-red-700 text-[35px] font-semibold">SERIES 8</h5>
      <p className="text-[26px] text-white" >A healthy leap ahead</p>
      <div className="flex text-[18px] font-semibold gap-[50px] text-blue-600 pt-3">
        <p>Learn more > </p>
        <p>Buy > </p>
      </div>
    </div>
  );
};

export default Bannerc;
