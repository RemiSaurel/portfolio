import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import discord from "../assets/discord.svg";
import TypeWriter from "typewriter-effect";
function Hero() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center font-medium">
      <h1 className="text-8xl font-bold mb-8">
        🧑‍💻<span className="text-6xl">👋</span>
      </h1>
      <h2 className="text-4xl font-bold flex gap-2">
        hi, i'm
        <span className="text-yellow-500">
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("rémi :)")
                .start()
                .pauseFor(2000)
                .deleteAll("natural")
                .typeString("coding")
                .pauseFor(2000)
                .deleteAll("natural")
                .typeString("learning")
                .pauseFor(2000)
                .deleteAll("natural");
            }}
          />
        </span>
      </h2>
      <p className="text-xl text-cyan-200 text-center">
        IT and Research enthusiast
      </p>
      <p className="text-xl w-4/5 md:w-2/5 text-center mb-8">
      CS + Project Management <span className="text-yellow-500"> (MIAGE) </span>
        Master degree at 
        <span className="text-yellow-500"> University Paul Sabatier </span>
        Toulouse, France. <br />
        I’m working as a
        <span className="text-yellow-500"> full-stack developer </span>
        for
        <span className="text-yellow-500"> Kosmos </span>
        and
        <span className="text-yellow-500"> IRIT </span>
        (TALENT team), on a TEL subject.
        <br />
        <span>
          Feel free to join my{" "}
          <span className="text-yellow-500"> Studoby Discord </span>
          dedicated to IT studies and mutual help.
        </span>
      </p>
      <div className="flex gap-8">
        <a
          className="w-14 h-14 rounded-full bg-blue-900 mt-2 items-center flex justify-center transition-all duration-200 hover:scale-125"
          href="https://discord.gg/sAPh3aTvqB"
          target="_blank"
        >
          <img className="w-8 h-8" src={discord} alt="discord" />
        </a>
        <a
          className="w-14 h-14 rounded-full bg-blue-900 mt-2 items-center flex justify-center transition-all duration-200 hover:scale-125"
          href="mailto:remi.saurel@toulouse.miage.fr"
          target="_blank"
        >
          <img className="w-8 h-8" src={mail} alt="mail" />
        </a>
        <a
          className="w-14 h-14 rounded-full bg-blue-900 mt-2 items-center flex justify-center transition-all duration-200 hover:scale-125"
          href="https://github.com/RemiSaurel"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          className="w-14 h-14 rounded-full bg-blue-900 mt-2 items-center flex justify-center transition-all duration-200 hover:scale-125"
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
