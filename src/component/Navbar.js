import React from "react";
import logogray from "../images/apple logo gray.png";
import navbaricon from "../images/navbar_icons_apple.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    {/* first */}
    <div className="w-full flex  items-center flex-col bg-[#424244]  h-[50px]">
      <ul className="flex items-center pt-2 gap-12">
        <NavLink to="/">
          <img src={logogray} className="w-[20px]"></img>
        </NavLink>
        <NavLink to="/Store" className="text-[#d7d7d7] text-[12px]">Store</NavLink>
        <NavLink to="/Mac" className="text-[#d7d7d7] text-[12px]">Mac</NavLink>
        <NavLink to="/Ipad" className="text-[#d7d7d7] text-[12px]">iPad</NavLink>
        <NavLink to="/Iphone" className="text-[#d7d7d7] text-[12px]">iPhone</NavLink>
        <NavLink to="/Watch" className="text-[#d7d7d7] text-[12px]">Watch</NavLink>
        <NavLink to="/Airpods" className="text-[#d7d7d7] text-[12px]">AirPods</NavLink>
        <NavLink to="/Tvhome" className="text-[#d7d7d7] text-[12px]">TV & Home</NavLink>
        <NavLink to="/Entertainment" className="text-[#d7d7d7] text-[12px]">Entertainment</NavLink>
        <NavLink to="/Accessories" className="text-[#d7d7d7] text-[12px]">Accessories</NavLink>
        <NavLink to="/Support" className="text-[#d7d7d7] text-[12px]">Support</NavLink>
        <li>
          <img src={navbaricon}></img>
        </li>
      </ul>
    </div>
    {/* second */}
    <div className="bg-[#f5f5f7] h-[55px] flex justify-center items-center">
        <p className="text-[#868585]">Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.<span className="text-blue-400 "> <a href="https://amzn.eu/d/h88EHAI">Shop iPhone</a></span></p>
    </div>

    </div>
    
  );
};

export default Navbar;
