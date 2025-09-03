import React from "react";
import skyscrapperImg from "../../assets/Images/skyscrapper.png";
import bedroomSvg from "../../assets/SVGs/bedroom.svg";

const FeaturesPropertyCard = () => {
  return (
    <div className="p-6 flex flex-col gap-4 border border-grey-15 bg-grey-08 rounded-xl">
      <div className="h-[13.125rem] rounded-[0.625rem] ">
        <img
          className="w-full h-full rounded-[0.625rem]"
          src={skyscrapperImg}
          alt=""
        />
      </div>
      <div>
        <div>
          <h5>Rustic Retreat Cottage</h5>
          <p>
            An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...
            Read More
          </p>
        </div>
        <div className="flex flex-wrap gap-[0.88rem] ">
          <div className="w-[calc(50%-0.44rem)] py-[0.375rem] px-[0.875rem] flex items-center gap-1 rounded-[1.75rem] border border-grey-15 bg-grey-10">
            <img
              className="w-[1.375rem] h-[1.0625rem]"
              src={bedroomSvg}
              alt=""
            />
            <p className="text-sm font-medium">4-Bedroom</p>
          </div>
          <div className="w-[calc(50%-0.44rem)] py-[0.375rem] px-[0.875rem] flex items-center gap-1 rounded-[1.75rem] border border-grey-15 bg-grey-10">
            <img
              className="w-[1.375rem] h-[1.0625rem]"
              src={bedroomSvg}
              alt=""
            />
            <p className="text-sm font-medium">4-Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPropertyCard;
