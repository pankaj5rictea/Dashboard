import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-4'>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-gray-600'>Total Sales</p>
          <p className='text-gray-600 text-2xl font-bold'>$2,456</p>
        </div>
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-gray-600'>Total Expenses</p>
          <p className='text-gray-600 text-2xl font-bold'>$3,326</p>
        </div>
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-gray-600'>Total Visitors</p>
          <p className='text-gray-600 text-2xl font-bold'>$5,325</p>
        </div>
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-gray-600'>Total Orders</p>
          <p className='text-gray-600 text-2xl font-bold'>$1,326</p>
        </div>
      </div>
    </div>
  )
}

export default TopCards
