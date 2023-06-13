import ownworkspace from "../assets/projects/ownworkspace.png";
import sorting from "../assets/projects/sorting.png";
import spotidrone from "../assets/projects/spotidrone.png";
import github from "../assets/github.svg";
import web from "../assets/web.svg";
import lockio from "../assets/projects/lockio.png";
import poggers from "../assets/projects/poggers.png";
import dodleme from "../assets/projects/dodleme.png";
import avecle6 from "../assets/projects/avecle6.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Autoplay, EffectCoverflow, Keyboard, Pagination} from "swiper";

import SectionHeader from "./SectionHeader.tsx";

const projects = [
  {
    name: "Sorting Visualizer",
    img: sorting,
    links: [
      {
        icon: github,
        url: "https://github.com/RemiSaurel/sorting-algorithms",
      },
      {
        icon: web,
        url: "https://remisaurel.github.io/sorting-algorithms/",
      },
    ],
    tags: ["Web", "Front", "React"],
    description:
      "This is a sorting visualizer I made to learn React. It's a simple web app that allows you to visualize sorting algorithms.",
  },
  {
    name: "Lockio",
    img: lockio,
    links: [
      {
        icon: github,
        url: "https://github.com/Lockiio",
      },
    ],
    tags: ["Web", "Front", "Back", "Python", "Spring Boot", "Docker"],
    description:
      "Lockio is our Master project. This PoC was designed to demonstrate our idea about an innovative solution to store your stuff.",
  },
  {
    name: "OwnWorkspace",
    img: ownworkspace,
    links: [
      {
        icon: github,
        url: "https://github.com/RemiSaurel/own-workspace",
      },
      {
        icon: web,
        url: "https://workspace-remisaurel.vercel.app/",
      },
    ],
    tags: ["Web", "Front", "Vue", "Back", "Supabase"],
    description:
      "This web app allows you to work with lofi-music, a pomodoro timer and a todo list.",
  },
  {
    name: "avecle6",
    img: avecle6,
    links: [
      {
        icon: web,
        url: "https://www.avecle6.com/",
      },
    ],
    tags: ["Web", "UX/UI", "Design", "Front"],
    description:
        "Official website of the Overwatch French team avecle6. I helped on the design and the web integration.",
  },
  {
    name: "SpotiDrone",
    img: spotidrone,
    links: [
      {
        icon: github,
        url: "https://github.com/RemiSaurel/sorting-algorithms",
      },
    ],
    tags: ["API", "Python", "Spotify"],
    description:
      "Python script that allows you to discover new artists based on your recommendations. I'm using the Spotify API to get the recommendations and create the playlist.",
  },
  {
    name: "Poggers Typer",
    img: poggers,
    links: [
      {
        icon: github,
        url: "https://github.com/RemiSaurel/PoggersTyper",
      },
      {
        icon: web,
        url: "https://poggers-typer.vercel.app/",
      },
    ],
    tags: ["Web", "Front"],
    description:
      "A vanilla JS typing game. I made this project to learn more about vanilla JS and CSS.",
  },
  {
    name: "DodleMe",
    img: dodleme,
    links: [
      {
        icon: github,
        url: "https://github.com/RemiSaurel/dodleme",
      },
      {
        icon: github,
        url: "https://github.com/AdamKhalepo/dodlemeapi",
      },
    ],
    tags: ["Web", "Front", "Back", "MongoDB"],
    description:
      "3rd year university Web project. We had to create a web app that allows you to create and share events planning.",
  },
];

const subtitle =
  "always looking to learn new stuff, I love creating projects in my\n" +
  "            spare time.";

function Projects() {
  return (
    <div className="w-full mb-8">
      <div className="m-auto w-full md:w-3/4 lg:w-2/3" id="projects">
        <SectionHeader title="projects" subtitle={subtitle} />
      </div>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        roundLengths={true}
        effect={"coverflow"}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        speed={500}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 70,
          modifier: 1,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Keyboard]}
        className="w-full h-full py-8"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="bg-cover bg-center w-[300px] h-[300px] md:w-[400px] md:h-[500px] lg:w-[700px] lg:h-[600px]"
          >
            <div className="rounded-lg flex justify-center items-center">
              <div className="justify-center w-[300px] h-[400px] md:w-[600px] md:h-[500px] lg:w-[700px] lg:h-[600px] group">
                <div
                  className={`bg-blue-950 rounded-lg mx-auto transition-all group group-hover:bg-blue-800 duration-500 ease-in-out`}
                >
                  <img
                    src={project.img}
                    className="object-top p-2 w-full h-full rounded-xl transition-all duration-500 ease-in-out"
                    alt={project.name}
                  />
                  <div className="absolute bottom-0 w-full rounded-b-lg bg-gray-900 bg-opacity-90 md:bg-opacity-100">
                    <div className="px-4 py-2 text-2xl font-bold mt-2 text-white text-center">
                      {project.name}
                    </div>
                    <div className="flex px-4 py-2 flex-wrap justify-center">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-800 bg-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="hidden md:block px-8 pb-2 text-white text-lg">
                      {project.description}
                    </div>
                    <div className="flex justify-center py-2">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 mx-1 text-white transition-all duration-300 rounded-full hover:bg-gray-600"
                        >
                          <img
                            src={link.icon}
                            alt={link.url}
                            className="w-8 h-8 rounded"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
