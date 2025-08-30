import React from "react";
import closeSvg from "../assets/SVGs/close.svg";
import logoSvg from '../assets/SVGs/logo.svg';
import optionsSvg from '../assets/SVGs/options.svg';
import topImg from "../assets/Images/topBgColor.png";

const NavBar = () => {
  return (
    <div className="flex flex-col">
      <div>
        <div
          className={` px-4 pt-10 pb-5 bg-grey-10 border-b border-grey-15 text-white flex sm:justify-between items-center bg-[url(${topImg})] `}
        >
          <div className="flex text-xs gap-[0.38rem]">
            <p>✨Discover Your Dream Property with Estatein</p>
            <p className="">Learn More</p>
          </div>
        </div>
        <div className="p-1 w-fit rounded-full bg-[#ffffff1a]">
          <img className="z-20" src={closeSvg} alt="" />
        </div>
      </div>

      <div className="flex justify-between text-white px-4 py-5 bg-grey-10 border-b border-[#211e2f]">
        <div className="flex items-center gap-1">
          <img src={logoSvg} alt="" />
          <p className="text-xl">Estatein</p>
        </div>
        <div className="cursor-pointer">
          <img src={optionsSvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
