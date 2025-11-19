import React from "react";
import sendIcon from "../../assets/Images/Send.png";
import twitterIcon from "../../assets/Images/twitter.png"

const TeamCard = ({ name, title, profilePic }) => {
  return (
    <div className="rounded-xl border border-grey-15 p-4 flex flex-col items-center text-white">
      <div className="relative">
        <img className="rounded-[10px] w-[318px] h-[268px]" src={profilePic} alt="" />
        <div className="bg-purple-60 px-5 py-2.5 rounded-[43px] w-fit flex  items-center">
          <img className="" src={twitterIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <p className="font-semibold text-[18px]">{name}</p>
        <p className="font-medium text-sm">{title}</p>
      </div>
      <div className="flex">
        <input className="focus:outline-none" type="text" placeholder="Say Hello 👋" />
        <img className="bg-purple-60 p-3.5 rounded-full" src={sendIcon} alt="" />
      </div>
    </div>
  );
};

export default TeamCard;
