import education_logo from '../assets/diploma.svg'
import SectionHeader from "./SectionHeader.tsx";

const education = [
    {
        degree: "Master MIAGE",
        date: "2022 - 2024",
        school: "Université Paul Sabatier, Toulouse, France",
        tags: ['Project Management', 'Advanced Databases', 'Infrastructure', 'Data analysis', 'Maths / AI']
    },
    {
        degree: "Licence MIAGE",
        date: "2021 - 2022",
        school: "Université Paul Sabatier, Toulouse, France",
        tags: ['Web development', 'Maths', 'Project Management', 'Databases']
    },
    {
        degree: "DUT Informatique",
        date: "2019 - 2021",
        school: "IUT de Rodez, France",
        tags: ['Programming introduction', 'Maths', 'Project Management', 'Databases introduction']
    }
];

function Education() {
    return (
        <div className="w-full mb-8">
            <div className="m-auto w-full md:w-3/4 lg:w-2/3" id="education">
                <SectionHeader title="education" subtitle="my education" />
                <div className="h-full w-full relative mt-6">
                    <div className="hidden sm:block absolute left-1/2 top-1/2 h-full w-2 rounded bg-yellow-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                    {education.map((edu, index) => (
                        <div className="flex flex-col" key={index}>
                            <div className="flex items-center justify-center">
                                <div className="text-3xl z-10 h-14 w-14 bg-[#112049] rounded-full flex items-center justify-center">
                                    <img src={education_logo} alt="education" className="w-8 h-8" />
                                </div>
                            </div>
                            <div
                                key={index}
                                className={`flex flex-col mx-8 ${
                                    index % 2 === 0 ? 'items-start' : 'items-end'
                                }`}
                            >
                                <div
                                    className={`flex flex-col order-white border-2 bg-blue-950 p-4 rounded-xl w-full sm:w-[40%] b ${
                                        index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'
                                    }`}
                                >
                                    <div className="text-2xl font-bold">{edu.degree}</div>
                                    <div className="text-xl italic">📆 {edu.date}</div>
                                    <div className="text-xl">📍 {edu.school}</div>
                                    <div className="text-xl">🧑‍💻
                                        {edu.tags.map((tag, index) => (
                                        <span key={index} className="text-xl">
                                            {index === 0 ? ' ' : ', '}
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

