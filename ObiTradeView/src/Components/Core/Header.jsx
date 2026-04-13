// src/Components/Core/Header.jsx
import React, { useState } from "react";
import { LuFullscreen } from "react-icons/lu";

import {
  FiMenu,
  FiBell,
  FiUser,
  FiSliders,
  FiMaximize,
  FiMinimize,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <header className="flex items-center justify-between w-full bg-white px-3 lg:px-5 py-4 fixed z-50">
      <div className="flex items-center gap-2 lg:gap-9">
        <FiMenu
          className="text-gray-500   lg:text-xl cursor-pointer"
          onClick={onMenuClick}
        />
        <Link to={"/"}>
          <h1 className=" text-sm lg:text-lg font-semibold text-gray-700">
            ObiTradeView
          </h1>
        </Link>
        <div className="  lg:px-4">
          {isFullscreen ? (
            <FiMinimize
              className="text-gray-500   text-md lg:text-xl cursor-pointer"
              onClick={toggleFullscreen}
              title="Exit Fullscreen"
            />
          ) : (
            <FiMaximize
              className="text-gray-500   text-md lg:text-xl cursor-pointer"
              onClick={toggleFullscreen}
              title="Enter Fullscreen"
            />
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        <a href="/indian-market">
          <img
            src="https://flagcdn.com/w40/in.png" // 40px wide India flag
            alt="India"
            className="w-6 h-4 object-cover rounded-sm"
          />{" "}
        </a>

        {/* <FiBell className="text-gray-500   lg:text-xl cursor-pointer" /> */}
        <FiUser className="text-gray-500   lg:text-xl cursor-pointer hidden lg:block " />
        <FiSliders className="text-gray-500   lg:text-xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
