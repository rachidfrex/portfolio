import React from 'react'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center  w-full  h-[80vh] '>
        <h1
        className='text-white text-6xl font-bold uppercase'
        >
            my name <br /> is rachid 
        </h1>
        <p
        className='text-white text-xl  uppercase'
        >
            i am a web developer
        </p>
    </div>
  )
}

export default Header