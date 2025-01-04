import React from 'react'

const Card = () => {
  return (
    <div className='h-60 dark:bg-white rounded-lg px-4 flex flex-col justify-around'>
      <div className='w-20 h-20 bg-[#343c4c] rounded-lg border border-dashed border-gray-400'></div>
      <h1 className='text-2xl font-bold text-gray-600'>product 1</h1>
      <h4 className='text-xl font-semibold text-gray-500'>$ 10</h4>
      <p className='text-lg text-wrap text-gray-400'>This is a short description of product 1</p>

    </div>
  )
}

export default Card
