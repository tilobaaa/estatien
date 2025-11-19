import React from 'react'

const AchievementsCard = ({title, description}) => {
  return (
    <div className='border-2 border-grey-15 shadow-md shadow-[#191919] flex flex-col gap-4 rounded-[10px] p-4'>
        <h6 className='text-white text-xl font-semibold'>{title}</h6>
        <p className='text-[14px] text-grey-60 '>{description}</p>
    </div>
  )
}

export default AchievementsCard