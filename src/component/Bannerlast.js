import React  from "react";
import './Bannerlast.css';
import Slidermain from './Slidermain';



const Bannerlast = () => {

return (
    <div className="overflow-x-hidden">
      <div className="flex h-[580px] gap-3 ">
        <div className="w-[15%] sliderside opacity-70">
        </div>
        <div className="w-[70%] overflow-x-hidden">
        <Slidermain/>
        </div>
        <div className="w-[15%] sliderside opacity-70 "></div>
      </div>
    </div>
  );
};
export default Bannerlast;
