import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  if (activeLink === "") {
    setActiveLink("home");
  }
  const navigate = (path: string) => {
    document.getElementById(path)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="font-bold text-lg">
      <div className="hidden sm:block absolute top-8 sm:left-[120px] lg:left-[212px] xl:left-[340px]">
        <a>rémi</a>
        <div className="absolute w-full bottom-0.5 -z-10 -right-1 h-2 bg-cyan-700 rounded"></div>
      </div>
      <nav className="flex justify-center mt-8 sm:absolute sm:mt-0 top-8 right-[90px] sm:right-[120px] lg:right-[212px] xl:right-[340px]">
        <div className="flex gap-6">
          <div className="group" onClick={() => navigate("home")}>
            <a>home</a>
            <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          <div className="group" onClick={() => navigate("skills")}>
            <a>skills</a>
            <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          <div className="group"  onClick={() => navigate("projects")}>
            <a>projects</a>
            <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          <div className="group" onClick={() => navigate("education")}>
            <a>education</a>
            <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
