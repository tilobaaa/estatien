import React from "react";
import homePng from "../assets/Images/house.png";

const AboutUs = () => {
  return (
    <div className="py-10 px-4">
      {/* Our Journey */}
      <div>
        <img src={homePng} alt="" />
        <div>
          <h2 className="text-[28px] font-semibold text-white">Our Journey</h2>
          <p className="font-medium text-sm text-grey-60">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div>
            <div className="grid lg:grid-cols-3 grid-cols-2  gap-4 justify-items-start">
              <div className="col-span-1  w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4 ">
                <p className="text-2xl font-bold text-white">200+</p>
                <p className="text-grey-60 text-sm font-medium">
                  Happy Customers
                </p>
              </div>
              <div className="col-span-1 w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4">
                <p className="text-2xl font-bold text-white">10k+</p>
                <p className="text-grey-60 text-sm font-medium">
                  Properties For Clients
                </p>
              </div>
              <div className="col-span-2 lg:col-span-1 w-full flex flex-col justify-center items-center rounded-lg bg-grey-10 border border-grey-15 p-4">
                <p className="text-2xl font-bold text-white">16+</p>
                <p className="text-grey-60 text-sm font-medium">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div>
        <div>
          <h2 className="text-[28px] font-semibold text-white">Our Values</h2>
          <p className="font-medium text-sm text-grey-60">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
