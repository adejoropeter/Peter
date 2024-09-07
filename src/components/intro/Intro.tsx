import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
const fadeInAnimation = ["FacebookIcon", "Github", "Instagram", "Twitter"];
// const fadeInAnimation = [<FacebookIcon className="group-hover:text-white" />, <Github className="group-hover:text-white" />, ];
const Intro = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * idx },
    }),
  };
  return (
    <div className="overflow-hidden text-black md:flex-col h-fit   mt-20  w-full px-6 sm:px-14 flex flex-col lg:flex-row items-center justify-between">
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
          Frontend developer and writing clean React code with over 2 years experience crafting and creating products for companies and
          businesses.I enjoy being challenged and engaging with projects that
          require me to work outside my comfort and knowledge set, as continuing
          to learn new languages and development techniques is important to me
          and the success of any organization.
        </p>
        <div className="flex justify-between mt-10">
          <div className="flex gap-6 ">
            {fadeInAnimation.map((aw, idx) => {
              return (
                <>
                  <motion.div
                    variants={fadeInAnimationVariants}
                    viewport={{ once: true }}
                    initial="initial"
                    custom={idx}
                    key={aw}
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
                </>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center flex-1 items-center   bg w-full">
        <img
          src="assets/intro.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* <div className="flex-1 h-full">
        <img
          alt=""
          className="w-full -full object-cover"
        />
      </div> */}
    </div>
  );
};

export default Intro;
