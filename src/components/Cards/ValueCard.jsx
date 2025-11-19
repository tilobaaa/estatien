import React from "react";

const ValueCard = ({ header, description, icon }) => {
  return (
    <div className="flex flex-col gap-3 px-4 py-[1.125rem] border-b border-b-grey-15 ">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full border-2 border-purple-60">
          <img src={icon} alt="" />
        </div>
        <p className="text-white font-semibold text-[18px]">{header}</p>
      </div>
      <p className="font-medium text-sm text-grey-60">{description}</p>
    </div>
  );
};

export default ValueCard;
