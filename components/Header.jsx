import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-white px-4 pt-4'>
      <div className='flex'>
         <Link href='/'>
            <div className='text-black hover:text-gray-400 text-bold text-2xl pb-4'>Add new post</div>
         </Link>
         <Link href='/'>
            <div className='text-black hover:text-gray-400 pt-1.5 mx-8'>Add content</div>
         </Link>
         <Link href='/'>
            <div className='text-black hover:text-gray-400 pt-1.5'>Settings</div>
         </Link>
      </div>
      <div>
        <input placeholder='Search content...' className='border-r-2 p-2 border rounded-lg'></input>
      </div>
    </div>
  )
}

export default Header
