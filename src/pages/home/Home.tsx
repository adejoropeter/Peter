import React from "react";
import Skill from "../../components/skill/Skill";
import Experience from "../../components/experience/Experience";
import Intro from "../../components/intro/Intro";
import AboutMe from "../../components/about/AboutMe";

const Home = () => {
  return (
    <div className="">
      <Intro />
      <Skill />
      <Experience />
      <AboutMe />
    </div>
  );
};

export default Home;
