import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
const links = [
  {
    name: "About Me",
    href: "#about",
  },
  {
    name: "Skill",
    href: "#skill",
  },
  {
    name: "Project",
    href: "#project",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
const Header = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // transition={{ delay: 2 }}
      className="fixed  top-0  w-screen z-10 px-10 py-2 h-fit bg-white flex items-center justify-between text-black">
      <div>
        <h1>Personal</h1>
      </div>
      <div className="flex gap-6 ">
        {links.map((link) => {
          return (
            <a
              href={link.href}
              className="text-black cursor-pointer hover:text-[#000000be] transition-all delay-75">
              {link.name}
            </a>
          );
        })}
      </div>

      <a
        href="https://standardresume.co/r/ENmx76y4_pfOqf_iR93wu"
        target="_blank"
        className="flex bg-black hover:bg-[#000000af] p-2 rounded-[6px] text-white gap-2 hover:text-white transition-all delay-75 items-center">
        <h1>Resume</h1>
        <Download />
      </a>
    </motion.div>
  );
};

export default Header;
