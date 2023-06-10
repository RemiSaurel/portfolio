import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="font-bold text-lg border-b-4 border-blue-900 p-4 px-4 sm:px-16 md:px-32 lg:px-64">
      <nav className="flex justify-center items-center sm:justify-between">
        <div className="hidden sm:block pt-2">
          <a>rémi</a>
          <div className="relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-blue-700 rounded"></div>
        </div>
        <div className="flex gap-6 pt-2">
          <Link to="/portfolio/">
            <div className="group" onClick={() => navigate("skills")}>
              <span>skills</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link to="/portfolio/">
            <div className="group" onClick={() => navigate("projects")}>
              <span>projects</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link to="/portfolio/">
            <div className="group" onClick={() => navigate("education")}>
              <span>education</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link to="/portfolio/blog" className='disabled-link'>
            <div className="group">
              <span>👀 blog</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
