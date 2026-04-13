import React, { useContext } from "react";
import { ThemeContext } from "../../../pages/core/ThemeContext";
import { BsBookmark } from "react-icons/bs";

function RecenetJobsBox({
  urgent = false,
  image,
  logo,
  company,
  type,
  title,
  time,
  location,
  salary,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={` cursor-pointer max-w-sm rounded-xl p-2 shadow-lg overflow-hidden border  hover:scale-[1.05]
  transition-transform duration-[260ms] ${
    theme === "dark" ? "border-gray-600" : "border-gray-200"
  }`}
      >
        <div className="relative bg-purple-200">
          <img
            className="w-full h-56 object-cover rounded-xl"
            src={image}
            alt="Job Visual"
          />
          {urgent && (
            <span className="absolute top-3 left-3 bg-pink-200 text-pink-800 text-sm font-semibold px-2 py-1 rounded">
              Urgent
            </span>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Company" className="w-7 h-7" />

              <span
                className={` font-medium  ${
                  theme === "dark" ? "text-gray-200 " : "text-gray-700"
                }  `}
              >
                {company}
              </span>
            </div>
            <span
              className={`text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-0.5 rounded ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {type}
            </span>
          </div>

          <p
            className={`pt-2 text-lg font-semibold  h-14 overflow-hidden text-ellipsis whitespace-nowrap ${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          >
            {title}
          </p>

          <div
            className={`pb-1 flex items-center text-sm mt-2 space-x-4 ${
              theme === "dark" ? " text-gray-300" : " text-gray-500"
            }`}
          >
            <span>⏱️ {time}</span>
            <span>📍 {location}</span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="text-blue-500 font-bold text-lg">{salary}</span>
              <span className="text-sm text-gray-400">/Month</span>
            </div>
            <div>
              <BsBookmark
                className={`text-xl  cursor-pointer ${
                  theme === "dark"
                    ? "text-gray-300 "
                    : "text-gray-700 hover:text-gray-700"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecenetJobsBox;
