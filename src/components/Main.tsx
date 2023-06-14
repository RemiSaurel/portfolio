import Hero from "./Hero.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Education from "./Education.tsx";
import { useLocation } from "react-router-dom";
import Experiences from "./Experiences.tsx";

function Main() {
  const location = useLocation();

  return (
    <div className="mt-16 w-full">
      {location.pathname === "/portfolio/" && (
        <div>
          <Hero />
          <Skills />
          <Projects />
          <Experiences />
          <Education />
        </div>
      )}
    </div>
  );
}

export default Main;
