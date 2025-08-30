import React from "react";
import homePng from "../assets/Images/home-img.png";
import AttributesCard from "./Cards/AttributesCard";
import homeSvg from '../assets/SVGs/home.svg'
import sunSvg from '../assets/SVGs/sun.svg'
import cameraSvg from '../assets/SVGs/camera.svg'
import estateSvg from '../assets/SVGs/estate.svg'

const Main = () => {
  return (
    <main className="py-10 px-4 text-white">
      <div className="rounded-2xl bg-grey-08 w-full">
        <div className="rounded-2xl relative">
          <img
            className="w-full rounded-2xl  bg-gradient-to-r from-[#2a213f] to-[#191919]"
            src={homePng}
            alt=""
          />
        </div>
        <div className="py-4 flex flex-col gap-4">
          <h1 className="text-[1.75rem] font-semibold">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-sm font-medium text-grey-60">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <div className="flex flex-col gap-1">
            <button className="py-[0.85rem] px-5 rounded-lg bg-grey-15 shadow-sm border border-grey-15 text-white cursor-pointer w-full font-medium">
              Learn More
            </button>
            <button className="py-[0.85rem] px-5 rounded-lg bg-purple-60 shadow-sm text-white cursor-pointer w-full font-medium">
              Browse Properties
            </button>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-2  gap-4 justify-items-start">
            <div className="col-span-1  w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4 ">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-grey-60 text-sm font-medium">Happy Customers</p>
            </div>
             <div className="col-span-1 w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-grey-60 text-sm font-medium">Properties For Clients</p>
            </div>
             <div className="col-span-2 lg:col-span-1 w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4">
              <p className="text-2xl font-bold">16+</p>
              <p className="text-grey-60 text-sm font-medium">Years of Experience</p>
            </div>
           
          </div>

          <div className="grid grid-cols-2 gap-[0.62rem] p-[0.62rem] rounded-xl border border-grey-15 bg-grey-08 shadow-[0_0_0_4px_#191919]">
            <AttributesCard attributeText={"Find Your Dream Home"} attributeImg={homeSvg}/>
            <AttributesCard attributeText={"Find Your Dream Home"} attributeImg={homeSvg}/>
            <AttributesCard attributeText={"Find Your Dream Home"} attributeImg={homeSvg}/>
            <AttributesCard attributeText={"Find Your Dream Home"} attributeImg={homeSvg}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
