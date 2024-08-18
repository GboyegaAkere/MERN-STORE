import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Header() {
  return (
    <header className='h-16 shadow-md'>
        <div className='container mx-auto h-full flex items-center px-4 justify-between'>
            <div className='cursor-pointer'>
                <h1>MY LOGO</h1>
            </div>

            <div className='hidden lg:flex items-center w-full max-w-sm h-10 rounded-full justify-between border focus-within:shadow-md'>
               <input type='text' placeholder='search product here...' className='w-full outline-none pl-10'/>
               <div className='text-lg h-full min-w-[50px] flex items-center justify-center bg-red-400  rounded-r-full'>
                <IoSearchOutline />
               </div>
            </div>

            <div className=''>
                <h1>MY LOGO</h1>
            </div>
        </div>
    </header>
  )
}

export default Header