import React from 'react'
import {Spotlight} from '../components/ui/Spotlight'
function Header() {
  return (
    <div className='flex flex-col justify-center items-center  w-full  h-[80vh] '>
        <Spotlight />
        <h1
        className='text-white text-7xl font-bold uppercase'
        >
            my name  is rachid 
        </h1>
        <p
        className='text-white text-lg mt-5  uppercase'
        >
            I'm a full stack developer
        </p>
    </div>
  )
}

export default Header