import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="w-screen px-10 py-2 h-fit bg-white flex items-center justify-between text-black">
      <div>
        <h1>Personal</h1>
      </div>
      <div className="flex gap-6 ">
        <Link className="text-black hover:text-[#000000be] transition-all delay-75" to="">
          About Me
        </Link>
        <Link className="text-black hover:text-[#000000be] transition-all delay-75" to={""}>
          Skills
        </Link>
        <Link className="text-black hover:text-[#000000be] transition-all delay-75" to={""}>
          Project
        </Link>
        <Link className="text-black hover:text-[#000000be] transition-all delay-75" to={""}>
          Contact Me
        </Link>
      </div>

      <Button className="flex bg-black rounded-[6px] text-white gap-2 hover:bg-[#0000006e] transition-all delay-75 items-center">
        <h1>Resume</h1>
        <Download />
      </Button>
    </div>
  );
};

export default Header;
