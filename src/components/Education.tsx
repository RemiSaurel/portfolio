import education_logo from "../assets/diploma.svg";
import SectionHeader from "./SectionHeader.tsx";

const education = [
  {
    degree: "Master MIAGE",
    date: "2022 - 2024",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: [
      "Project Management",
      "Advanced Databases",
      "Infrastructure",
      "Data analysis",
      "Maths / AI",
    ],
  },
  {
    degree: "Licence MIAGE",
    date: "2021 - 2022",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: ["Web development", "Maths", "Project Management", "Databases"],
  },
  {
    degree: "2-year CS diploma",
    date: "2019 - 2021",
    school: "DUT Informatique in CS, IUT de Rodez, France",
    tags: [
      "Programming introduction",
      "Maths",
      "Project Management",
      "Databases introduction",
    ],
  },
];

function Education() {
  return (
    <div className="w-full mb-8">
      <div className="m-auto w-full md:w-3/4 lg:w-2/3" id="education">
        <SectionHeader title="education" subtitle="my education" />
        <div className="h-full w-full relative mt-6">
          <div className="hidden sm:block absolute left-1/2 top-1/2 h-full w-1.5 rounded bg-blue-900 opacity-90 transform -translate-x-1/2 -translate-y-1/2"></div>
          {education.map((edu, index) => (
            <div className="flex flex-col group" key={index}>
              <div className="flex items-center justify-center">
                <div className="hidden sm:flex text-3xl z-10 h-16 w-16 bg-blue-950 border-blue-900 rounded-full items-center justify-center border-4">
                  <img
                    src={education_logo}
                    alt="education"
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <div
                key={index}
                className={`my-2 items-center md:my-0 flex flex-col mx-8 ${
                  index % 2 === 0 ? "sm:items-start" : "sm:items-end"
                }`}
              >
                <div className="text-2xl font-bold p-1 mb-1">{edu.degree}</div>
                <div
                  className={`flex flex-col bg-blue-950 border-2 border-blue-900 shadow-md p-4 rounded-xl w-full hover:border-blue-600 transition-all duration-500 sm:w-[40%]  ${
                    index % 2 === 0
                      ? "sm:items-start sm:text-left"
                      : "sm:items-end sm:text-right"
                  }`}
                >
                  <div className="text-xl italic">📆 {edu.date}</div>
                  <div className="text-xl">📍 {edu.school}</div>
                  <div className="text-xl">
                    🧑‍💻
                    {edu.tags.map((tag, index) => (
                      <span key={index} className="text-xl">
                        {index === 0 ? " " : ", "}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
