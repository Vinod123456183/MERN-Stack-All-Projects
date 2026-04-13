import React, { useContext } from "react";
import { ThemeContext } from "../pages/core/ThemeContext";

function AboutMeDetailsBox({ name, count, smallDetail }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className="flex flex-col items-center bg-white dark:bg-[#1c1c1c] px-3 py-5 rounded-xl border-[2px] border-gray-300  dark:border-gray-200 border-r-slate-400 dark:border-r-blue-300 shadow-lg  transition-colors duration-300">
        <p className="text-xs text-gray-500 dark:text-gray-300">{name}</p>
        <p className="text-2xl  pt-1 pb-1 text-gray-800 dark:text-blue-600 ">
          {count}+
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-300">
          {smallDetail}
        </p>
      </div>
    </div>
  );
}

export default AboutMeDetailsBox;
