import { Github, Instagram, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-blue600 bg-white text-black justify-between px-6 sm:p-14 h-fit py-10   w-full flex flex-col lg:flex-row items-center gap-5 sm:gap-20 ">
      <div className="flex flex-col justify-center gap-4  w-full   flex-1">
        <div className="w-full border border-black px-4 py-2 rounded-[4px]">
          <input
            placeholder="Your Name"
            type="text"
            name=""
            id=""
            className="w-full outline-none"
          />
        </div>
        <div className="w-full border border-black px-4 py-2 rounded-[4px]">
          <input
            placeholder="Email"
            type="text"
            name=""
            id=""
            className="w-full outline-none"
          />
        </div>
        <div className="w-full border border-black px-4 py-2 rounded-[4px]">
          <input
            placeholder="Your Website (if exists)"
            type="text"
            name=""
            id=""
            className="w-full outline-none"
          />
        </div>
        <div className="w-full border border-black px-4 py-2 rounded-[4px]">
          <textarea
            placeholder="How can i help?"
            name=""
            id=""
            className="w-full outline-none"
          />
        </div>

        <div className="flex gap-3">
          <div className="w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            Get in touch
          </div>
          <div className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Twitter />
          </div>
          <div className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Instagram />
          </div>
          <div className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Github />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3  ">
        <h3 className="text-2xl font-bold ">
          Let{" "}
          <span className="text-stroke text-stroke-2  text-stroke-black text-white  font-bold">
            talk
          </span>{" "}
          for <br /> Something special
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tenetur, voluptate?
        </p>
        <p className="text-2xl font-bold">
          adejoropeter25@gmail.com <br /> 08128224734
        </p>
      </div>
    </div>
  );
};

export default Contact;
