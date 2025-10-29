import React from "react";
import closeSvg from "../assets/SVGs/close.svg";
import logoSvg from '../assets/SVGs/logo.svg';
import optionsSvg from '../assets/SVGs/options.svg';
import topImg from "../assets/Images/topBgColor.png";

const NavBar = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          className={` px-4 pt-10 pb-5 bg-grey-10 border-b border-grey-15 text-white flex sm:justify-between items-center bg-[url(${topImg})] `}
        >
          <div className="flex text-xs gap-[0.38rem] w-full md:justify-center lg-items-center">
            <p className="">✨Discover Your Dream Property with Estatein</p>
            <p className="">Learn More</p>
          </div>
        </div>
        <div className="p-1 w-fit cursor-pointer rounded-full bg-[#ffffff1a] absolute md:right-4 md:top-1/2 -translate-y-1/2">
          <img className="z-20" src={closeSvg} alt="" />
        </div>
      </div>

      <div className="flex justify-between items-center text-white px-4 py-5 lg:px-20 lg:py-[0.88rem] bg-grey-10 border-b border-[#211e2f]">
        <div className="flex items-center gap-1">
          <img src={logoSvg} alt="" />
          <p className="text-xl">Estatein</p>
        </div>

        <div className="lg:hidden cursor-pointer">
          <img src={optionsSvg} alt="" />
        </div>

        <div className="hidden md:flex gap-4">
          <div className="text-white text-sm cursor-pointer font-medium px-5 py-[0.75rem] rounded-[0.625rem] hover:bg-grey-08 border-grey-10 border hover:border-grey-15">Home</div>
          <div className="text-white text-sm cursor-pointer font-medium px-5 py-[0.75rem] rounded-[0.625rem] hover:bg-grey-08 border-grey-10 border hover:border-grey-15">About Us</div>
          <div className="text-white text-sm cursor-pointer font-medium px-5 py-[0.75rem] rounded-[0.625rem] hover:bg-grey-08 border-grey-10 border hover:border-grey-15">Properties</div>
          <div className="text-white text-sm cursor-pointer font-medium px-5 py-[0.75rem] rounded-[0.625rem] hover:bg-grey-08 border-grey-10 border hover:border-grey-15">Services</div>
         
        </div>

         <button className="hidden lg:flex gap-4 cursor-pointer py-[0.88rem] px-5 rounded-lg border border-grey-15 bg-grey-08">
            Contact us
         </button>
      </div>
    </div>
  );
};

export default NavBar;
