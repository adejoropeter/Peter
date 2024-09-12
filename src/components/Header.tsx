import { Download, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import { links } from "../data";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
type LinkTypes = {
  name: string;
  href: string;
}[];

const link: LinkTypes = links;
const Header = () => {
  const refs = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width:758px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to open the drawer
  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setIsDrawerOpen(true);
  };

  // Function to close the drawer
  const handleClose = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = "visible";
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (refs.current && !refs.current.contains(event.target as HTMLElement)) {
      setIsDrawerOpen(false); // Close the div when clicked outside
      document.body.style.overflow="visible"
    }
  };

  // Adding event listener on mount and removing it on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <motion.div
      onClick={() => handleClickOutside}
      ref={refs}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed  top-0  w-full z-10 px-4 sm:px-10 py-2 h-fit bg-white flex items-center justify-between text-black">
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 rounded-xl flex  bg-black">
          <img src="assets/Group.png" alt="" className="w-full h-full  " />
        </div>
        <h1 className="block  text-lg">Personal</h1>
      </div>
      <div className="sm:flex gap-6 hidden">
        {link.map((link) => {
          return (
            <a
              key={link.name}
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
        className="sm:flex hidden bg-black hover:bg-[#000000af] p-2 rounded-[6px] text-white gap-2 hover:text-white transition-all delay-75 items-center">
        <h1>Resume</h1>
        <Download />
      </a>
      <div onClick={handleOpen} className="sm:hidden flex cursor-pointer">
        <MenuIcon color="black" size="20px" />
      </div>

      {!isDesktop && (
        < >
          <motion.div
            initial={{ x: 100, opacity: 0, display: "none" }}
            animate={
              isDrawerOpen
                ? { x: 0, opacity: 1, display: "flex" }
                : { x: 100, opacity: 0, display: "none" }
            }
            className="    w-screen  h-full max-w-96 flex flex-col gap-4 justify-center items-center top-0 right-0 bg-[#EFEFEF] text-white fixed">
            {link.map((link) => {
              return (
                <a
                  key={link.name}
                  onClick={handleClose}
                  href={link.href}
                  className="text-black flex flex-col items-center  w-full h-fit cursor-pointer hover:text-[#000000be] transition-all delay-75">
                  {link.name}
                </a>
              );
            })}

            <a
              href="https://standardresume.co/r/ENmx76y4_pfOqf_iR93wu"
              target="_blank"
              className=" flex bg-black hover:bg-[#000000af] p-2 rounded-[6px] text-white gap-2 hover:text-white transition-all delay-75 items-center">
              <h1>Resume</h1>
              <Download />
            </a>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Header;
