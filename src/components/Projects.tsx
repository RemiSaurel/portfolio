import ownworkspace from "../assets/projects/ownworkspace.png";
import sorting from "../assets/projects/sorting.png";
import spotidrone from "../assets/projects/spotidrone.png";
import github from "../assets/github.svg";
import web from "../assets/web.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { EffectCoverflow } from "swiper";

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
      "This is a sorting visualizer I made to learn React and Tailwindcss. It's a simple web app that allows you to visualize sorting algorithms.",
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
];

function Projects() {
  return (
    <div className="w-full mb-8">
      <div className="m-auto w-full md:w-3/4 lg:w-2/3" id="projects">
        <div className="flex flex-col gap-4 items-center justify-center pt-24">
          <div className="text-4xl font-bold">
            projects
            <div className="relative w-full bottom-3.5 -z-10 -right-2 h-4 bg-green-800 rounded"></div>
          </div>
          <p className="text-center italic text-xl w-4/5 md:w-2/5">
            always looking to learn new stuff, I love creating projects in my
            spare time.
          </p>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="w-2/3 h-full py-8"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="bg-cover bg-center w-[300px] h-[200px] md:w-[500px] md:h-[350px] lg:w-[800px] lg:h-[600px]"
          >
            <div className="rounded-lg flex justify-center items-center">
              <div className="justify-center w-[300px] h-[200px] md:w-[500px] md:h-[350px] lg:w-[800px] lg:h-[600px]">
                <div
                  className={`bg-cyan-900 rounded-lg mx-auto transition-all group `}
                >
                  <img
                    src={project.img}
                    className="object-scale-down object-top p-4 w-full h-4/5 rounded-lg"
                    alt={project.name}
                  />
                  <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-80 transition-all duration-500 group-hover:opacity-100">
                    <div className="px-4 py-2 text-2xl font-bold mt-2 text-white text-center">
                      {project.name}
                    </div>
                    <div className="hidden md:flex px-4 py-2 flex-wrap justify-center">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 mb-2 mr-2 text-sm text-gray-800 bg-gray-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="hidden md:block px-8 py-2 text-white text-md">
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
