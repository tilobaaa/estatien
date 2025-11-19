import React from "react";
import homePng from "../assets/Images/house.png";
import starPng from "../assets/Images/star.png";
import capIconPng from "../assets/Images/capIcon.png";

import ValueCard from "../components/Cards/ValueCard";
import AchievementsCard from "../components/Cards/AchievementsCard";
import TeamCard from "../components/Cards/TeamCard";
import maxMitchPng from '../assets/Images/MaxMitch.png'


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
                <p className="text-grey-60 text-sm font-medium text-center">
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
        <div className="border border-grey-15 shadow-sm shadow-[#141414] rounded-xl py-6 px-4 my-6">
          <ValueCard
            icon={starPng}
            header="Trust"
            description={
              "Trust is the cornerstone of every successful real estate transaction."
            }
          />
          <ValueCard
            icon={capIconPng}
            header="Excellence"
            description={
              "We set the bar high for ourselves. From the properties we list to the services we provide."
            }
          />
          <ValueCard
            icon={starPng}
            header="Client-Centric"
            description={
              "Your dreams and needs are at the center of our universe. We listen, understand."
            }
          />
          <ValueCard
            icon={starPng}
            header="Our Commitment"
            description={
              "We are dedicated to providing you with the highest level of service, professionalism."
            }
          />
        </div>
      </div>

      {/* Our Achievements */}
      <div>
        <div>
          <h2 className="text-[28px] font-semibold text-white">
            Our Achievements
          </h2>
          <p className="font-medium text-sm text-grey-60">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <AchievementsCard
            title="3+ Years of Excellence"
            description={
              "With over 3 years in the industry, we've amassed a wealth of knowledge and experience."
            }
          />
          <AchievementsCard
            title="Happy Clients"
            description={
              "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
            }
          />
          <AchievementsCard
            title="Industry Recognition"
            description={
              "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
            }
          />
        </div>
      </div>

      {/* Navigating the Estatien Experience */}
      <div>
        <div>
          <h2 className="text-[28px] font-semibold text-white">
            Navigating the Estatein Experience
          </h2>
          <p className="font-medium text-sm text-grey-60">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
      </div>

      {/* team */}
      <div>
        <h2 className="text-[28px] font-semibold text-white">
          Meet the Estatein Team
        </h2>
        <p className="font-medium text-sm text-grey-60">
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </p>
      </div>

      <div className="flex flex-col gap-2">
            <TeamCard name="Max Mitchell" title="Founder" profilePic={maxMitchPng}/>
      </div>
    </div>
  );
};

export default AboutUs;
