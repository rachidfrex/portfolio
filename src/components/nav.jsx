import React from 'react'
import logo from "../assets/images/logoDEV.png"
function Nav() {
  return (
        <div
        className='flex justify-center mx-3  items-center py-5'
        >
           
            <nav className=' text-center w-full py-1  md:w-auto  text-sm bg-zinc-800/90 gap-1 px-1  flex  text-white     rounded-full    '>

            <img src={logo} className='h-7 w-7 mx-2  ' alt="" />
            <span></span>
            <ul className='flex font-rubik  justify-center items-center space-x-4 '>
            <li className=' bg-zinc-700 px-3 py-0.5 rounded-full'>About</li>
            <li  className=' px-3 py-1 rounded-full'>project </li>
            <li  className=' px-3 py-1 rounded-full'>Contact</li>
            </ul> 
        </nav>
        
        </div>

  )
}

export default Nav