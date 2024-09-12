import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const fadeInAnimation = [
  {
    name: "Facebook",
    icon: <FacebookIcon className="group-hover:text-white " />,
    link: "https://web.facebook.com/peter.adejoro.7",
  },
  {
    name: "Github",
    icon: <Github className="group-hover:text-white" />,
    link: "https://github.com/adejoropeter",
  },
  {
    name: "Instagram",
    icon: <Instagram className="group-hover:text-white" />,
    link: "https://www.instagram.com/adej_apa",
  },
  {
    name: "Twitter",
    icon: <Twitter className="group-hover:text-white" />,
    link: "https://x.com/dev_apa",
  },
];

const Intro = () => {
  // Define animation variants
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * idx, duration: 0.4 },
    }),
  };

  return (
    <div className="overflow-hidden text-black md:flex-col h-fit gap-10 mt-20 w-full px-6 sm:px-14 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col flex-1 max-w-lg gap-4 sm:mt-16">
        <p className="text-4xl leading-normal">
          Hello I'm <span className="font-semibold">Adejoro Peter,</span>
          <br />
          <span className="font-semibold">Frontend </span>
          <span className="text-stroke text-stroke-2 text-stroke-black text-white text-4xl font-bold">
            Developer
          </span>
          <br /> Based In <span className="font-semibold">Lagos, Nigeria.</span>
        </p>
        <p>
          Frontend developer and writing clean React code with over 2 years
          experience crafting and creating products for companies and
          businesses. I enjoy being challenged and engaging with projects that
          require me to work outside my comfort and knowledge set, as continuing
          to learn new languages and development techniques is important to me
          and the success of any organization.
        </p>
        <div className="flex justify-between mt-10">
          <div className="flex gap-4">
            {fadeInAnimation.map((a, idx) => (
              <motion.a
                href={a.link}
                target="_blank"
                key={a.name}
                variants={fadeInAnimationVariants}
                initial="initial"
                animate="animate"
                custom={idx} // Use the index for delay calculation
                whileInView="animate"
                viewport={{ once: true, amount: 0.6 }} // Show once when in view
                className="w-10 h-10 border group cursor-pointer border-black flex justify-center items-center text-black rounded-[4px] bg-white hover:bg-black">
                {a.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-1 items-center w-full">
        <img
          src="assets/intro.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Intro;
