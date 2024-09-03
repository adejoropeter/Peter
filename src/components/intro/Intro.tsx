import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
const fadeInAnimation = ["FacebookIcon", "Github", "Instagram", "Twitter"];
const Intro = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (idx:number) => ({ opacity: 1, y: 0 ,transition:{delay:0.05*idx}}),
  };
  return (
    <div className="overflow-hidden text-black h-screen   mt-20  w-full px-14 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex flex-col flex-1 max-w-lg gap-4">
        <p className="text-4xl leading-normal ">
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
            {fadeInAnimation.map((aw, idx) => {
              return (
                <>
                  <motion.div
                    variants={fadeInAnimationVariants}
                    viewport={{ once: true }}
                    initial="initial"
                    custom={idx}
                    whileInView="animate"
                    className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
                    {aw === "FacebookIcon" && (
                      <FacebookIcon className="group-hover:text-white" />
                    )}
                    {aw === "Github" && (
                      <Github className="group-hover:text-white" />
                    )}
                    {aw === "Instagram" && (
                      <Instagram className="group-hover:text-white" />
                    )}
                    {aw === "Twitter" && (
                      <Twitter className="group-hover:text-white" />
                    )}
                  </motion.div>
                  {/* <div className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
                    <Twitter className="group-hover:text-white" />
                  </div>
                  <div className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
                    <Github className="group-hover:text-white" />
                  </div>
                  <div className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center rounded-[4px] bg-white hover:bg-black">
                    <Instagram className="group-hover:text-white" />
                  </div> */}
                </>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex-1 h-full">
        <img
          src="assets/intro.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
