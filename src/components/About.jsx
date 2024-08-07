import React from "react";
import svg from "../assets/svg/Frame3.svg";
import Linelaser from "../components/ui/linelaser";
import logo from "../assets/images/logo.png";
import sukuna from "../assets/images/sukuna.jpeg";
import cat from "../assets/images/cat.jpg";
import cv from "../assets/pdf/rachidCV.pdf";
import hobi from "../assets/images/hobi.jpeg";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { LiaLaravel } from "react-icons/lia";
import { GrMysql } from "react-icons/gr";
import { DiPhp } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-7xl px-3 lg:mx-auto w-full  lg:h-[700px] flex justify-center   items-center"
    >
      <div className=" flex flex-col mt-5   justify-center lg:grid grid-cols-12  grid-rows-10 lg:grid-rows-6 gap-4 h-full w-full">
        <div className="relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  lg:h-auto     lg:col-span-4 lg:row-span-3 rounded-3xl flex justify-center items-center ">
          {/* <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,198,0.32),rgba(255,255,255,0))]"></div> */}

          <img
            className="  object-cover object-top h-[400px] lg:h-full  w-full  "
            src={sukuna}
            alt=""
          />
        </div>

        <div className="relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700   lg:col-span-5 lg:row-span-2 rounded-3xl flex justify-center items-center">
          <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>

          <p className=" p-6   text-sm ">
            A passionate{" "}
            <strong className=" text-neutral-300 text-lg  ">
              {" "}
              full stack developer
            </strong>{" "}
            with expertise in both front end and back end technologies. I love
            creating innovative solutions and bringing ideas to life through
            code. When I'm not coding, I enjoy reading mangas and exploring new
            tech trends.
          </p>
        </div>
        {/* favorit animal  */}
        <div className=" text-white overflow-hidden  relative  border-2 border-gray-700  lg:col-span-3 lg:row-span-4 rounded-3xl flex  justify-center items-center">
          <div className=" lg:flex flex-col w-full   justify-start   items-start text-center">
            <img
              src={cat}
              alt=""
              className=" object-cover  lg:p-1 h-full lg:mb-6 w-full  rounded-2xl   "
            />

            <div className=" absolute bottom-3 lg:static">
              <h3 className="text-lg w-full text-start px-5 font-semibold ">
                Favorite Animal
              </h3>
              <p className="  mt-1  w-full text-xs text-start px-5">
                My favorite animal is the cat. Cats are independent, curious,
                and graceful creatures. I admire their agility and playful
                nature, which often inspires my own creativity and
                problem-solving skills.
              </p>
            </div>
          </div>
        </div>
        {/* my name  */}
        <div className=" relative overflow-hidden   backdrop-blur-lg text-white p-6  lg:col-span-2 lg:row-span-1 rounded-3xl flex justify-center items-center border-2 border-gray-700">
          <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>

          <div className="flex justify-center  items-center w-full gap-5">
            <a
              target="_blank"
              href="https://github.com/rachidfrex"
              className="  border-2 border-zinc-700 z-50 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 "
            >
              <FaGithub size={35} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rachid-el-hajouji-9b9a6929a/"
              className=" border-2 z-50 border-zinc-700 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 "
            >
              <FaLinkedinIn size={35} />
            </a>
          </div>
        </div>
        {/* logo of me  */}
        <div className="  relative overflow-hidden   backdrop-blur-lg text-white p-6   lg:col-span-3 lg:row-span-2 rounded-3xl flex justify-center items-center border-2 border-gray-700">
          <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>

          <img
            src={svg}
            alt="svg"
            className=" w-52 h-52  -right-[70px] -top-20 opacity-25 -z-10 bg-cover absolute"
          />

          <img src={logo} className=" w-[350px]" alt="logo" />
          <div className=" h-52 left-0  -bottom-5 w-full opacity-25 -z-10 absolute">
            <Linelaser />
          </div>
        </div>

        {/* frent end  */}
        <div className=" relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700   py-10 lg:col-span-3 lg:row-span-3 rounded-3xl flex flex-col justify-center items-center">
          <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>

          <div className=" flex justify-center items-center h-full w-full gap-2 ">
            <div className=" border-2 border-zinc-700 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 ">
              <RiReactjsLine size={40} />
            </div>
            <div className=" border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30">
              <RiTailwindCssFill size={40} />
            </div>
            <div className=" border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30">
              <IoLogoJavascript size={40} />
            </div>
            <div className=" border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30">
              <FaHtml5 size={40} />
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-4  justify-end items-start h-full w-full px-7">
            <h3 className="text-lg font-semibold text-start w-full ">
              Front End Skills
            </h3>
            <span className=" border-t-2 border-dashed w-full "></span>
            <p className=" text-sm">
              As a front end developer, I ensure visually appealing and
              user-friendly designs to deliver the best user experience.
            </p>
          </div>
        </div>
        {/* end of the frent end colomn */}
        {/* back end info */}
        <div className="relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  py-10 lg:col-span-3 lg:row-span-3 rounded-3xl flex flex-col justify-center items-center">
          <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>

          <div className=" flex justify-center items-center h-full w-full gap-2 ">
            <div className=" border-2 border-zinc-700 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 ">
              <LiaLaravel size={40} />
            </div>
            <div className=" border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30">
              <GrMysql size={40} />
            </div>
            <div className=" border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30">
              <DiPhp size={40} />
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-4  justify-end items-start h-full w-full px-7">
            <h3 className="text-lg font-semibold text-start w-full ">
              Back End Skills
            </h3>
            <span className=" border-t-2 border-dashed w-full "></span>
            <p className=" text-sm">
              As a back end developer, I guarantee robust and efficient
              server-side solutions to support seamless functionality.
            </p>
          </div>
        </div>
        {/* end of the backend info */}
        {/* hobbie */}
        {/* <div className=" relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  lg:col-span-6 lg:row-span-2 rounded-3xl flex flex-col justify-center items-start">
          <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>

          <div className="flex flex-col gap-5 h-full w-full  p-5 justify-start items-start">
            <h3 className=" text-2xl  font-semibold ">Hire Me</h3>
            <p className=" text-sm">
              If you are looking for someone with a blend of front end and back
              end skills, I'm your ideal candidate. I'm a dedicated full stack
              developer with a passion for creating efficient and innovative web
              solutions.
            </p>
            <button  className=" z-50 font-semibold cursor-pointer uppercase mt-2 px-4  text-sm border-dashed border-2 py-2 rounded-lg">
            <a
              href={cv}
              download
            >
              download my resume
            </a>
            </button>
          </div>
        </div> */}

        <div className=" relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  lg:col-span-6 lg:row-span-2 rounded-3xl flex flex-col justify-center items-start">
          <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>

          <div className="flex flex-col gap-5 h-full w-full   justify-start items-start">
           <img src={hobi} alt="  " className=" object-cover w-full" />
           
          </div>

          <div className="  flex  flex-col w-full justify-end bg-gradient-to-t  from-black to-transparent h-full text-lg absolute   p-5">
            
                <h3 className=" text-lg  font-semibold text-start w-full">
                 My Hobbies
                </h3>
              <p className=" text-xs md:text-sm justify-center items-center z-50 text-white">
              Discover my diverse interests: a passion for sports, a love for digital innovation, and a flair for cooking. Each activity brings unique joy, creativity, and balance to my life, enriching both my personal and professional experiences.
              </p>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
