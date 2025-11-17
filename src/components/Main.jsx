import React from "react";
import homePng from "../assets/Images/home-img.png";
import AttributesCard from "./Cards/AttributesCard";
import homeSvg from "../assets/SVGs/home.svg";
import sunSvg from "../assets/SVGs/sun.svg";
import cameraSvg from "../assets/SVGs/camera.svg";
import estateSvg from "../assets/SVGs/estate.svg";
import bigStarSvg from "../assets/SVGs/biggestStar.svg";
import smallStarSvg from "../assets/SVGs/smallStar.svg";
import midStarSvg from "../assets/SVGs/midStar.svg";
import FeaturesPropertyCard from "./Cards/FeaturesPropertyCard";
import arrowLeftSvg from "../assets/SVGs/arrow-left.svg";
import arrowRightSvg from "../assets/SVGs/arrow-right.svg";
import RecommendationCard from "./Cards/RecommendationCard";

const Main = () => {
  return (
    <main className="py-10 px-4 text-white">
      <div className="rounded-2xl bg-grey-08 w-full ">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-15 lg:items-center">
          <div className="rounded-2xl relative lg:flex-1 ">
            <img
              className="w-full rounded-2xl  bg-gradient-to-r from-[#2a213f] to-[#191919]"
              src={homePng}
              alt=""
            />
          </div>

          <div className="lg:flex-1 py-4 flex flex-col gap-4 lg:pl-20">
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
                <p className="text-grey-60 text-sm font-medium">
                  Happy Customers
                </p>
              </div>
              <div className="col-span-1 w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4">
                <p className="text-2xl font-bold">10k+</p>
                <p className="text-grey-60 text-sm font-medium">
                  Properties For Clients
                </p>
              </div>
              <div className="col-span-2 lg:col-span-1 w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4">
                <p className="text-2xl font-bold">16+</p>
                <p className="text-grey-60 text-sm font-medium">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.62rem] p-[0.62rem] rounded-xl border border-grey-15 bg-grey-08 shadow-[0_0_0_4px_#191919]">
          <AttributesCard
            attributeText={"Find Your Dream Home"}
            attributeImg={homeSvg}
          />
          <AttributesCard
            attributeText={"Unlock Property Value"}
            attributeImg={cameraSvg}
          />
          <AttributesCard
            attributeText={"Effortless Property Management"}
            attributeImg={estateSvg}
          />
          <AttributesCard
            attributeText={"Smart Investments. Informed Decisions"}
            attributeImg={sunSvg}
          />
        </div>

        {/* featurd Properties */}
        <div className="my-16">
          <div className="flex items-start">
            <img src={bigStarSvg} alt="" />
            <img src={midStarSvg} alt="" />
            <img src={smallStarSvg} alt="" />
          </div>

          {/* features card */}
          <div>
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="mb-10">
                <h2 className="text-[1.75rem] font-semibold text-white">
                  Featured Properties
                </h2>
                <p className="text-sm font-medium text-grey-60">
                  Explore our handpicked selection of featured properties. Each
                  listing offers a glimpse into exceptional homes and
                  investments available through Estatein.
                </p>
              </div>
              <button className="hidden lg:flex py-[0.875rem] px-5 rounded-lg border border-grey-15 bg-grey-10 text-white">View All Properties</button>
            </div>
            <div className="lg:grid grid-cols-3 gap-5">
              <FeaturesPropertyCard />
              <FeaturesPropertyCard />
                <FeaturesPropertyCard />
            </div>
      <div className="border-t-0 border-grey-15 pt-4 flex justify-between px-4">
  <button className="lg:hidden">View All Properties</button>

  <div className="flex w-full justify-end lg:justify-between items-center">
    {/* Counter - centered between arrows on small screens, moves left on lg */}
    <div className="flex items-center gap-[0.62rem] order-2 lg:order-1">
      {/* Left arrow */}
      <div className="p-[0.62rem] rounded-full border border-grey-15 bg-grey-10 cursor-pointer">
        <img className="w-6 h-6" src={arrowLeftSvg} alt="Previous" />
      </div>

      {/* Counter text */}
      <p>01 of 60</p>

      {/* Right arrow */}
      <div className="p-[0.62rem] rounded-full border border-grey-15 bg-grey-10 cursor-pointer">
        <img className="w-6 h-6" src={arrowRightSvg} alt="Next" />
      </div>
    </div>
  </div>
</div>


          </div>
        </div>

        {/* what our clients say  */}
        <div className="my-12 ">
          <div className="flex items-start">
            <img src={bigStarSvg} alt="" />
            <img src={midStarSvg} alt="" />
            <img src={smallStarSvg} alt="" />
          </div>
          <div className="flex flex-col gap-[0.38rem]">
            <h2 className="text-[1.75rem] font-semibold">
              What Our Clients Say
            </h2>
            <p className="text-sm font-medium">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>

          <div className="my-10">
            <RecommendationCard />
            <hr className=" border-grey-15 mt-[1.88rem] mb-4" />
            <div className="flex justify-between items-center  ">
              <button className="py-3.5 px-5 rounded-lg border border-grey-15 bg-grey-10 text-sm font-medium cursor-pointer">
                View All Testimonials
              </button>
              <div className="flex items-center">
                <div className="p-2.5 border border-grey-15 w-fit rounded-full cursor-pointer">
                  <img
                    className="w-6 h-6 flex items-center justify-center "
                    src={arrowLeftSvg}
                    alt=""
                  />
                </div>
                <p>
                  <span>01</span> of 10
                </p>
                <div className="p-2.5 border border-grey-15 w-fit rounded-full cursor-pointer">
                  <img
                    className="w-6 h-6 flex items-center justify-center "
                    src={arrowRightSvg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* frequently asked questions */}
        <div className="">
          <div className="flex items-start">
            <img src={bigStarSvg} alt="" />
            <img src={midStarSvg} alt="" />
            <img src={smallStarSvg} alt="" />
          </div>
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-[150%]">
              Frequently Asked Questions
            </h2>
            <p className="text-grey-60 font-medium text-sm leading-[150%]">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <div className="p-[1.875rem] flex mt-10 py-[1.88rem] flex-col gap-5 rounded-[0.625rem] border border-grey-15 bg-grey-08">
            <h6 className="text-[1.125rem] font-semibold leading-[150%]">
              How do I search for properties on Estatein?
            </h6>
            <p className="text-sm text-grey-60 font-medium tracking-[-0.00525rem] leading-[150%]">
              Learn how to use our user-friendly search tools to find properties
              that match your criteria.
            </p>
          </div>

          <div className="flex justify-between items-center  mt-[1.88rem] border-t border-grey-15 pt-4">
            <button>View All FAQs</button>
            <div className="flex items-center gap-[0.62rem]">
              <div className="p-2.5 border border-grey-15 w-fit rounded-full cursor-pointer">
                <img
                  className="w-6 h-6 flex items-center justify-center "
                  src={arrowLeftSvg}
                  alt=""
                />
              </div>
              <p>
                <span>01</span> of 10
              </p>
              <div className="p-2.5 border border-grey-15 w-fit rounded-full cursor-pointer">
                <img
                  className="w-6 h-6 flex items-center justify-center "
                  src={arrowRightSvg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default Main;
