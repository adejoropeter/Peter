import { Instagram } from "lucide-react";
import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiRedux, SiTypescript, SiJavascript } from "react-icons/si";
import {motion} from "framer-motion"
// const skillList = Array(8);
const skillList = [
  { name: "Javascript" ,icon: <SiJavascript />,},
  { name: "React" ,icon: <FaReact />,},
  { name: "Tailwind Css",icon: <RiTailwindCssFill />, },
  { name: "React Native" ,icon: <TbBrandReactNative />,},
  { name: "Redux" ,icon: <SiRedux />,},
  { name: "Next Js" ,icon: <RiNextjsFill />,},
  { name: "Git" ,icon: <FaGitSquare />,},
  { name: "Typescript" ,icon: <SiTypescript />,},
  ,
];
const skillAnimationVariant = {
  initial: { y: -100, opacity: 0 },
  animate: (idx: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.05 * idx },
  }),
};
const Skill = () => {
  return (
    <div
      id="skill"
      className="text-black scroll-mt-24 min-h-screen   w-full flex flex-col px-14 mt-1 items-center gap-8">
      <h2 className="text-4xl">
        My <span className="font-bold">Skills</span>
      </h2>
      <div className="w-full flex flex-wrap gap-5 justify-center">
        {skillList.map((a,idx) => {
          return (
            <motion.div  
            variants={skillAnimationVariant}
            viewport={{ once: true }}
            initial="initial"
            custom={idx}
            whileInView="animate" className="w-36 h-40 border gap-6 group cursor-pointer border-black flex flex-col justify-center items-center rounded-[4px] bg-white hover:bg-black">
              {a?.name === "Javascript" && (
                <SiJavascript className="group-hover:text-white text-black text-3xl" />
              )}
              {a?.name === "React" && (
                <FaReact className="group-hover:text-white text-black text-3xl" />
              )}
              {a?.name === "Tailwind Css" && (
                <RiTailwindCssFill className="group-hover:text-white text-black text-3xl" />
              )}
              {a?.name === "React Native" && (
                <TbBrandReactNative className="group-hover:text-white text-black text-3xl" />
              )}
              {a?.name === "Redux" && (
                <SiRedux className="group-hover:text-white text-black text-3xl" />
              )}
              {a?.name === "next Js" && (
                <RiNextjsFill className="group-hover:text-white text-black text-3xl" />
              )}
              {a?.name === "Git" && (
                <FaGitSquare className="group-hover:text-white text-black text-3xl" />
              )}
              {a?.name === "Typescript" && (
                <SiTypescript className="group-hover:text-white text-black text-3xl" />
              )}
              <h1 className="group-hover:text-white">{a?.name}</h1>
            </motion.div>
          );
        })}
        {/* <div className="w-36 h-40 border gap-6 group cursor-pointer border-black flex flex-col justify-center items-center rounded-[4px] bg-white hover:bg-black">
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
        </div> */}
      </div>
    </div>
  );
};

export default Skill;
