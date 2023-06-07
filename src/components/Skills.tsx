import data_analysis from '../assets/data_analysis.svg';
import database from '../assets/database.svg';
import uxui from '../assets/uxui.svg';
import frontend from '../assets/frontend.svg';
import backend from '../assets/server.svg';
import git from '../assets/git.svg';

const skills = [
    {
        name: 'Front-end development',
        logo: frontend,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
    {
        name: 'Back-end development',
        logo: backend,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
    {
        name: 'Database management',
        logo: database,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
    {
        name: 'UX / UI Design',
        logo: uxui,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
    {
        name: 'Data analysis',
        logo: data_analysis,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
    {
        name: 'Git',
        logo: git,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.'
    },
]

function Skills () {
    return (
        <div className="flex flex-col gap-4 items-center justify-center pt-24">
            <div
                className="text-4xl font-bold">
                skills
                <div className="relative w-full bottom-3.5 -z-10 -right-2 h-4 bg-green-800 rounded"></div>
            </div>
            <p className="text-center italic text-xl w-4/5 md:w-2/5">
                some of the skills gained during my time at university, apprenticeships or on my own.
            </p>

            <div className="grid mx-8 gap-8 gap-y-20 mt-12 md:grid-cols-2 md:mx-14 lg:grid-cols-3 lg:mx-48 mb-8">
                {skills.map((skill) => (
                    <div className="flex flex-col gap-4 items-center justify-center border-4 border-white rounded-xl px-8 pb-4 group hover:bg-cyan-950 transition-all">
                        <div className="w-20 h-20 -rotate-45 bg-cyan-900 relative -top-10 transition-all duration-500 rounded-xl group-hover:rotate-0 ">
                            <div className="flex justify-center items-center h-full">
                                <img src={skill.logo} className="w-12 h-12"/>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-center -mt-8">{skill.name}</div>
                        <div className="text-center w-full">{skill.description}</div>
                    </div>
                ))}
            </div>
        </div>
);
}

export default Skills;