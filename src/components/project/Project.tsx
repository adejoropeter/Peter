import { Github } from "lucide-react";
import React from "react";

const projectList = [
  {
    projectName: "CapStone",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, veritatis. Vitae, rerum. Rerum, tempora porro fugiat, atque voluptatum hic maxime excepturi, ab eos eaque debitis! Itaque possimus minus repellat ratione? Quisquam dolore distinctio commodi voluptatibus beatae eaque q",
    uri: "assets/Screenshot (7).png",
    gitHubLink:"https://github.com/adejoropeter/Fashion-e-commerce-website"
  },
  {
    projectName: "Fashion E-commerce",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, veritatis. Vitae, rerum. Rerum, tempora porro fugiat, atque voluptatum hic maxime excepturi, ab eos eaque debitis! Itaque possimus minus repellat ratione? Quisquam dolore distinctio commodi voluptatibus beatae eaque q",
    uri: "assets/t-shirt-color-blue-2.avif",
  },
];
const Project = () => {
  
  return (
    <div id="project" className="bg-blue600 bg-black scroll-mt-24 text-white h-fit  w-full flex flex-col items-center gap-8">
      <h2 className="text-4xl">
        My <span className="font-bold">Projects</span>
      </h2>
      <div className="w-full flex flex-col items-center  bg-red00 p-10 gap-5 justify-center">
        {projectList.map((a) => {
          return (
            <div className="flex flex-col bg-red400 max-w-2xl gap-3 h-[600px]  items-center">
              <div className="flex justify-center flex-1 items-center h-  bg w-full">
                <img
                  src={a.uri}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex bg-ellow-600 flex1 flex-col gap-2 text-white">
                {/* <h3 className="text-2xl font-bold">0{idx + 1}</h3> */}
                <h3 className="text-lg font-bold">{a.projectName}</h3>
                <p className="text-sm text-[#D9D9D9] -w-sm">{a.desc}</p>
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
