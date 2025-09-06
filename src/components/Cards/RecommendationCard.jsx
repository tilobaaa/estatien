import React from "react";
import starSvg from '../../assets/SVGs/star.svg';
import profileSvg from '../../assets/SVGs/Profile.svg'
const RecommendationCard = () => {
  return (
    <div className="p-7.5 flex flex-col gap-6 rounded-[0.625rem] border border-grey-15 bg-grey-08">
      <div className="flex gap-5 items-center">
        <img className='w-[1.125rem] h-[1.125rem]' src={starSvg} alt="" />
        <img className='w-[1.125rem] h-[1.125rem]' src={starSvg} alt="" />
        <img className='w-[1.125rem] h-[1.125rem]' src={starSvg} alt="" />
        <img className='w-[1.125rem] h-[1.125rem]' src={starSvg} alt="" />
        <img className='w-[1.125rem] h-[1.125rem]' src={starSvg} alt="" />
      </div>
      <div>
        <h6 className="text-lg font-semibold">Exceptional Service!</h6>
        <p className="text-sm font-medium">Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
      </div>
      <div className="flex items-center gap-[0.62rem]">
        <img className="w-[3.125rem] h-[3.125rem] rounded-full" src={profileSvg} alt="" />
        <div>
            <p className="text-[1rem] text-white font-medium  ">Wade Warren</p>
            <p className="text-sm text-grey-60 font-medium">USA, California</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
