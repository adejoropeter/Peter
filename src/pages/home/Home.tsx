import Skill from "../../components/skill/Skill";
import Experience from "../../components/experience/Experience";
import Intro from "../../components/intro/Intro";
import AboutMe from "../../components/about/AboutMe";
import Project from "../../components/project/Project";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div className="">
      <Intro />
        <Skill />
      {/* <Experience /> */}
      <AboutMe />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
