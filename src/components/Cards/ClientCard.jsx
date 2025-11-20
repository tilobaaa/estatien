import React from "react";
import CategorySvg from "../../assets/SVGs/category.png";
import domainSvg from "../../assets/SVGs/domainIcon.png";

const ClientCard = ({ year, name, domain, category, description }) => {
  return (
    <div className="p-4 border border-grey-15 shadow-md rounded-[10px] flex flex-col gap-4">
      <p className="font-medium text-sm text-grey-60">{`Since ${year}`}</p>
      <h6 className="font-semibold text-white text-xl">{name}</h6>

      <button className="py-3.5 px-5 rounded-lg border text-sm border-grey-15 text-white w-full bg-grey-10 cursor-pointer">Visit Website</button>

      <div className="grid grid-cols-2">
        <div className="p-4">
          <div className="flex gap-1 items-center">
            <img src={domainSvg} alt="" />
            <p className="text-xs text-grey-60">Domain</p>
          </div>
          <p className="text-white font-medium text-sm">{domain}</p>
        </div>

        <div className="border-l border-grey-15 p-4">
          <div className="flex gap-1 items-center">
            <img src={CategorySvg} alt="" />
            <p className="text-xs text-grey-60">Category</p>
          </div>
          <p className="text-white font-medium text-sm">{category}</p>
        </div>
      </div>

      <div className="p-4 border border-grey-15 rounded-[12px] flex flex-col gap-4">
        <p className="font-medium text-grey-60 text-sm">What They Said 🤗</p>
        <p className="font-medium text-sm text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ClientCard;
