import { Github } from "lucide-react";
import React from "react";

const projectList = [
  {
    projectName: "Magenta",
    desc: "Built a comprehensive financial management platform designed for companies to manage their finances and streamline cash flow processes effectively",
    uri: "assets/magenta.png",
    gitHubLink: "https://github.com/magenta-techx/Magenta-dashboard",
  },
  {
    projectName: "Fashion E-commerce",
    desc: "Built a simple responsive e-commerce platform using React, Tailwind CSS, ShadCN UI, TypeScript, and Redux",
    uri: "assets/Screenshot (7).png",
    gitHubLink: "https://github.com/adejoropeter/Fashion-e-commerce-website",
  },
  {
    projectName: "Konect",
    desc: "Konect's website is designed to be a user-friendly platform where donors can easily connect with various causes and make contributions",
    uri: "assets/Ngo.png",
    gitHubLink: "https://github.com/adejoropeter/U-hack-Pro",
  },
];
const Project = () => {
  return (
    <div
      id="project"
      className="bg-blue600 bg-black py-10 scroll-mt-16 text-white min-h-screen  w-full flex flex-col items-center gap-8">
      <h2 className="text-4xl">
        My <span className="font-bold">Projects</span>
      </h2>
      <div className="w-full flex flex-col items-center  bg-red00 p-10 gap-5 justify-center">
        {projectList.map((a) => {
          return (
            <div
              key={a.desc}
              className="flex justify-cente flex-1 items-center bg w-full  flex-col  max-w-2xl gap-3 h-fit  ">
              <div className="flex justify-center flex-1 items-center h-[600px]  bg w-full">
                <img
                  src={a.uri}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex bg-ellow-600 flex1 flex-col gap-2 text-white">
                <h3 className="text-lg font-bold">{a.projectName}</h3>
                <p className="text-lg text-[#D9D9D9] -w-sm">{a.desc}</p>
                <a href={a?.gitHubLink} target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
