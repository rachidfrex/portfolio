import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { MdOutlineFileDownload } from "react-icons/md";
import cv from "../assets/pdf/rachidCV.pdf";

function Header() {
  return (
    <div 
    id="home"
    className="flex flex-col overflow-hidden justify-center items-center  w-full  h-[40vh] md:h-[80vh] ">
      <Spotlight
        className="  md:ml-20 -top-40 ove  left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
    
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi my Name is <br />  Rachid EL Hajouji
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          I am a full stack web developer with a passion for building beautiful
          and functional websites
        </p>
        <a  download  href={cv} className="w-full flex justify-center items-center ">
        <button className="flex relative gap-2 border    border-gray-700  text-sm font-semibold rounded-lg border- justify-center  mt-10 items-center px-5 py-1 text-zinc-300 ">
        <div class="  absolute right-0 blur-sm top-0   h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.52),rgba(255,255,255,0))] "></div>
          
          <MdOutlineFileDownload size={20}  />
          save  my resume

        </button>
        
      
       
  
      
        
        </a>

      </div>
     
    </div>
  );
}

export default Header;
