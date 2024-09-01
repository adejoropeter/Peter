import { Instagram } from "lucide-react";
import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiRedux, SiTypescript, SiJavascript } from "react-icons/si";

const Skill = () => {
  return (
    <div className="bg-blue600 text-black h-[500px]  w-full flex flex-col px items-center gap-20">
      <h2 className="text-4xl">
        My <span className="font-semibold">Skills</span>
      </h2>
      <div className="w-full flex flex-wrap gap-5 justify-center">
        <div className="w-36 h-40 border gap-6 group cursor-pointer border-black flex flex-col justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <SiJavascript className="group-hover:text-white text-black text-3xl" />
          <h1 className="group-hover:text-white">Javascript</h1>
        </div>
        <div className="w-36 h-40 border group gap-6 cursor-pointer border-black flex flex-col justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <FaReact className="group-hover:text-white text-3xl" />
          <h1 className="group-hover:text-white">React</h1>
        </div>
        <div className="w-36 h-40 border group cursor-pointer border-black flex flex-col gap-6 justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <RiTailwindCssFill className="group-hover:text-white text-3xl" />
          <h1 className="group-hover:text-white">Tailwind Css</h1>
        </div>
        <div className="w-36 h-40 border group cursor-pointer border-black flex flex-col gap-6 justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <TbBrandReactNative className="group-hover:text-white text-3xl" />
          <h1 className="group-hover:text-white">React Native</h1>
        </div>
        <div className="w-36 h-40 border group cursor-pointer border-black flex flex-col gap-6 justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <SiRedux className="group-hover:text-white text-3xl" />
          <h1 className="group-hover:text-white">Redux</h1>
        </div>
        <div className="w-36 h-40 border group cursor-pointer border-black flex flex-col gap-6 justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <RiNextjsFill className="group-hover:text-white text-3xl" />
          <h1 className="group-hover:text-white">Next Js</h1>
        </div>
        <div className="w-36 h-40 border group cursor-pointer border-black flex flex-col gap-6 justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <FaGitSquare className="group-hover:text-white text-3xl" />
          <h1 className="group-hover:text-white">Git</h1>
        </div>
        <div className="w-36 h-40 border group cursor-pointer border-black flex flex-col gap-6 justify-center items-center rounded-[4px] bg-white hover:bg-black">
          <SiTypescript className="group-hover:text-white text-3xl" />
          <h1 className="group-hover:text-white">Typescript</h1>
        </div>
      </div>
    </div>
  );
};

export default Skill;
