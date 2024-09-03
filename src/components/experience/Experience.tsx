import { LucideGraduationCap } from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

const experiencesData = [
  {
    title: "Magenta",
    location: "Lagos, Nigeria",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eligendi",
    icon: <LucideGraduationCap />,
    date: "2022",
  },
  {
    title: "Univel Hackathon",
    location: "Lagos, Nigeria",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eligendi",
    icon: <LucideGraduationCap />,
    date: "2022",
  },
  {
    title: "Univelcity",
    location: "Lagos, Nigeria",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eligendi",
    icon: <LucideGraduationCap />,
    date: "2021",
  },
];
export default function Experience() {
  // const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();

  return (
    <section
      // ref={ref}
      id="experience"
      className="bg-black  text-white h-fit py-10  w-full flex flex-col  items-center gap-20">
      <h2 className="text-4xl">
        My <span className="font-bold">Experience</span>
      </h2>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                //   theme === "light" ? "" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                //   theme === "light"
                //     ? "0.4rem solid #9ca3af"
                //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)", //   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}>
              <h3 className="font-semibold capitalize text-black">{item.title}</h3>
              <p className="font-normal !mt-0 text-black">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
