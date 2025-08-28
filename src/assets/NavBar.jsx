import React from "react";
import closeSvg from "../assets/SVGs/close.svg";

const NavBar = () => {
  return (
    <div>
      <div className="px-4 pt-10 pb-5 bg-grey-10 border-b border-grey-15 text-white flex sm:justify-between">
        <div className="flex text-xs gap-[0.38rem]">
          <p>✨Discover Your Dream Property with Estatein</p>
          <p className="">Learn More</p>
        </div>
      </div>
      <div className="p-1 rounded-full bg-[#ffffff1a]">
        <img className="z-20" src={closeSvg} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
