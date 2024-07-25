import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
function Header() {
  return (
    <div className="flex flex-col justify-center items-center  w-full  h-[80vh] ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
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
      </div>
    </div>
  );
}

export default Header;
