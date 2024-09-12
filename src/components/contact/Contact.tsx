import { Github, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-blue600 bg-white scroll-mt-14 text-black justify-between px-6 sm:p-14 h-fit py-10   w-full flex flex-col lg:flex-row items-center gap-5 sm:gap-20 ">
      <div className="flex flex-col justify-center gap-4  w-full   flex-1">
        <div className="w-full h-[40px] border bg-black border-black px- py- rounded-[4px]">
          <input
            placeholder="Your Name"
            type="text"
            name=""
            id=""
            className="w-full px-2 text-lg h-full outline-none bg-white"
          />
        </div>
        <div className="w-full h-[40px] border bg-black border-black px- py- rounded-[4px]">
          <input
            placeholder="Your Email"
            type="text"
            name=""
            id=""
            className="w-full px-2 text-lg h-full outline-none bg-white"
          />
        </div>
        <div className="w-full h-[40px] border bg-black border-black px- py- rounded-[4px]">
          <input
            placeholder="Your Website (if exists)"
            type="text"
            name=""
            id=""
            className="w-full px-2 text-lg h-full outline-none bg-white"
          />
        </div>

        <div className="w-full  border border-black px- py- rounded-[4px]">
          <textarea
            placeholder="How can i help?"
            name=""
            id=""
            className="w-full outline-none px-2 text-lg"
          />
        </div>

        <div className="flex gap-3">
          <div className="w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            Get in touch
          </div>
          <a href="https://x.com/dev_apa" target="_blank" className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Twitter />
          </a>
          <a href="" target="_blank" className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Instagram />
          </a>
          <a href="https://github.com/adejoropeter" target="_blank" className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Github />
          </a>
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
