import React from "react";
import sideRightSvg from "../../assets/SVGs/side-right.svg";

const AttributesCard = ({ attributeText, attributeImg }) => {
  return (
    <div className="col-span-1 relative flex flex-col gap-3.5 border border-grey-15 rounded-[0.625rem] bg-grey-10 py-5 px-3.5 justify-center items-center">
      <div className="p-[0.38rem] rounded-full bg-gradient-to-r from-[#2a213f] to-[#A685FA]">
        <div className="rounded-full bg-grey-10 flex items-center justify-center p-2">
          <img className="w-5 h-5" src={attributeImg} alt="" />
        </div>
      </div>

      <p className="text-white text-center text-sm font-semibold">{attributeText}</p>
      <img className="absolute right-2 top-2 h-[1.625rem] w-[1.625rem]" src={sideRightSvg} alt="" />
    </div>
  );
};

export default AttributesCard;
