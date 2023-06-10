import Hero from "./Hero.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Education from "./Education.tsx";

function Main() {
  return (
    <div className="absolute top-40 w-full">
      <Hero />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default Main;
