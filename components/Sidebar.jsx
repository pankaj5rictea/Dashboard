import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { RxDashboard } from 'react-icons/rx';

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-gray-400 border-r-[1px] flex flex-col justify-between'>
         <div className='flex flex-col items-center'>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
           <Link href='/'>
             <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
             </div>
           </Link>
         </div>
      </div>
       <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar
