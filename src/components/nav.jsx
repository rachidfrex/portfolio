
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/images/logoDEV.png";

function Nav() {
  const [selected, setSelected] = useState('about'); 

  return (
    <div className=' fixed w-full z-50 flex mt-4 justify-center  items-center '>
      <nav className='text-center py-1 w-auto text-sm overflow-hidden bg-zinc-800/90 gap-1 px-1 flex text-white rounded-full'>
        <img src={logo} className='h-7 w-7 mx-2' alt="" />
        <ul className='flex font-rubik w-full justify-center items-center space-x-4'>
          {['about', 'project', 'contact'].map(item => (
            <li key={item} onClick={() => setSelected(item)} className='px-5  z-10 py-1 rounded-full cursor-pointer relative'>
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {selected === item && (
                <motion.div
                  layoutId="underline"

                  className="bg-zinc-700  absolute bottom-0 -z-[1] rounded-full  left-0 right-0 h-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
