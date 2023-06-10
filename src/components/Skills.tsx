import data_analysis from "../assets/data_analysis.svg";
import database from "../assets/database.svg";
import uxui from "../assets/uxui.svg";
import frontend from "../assets/frontend.svg";
import backend from "../assets/server.svg";
import git from "../assets/git.svg";
import SectionHeader from "./SectionHeader.tsx";

const skills = [
  {
    name: "Front-end",
    logo: frontend,
    description:
      "I like building web apps and websites. I learnt to use technologies like Angular, Vue, Tailwindcss and more.",
  },
  {
    name: "Back-end",
    logo: backend,
    description:
      "Building APIs and microservices is something I enjoy. I learnt to use technologies like Node.js, Spring Boot and general architecture.",
  },
  {
    name: "Database",
    logo: database,
    description:
      "Databases have always been part of my education. I've knowledge in SQL and NoSQL databases.",
  },
  {
    name: "UX / UI",
    logo: uxui,
    description:
      "Figma, Mockups, Designs, ... I've been training my UX / UI skills since the beginning of my CS studies.",
  },
  {
    name: "Data analysis",
    logo: data_analysis,
    description:
      "I've been trained to use data analysis tools like R, Python, and i'm currently increasing my skills in this field.",
  },
  {
    name: "Git",
    logo: git,
    description:
      "I've been using git for a long time now, and I'm used to work with it in a team since this is a must-to-know tool for developer.",
  },
];

const subtitle =
  "some of the skills gained during my time at university, apprenticeships or on my own.";

function Skills() {
  return (
    <div className="m-auto w-4/5 md:w-3/4 lg:w-3/4" id="skills">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader title="skills" subtitle={subtitle} />

        <div className="grid gap-8 gap-y-16 mt-16 mb-8 sm:grid-cols-2 lg:grid-cols-3 cursor-default">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center border border-white rounded-xl px-8 pb-4 group hover:bg-blue-950 hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 -rotate-45 bg-blue-900 -top-10 relative transition-all duration-500 rounded-xl group-hover:rotate-0 group-hover:scale-125">
                <div className="flex justify-center items-center h-full">
                  <img src={skill.logo} className="w-8 h-8" alt={skill.name} />
                </div>
              </div>
              <div className="text-3xl font-bold text-center -mt-10">
                {skill.name}
              </div>
              <div className="text-center w-full">{skill.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
