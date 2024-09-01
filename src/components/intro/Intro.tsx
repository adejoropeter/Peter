import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react";
import React from "react";

const Intro = () => {
  return (
    <div className="bg-blue600 text-black h-[500px] my-4  w-full px-10 flex flexcol items-center justify-between">
      <div className="flex flex-col flex-1 max-w-lg gap-4">
        <p className="text-4xl leading-normal">
          Hello I'm <span className=" font-semibold">Adejoro Peter,</span>{" "}
          <br /> <span className=" font-semibold">Frontend </span>{" "}
          <span className="text-stroke text-stroke-2  text-stroke-black text-white text-4xl font-bold">
            Developer
          </span>{" "}
          <br /> Based In{" "}
          <span className=" font-semibold">Lagos, Nigeria.</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          incidunt fugiat officiis neque molestias explicabo perferendis odio,
          nemo soluta nihil error, cum aliquid. Magnam enim, modi soluta quasi
          optio ab? Sint, dolor?
        </p>
        <div className="flex justify-between mt-10">
          <div className="flex gap-6">
            <div className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
              <FacebookIcon className="group-hover:text-white" />
            </div>
            <div className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
              <Twitter className="group-hover:text-white" />
            </div>
            <div className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
              <Github className="group-hover:text-white" />
            </div>
            <div className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
              <Instagram className="group-hover:text-white" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex-1">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Intro;
