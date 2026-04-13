import React, { useContext } from "react";
import { FaHeart, FaCommentAlt, FaRecycle, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../core/ThemeContext"; // Adjust path as needed

function BaraMainComponent({ heading, topic, date, author, img, imgName }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={""}>
      <div
        className={`group relative flex flex-col-reverse lg:flex-row lg:items-start justify-between gap-4 py-4 border-b pb-1
          ${theme === "dark" ? "border-gray-400" : "border-gray-300"}`}
      >
        <div className="flex-1">
          <p
            className={`text-lg font-bold ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {heading}
          </p>
          <p
            className={`leading-tight pt-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {topic}
          </p>
          <p
            className={`text-[10.5px] tracking-wider font-semibold mt-3 uppercase ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            {date} • {author}
          </p>

          <div
            className={`flex gap-4 pt-7 text-sm py-3 justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <FaHeart size={13} />
            <FaCommentAlt size={13} />
            <FaRecycle size={13} />
            <FaShareAlt size={13} />
          </div>
        </div>

        <div className="w-40 flex-shrink-0">
          <img
            src={img}
            alt={imgName}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default BaraMainComponent;
