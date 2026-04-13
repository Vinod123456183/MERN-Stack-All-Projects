import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeContext } from "../../core/ThemeContext";

function BaraNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useContext(ThemeContext);

  const links = [
    { name: "Home", to: "/resources/bara" },
    { name: "Videos", to: "https://youtube.com/", external: true },
    { name: "Courses", to: "/resources/bara/courses" },
    { name: "Roadmaps", to: "https://youtube.com/", external: true },
    { name: "Downloads", to: "https://youtube.com/", external: true },
    { name: "My Stuff", to: "https://youtube.com/", external: true },
    { name: "Archive", to: "/resources/bara/archive" },
    { name: "About", to: "/resources/bara/about" },
  ];

  return (
    <nav
      className={`w-full border-t border-b py-5 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-black border-gray-100 text-white"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      {/* Mobile Toggle */}
      <div className="flex items-center justify-between sm:hidden">
        <span className="text-lg font-semibold">BaraNavbar</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl transition-colors ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 mt-4 sm:mt-0 text-sm font-medium transition-colors duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}
      >
        {links.map(({ name, to, external }) => {
          const isActive = !external && currentPath === to;

          return (
            <li key={name} className="relative group">
              {external ? (
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-150 hover:text-blue-500"
                >
                  {name}
                </a>
              ) : (
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`transition duration-150 ${
                    isActive ? "font-bold" : ""
                  } hover:text-blue-500`}
                >
                  {name}
                </Link>
              )}
              {isActive && (
                <span
                  className={`absolute -bottom-5 left-0 w-full h-[2px] ${
                    theme === "dark" ? "bg-white" : "bg-gray-800"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default BaraNavbar;
