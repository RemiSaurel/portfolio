import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Hero() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center font-medium">
      <h1 className="text-8xl font-bold mb-8">🧑‍💻👋</h1>
      <h2 className="text-4xl font-bold">
        hi, i'm <span className="text-yellow-500">Rémi</span>
      </h2>
      <p className="text-xl text-cyan-200 text-center">
        Computer Science student apprentice{" "}
      </p>
      <p className="text-xl w-4/5 md:w-2/5 text-center mb-8">
        I’m 25 years old, currently in
        <span className="text-yellow-500"> MIAGE </span>
        (CS + Project management) at
        <span className="text-yellow-500"> University Paul Sabatier </span>
        Toulouse, France. I’m working as a
        <span className="text-yellow-500"> full-stack developer </span>
        for
        <span className="text-yellow-500"> Kosmos </span>
        and
        <span className="text-yellow-500"> IRIT </span>
        (TALENT team), on a TEL subject.
      </p>
      <button className="border-2 border-white rounded-lg text-xl px-4 py-2 font-bold mb-4 hover:bg-cyan-900 transition-all duration-200">
        <a href="mailto:remi.saurel@toulouse.miage.fr">Contact me</a>
      </button>
      <div className="flex gap-8">
        <a
          className="w-14 h-14 rounded-full bg-cyan-900 mt-2 items-center flex justify-center transition-all duration-200 hover:bg-cyan-950"
          href="https://github.com/RemiSaurel"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          className="w-14 h-14 rounded-full bg-cyan-900 mt-2 items-center flex justify-center transition-all duration-200 hover:bg-cyan-950"
          href="https://www.linkedin.com/in/r%C3%A9mi-saurel/"
          target="_blank"
        >
          <img src={linkedin} alt="linkeding" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
