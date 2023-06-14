import Hero from "./Hero.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Education from "./Education.tsx";
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();

  return (
    <div className="mt-16 w-full">
      {location.pathname === "/portfolio/" && (
        <div>
          <Hero />
          <Skills />
          <Projects />
          <Education />
        </div>
      )}
    </div>
  );
}

export default Main;
