import Hero from "./Hero.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";

function Main() {
  return (
    <div className="h-42 absolute top-40 w-full">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default Main;
