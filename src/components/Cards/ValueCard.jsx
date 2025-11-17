import React from 'react'

const ValueCard = ({header, description}) => {
  return (
    <div className='bg-grey-10 rounded-[10px] px-4 py-[1.125rem] '>
      <div className='flex items-center'>
        <img src="" alt="" />
        <p className='text-white font-semibold text-[18px]'>{header}</p>
      </div>
      <p className='font-medium text-sm text-grey-60'>{description}</p>
    </div>
  )
}

export default ValueCard