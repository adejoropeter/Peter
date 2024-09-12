const AboutMe = () => {
  return (
    <div
      id="about"
      className=" text-black  scroll-mt-14 h-fit py-10  w-full flex-col lg:flex-row  flex sm:justify-between   px-6 sm:px-14 items-center gap-20">
      <div className="flex flex-col flex-1  gap-6 max-w-lg">
        <h2 className="text-4xl">
          About <span className="font-bold ">Me</span>{" "}
        </h2>
        <p className="text-lg">
          I'm a passionate frontend developer based in Lagos, Nigeria,
          specializing in building highly interactive and dynamic web
          applications. I work with technologies like React, TypeScript,
          JavaScript, Next Js/Ts, Tailwind CSS, Redux, and React Query to create
          visually appealing and user-friendly interfaces. My focus is on
          writing clean, maintainable code and constantly staying updated with
          the latest in web development. <br /> <br /> One of my hidden skills
          is my ability to efficiently research and find solutions on the
          internet when I encounter coding challenges. This skill allows me to
          overcome obstacles quickly and ensures continuous learning and growth
          as a developer. I thrive on solving problems and bringing creative
          ideas to life through code.
        </p>
      </div>
      <div className="flex-1 mt-5">
        <img
          src="assets/Group1.png"
          alt=""
          className="w-full object-fill h-[25rem]"
        />
      </div>
    </div>
  );
};

export default AboutMe;
