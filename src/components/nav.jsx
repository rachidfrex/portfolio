import React from 'react'
import logo from "../assets/images/logoDEV.png"
function Nav() {
  return (
        <div
        className='flex justify-center  items-center py-5'
        >
           
            <nav className=' text-center  text-sm bg-slate-800/70 gap-1 px-1  flex  text-white     rounded-full    '>

            <img src={logo} className='h-10 w-10 ' alt="" />
            <span></span>
            <ul className='flex font-rubik  justify-center items-center space-x-4 '>
            <li className=' bg-slate-700 px-3 py-0.5 rounded-full'>About</li>
            <li  className=' px-3 py-1 rounded-full'>project </li>
            <li  className=' px-3 py-1 rounded-full'>Contact</li>
            </ul> 
        </nav>
        
        </div>

  )
}

export default Nav