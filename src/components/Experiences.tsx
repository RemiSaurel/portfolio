import SectionHeader from "./SectionHeader.tsx";

const experiences = [
    {
        name: "2nd year internship",
        company: "RAGT2n",
        location: "Rodez, France",
        tags: ["Web", "Front", "Back", "Statistics"],
        description: "A description..."
    },
    {
        name: "3rd year apprenticeship",
        company: "RAGT2n",
        location: "Rodez, France",
        tags: ["Web", "Front", "Back", "Intensive computations", "Statistics", "R"],
        description: "A description..."
    },
    {
        name: "4th and 5th year apprenticeship",
        company: "Kosmos | IRIT (TALENT)",
        location: "Toulouse, France",
        tags: ["Front", "Back", "Research", "Data Analysis", "Project Management"],
        description: "A description..."
    },
];

function Experiences() {
    return (
        <div className="m-auto w-full" id="skills">
            <div className="flex flex-col items-center justify-center">
                <SectionHeader title="experiences" subtitle="my professional experiences" />
            </div>
        </div>
    );
}

export default Experiences;
