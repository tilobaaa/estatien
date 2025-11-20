import React from "react";
import sendIcon from "../../assets/Images/Send.png";
import twitterIcon from "../../assets/Images/twitter.png"

const TeamCard = ({ name, title, profilePic }) => {
  return (
    <div className="rounded-xl border border-grey-15 p-4 flex flex-col items-center text-white">
      <div className="relative">
        <img className="rounded-[10px] w-[318px] h-[268px]" src={profilePic} alt="" />
        <div className=" absolute bg-purple-60 px-5 py-2.5 rounded-[43px] w-fit flex  items-center left-1/2 -translate-1/2">
          <img className="" src={twitterIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center py-8">
        <p className="font-semibold text-[18px]">{name}</p>
        <p className="font-medium text-sm text-grey-60">{title}</p>
      </div>
      <div className="flex justify-between w-full bg-grey-10 border border-grey-15 rounded-full ">
        <input className="px-4 w-full focus:outline-none" type="text" placeholder="Say Hello 👋" />
        <img className="bg-purple-60 p-3.5 rounded-full" src={sendIcon} alt="" />
      </div>
    </div>
  );
};

export default TeamCard;
