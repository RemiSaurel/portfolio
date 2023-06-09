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
      "Building websites is something I enjoy. Currently learning React, I've knowledge in other frameworks like Vue.js and Angular.",
  },
  {
    name: "Back-end",
    logo: backend,
    description:
      "Spring Boot, Node.js, ... I've been trained to build back-end applications within my CS studies and my apprenticeship missions.",
  },
  {
    name: "Database",
    logo: database,
    description:
      "Databases have always been part of my education. I've knowledge in SQL and NoSQL databases with MySQL, Oracle, Postgres, Neo4J, etc.",
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
      "Data analysis has always interested me. I've been doing it for missions + projects and still learning new things about it.",
  },
  {
    name: "Git",
    logo: git,
    description:
      "This is a must-to-know tool for developer and I'm trying to master it as much as possible.",
  },
];

const subtitle =
  "some of the skills gained during my time at university, apprenticeships or on my own.";

function Skills() {
  return (
    <div className="m-auto w-4/5 md:w-3/4 lg:w-3/4" id="skills">
      <div className="flex flex-col items-center justify-center">
        <SectionHeader title="skills" subtitle={subtitle} />

        <div className="grid gap-8 gap-y-20 mt-20 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center border-2 border-blue-900 rounded-xl bg-blue-950 shadow-md px-8 pb-4 group hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all"
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
