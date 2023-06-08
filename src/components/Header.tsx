import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  // Setup first link as active
  if (activeLink === "") {
    setActiveLink("home");
  }
  return (
    <div className="font-bold text-lg">
      <div className="hidden sm:block absolute top-8 sm:left-[120px] lg:left-[212px] xl:left-[340px]">
        <a href="#home">rémi</a>
        <div className="absolute w-full bottom-0.5 -z-10 -right-1 h-2 bg-cyan-700 rounded"></div>
      </div>
      <nav className="hidden sm:block absolute top-8 right-[120px] lg:right-[212px] xl:right-[340px]">
        <div className="flex gap-6">
          <div className="w-fit">
            <a href="#home" onClick={() => setActiveLink("home")}>
              home
            </a>
            {activeLink === "home" && (
              <div className="relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
            )}
          </div>
          <div>
            <a href="#skills" onClick={() => setActiveLink("skills")}>
              skills
            </a>
            {activeLink === "skills" && (
              <div className="relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
            )}
          </div>
          <div>
            <a href="#projects" onClick={() => setActiveLink("projects")}>
              projects
            </a>
            {activeLink === "projects" && (
              <div className="relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
            )}
          </div>
          <div>
            <a href="#education" onClick={() => setActiveLink("education")}>
              education
            </a>
            {activeLink === "education" && (
              <div className="relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-green-800 rounded"></div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
