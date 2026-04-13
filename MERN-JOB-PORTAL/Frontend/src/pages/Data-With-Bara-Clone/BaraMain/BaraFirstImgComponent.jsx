import React, { useContext } from "react";
import {
  FaThumbtack,
  FaRegHeart,
  FaRegCommentDots,
  FaRecycle,
  FaShareSquare,
} from "react-icons/fa";
import { ThemeContext } from "../../core/ThemeContext"; // Adjust path if needed

function BaraFirstImgComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full py-7 gap-3">
      {/* Left: Image */}
      <div className="flex-shrink-0">
        <img
          src="https://substackcdn.com/image/fetch/$s_!kJKs!,w_1280,h_853,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F665564f8-8500-4b94-a740-35615ca79df9_2560x1440.jpeg"
          alt="Course resources"
          className="w-full lg:w-[450px] h-auto rounded-sm shadow-md"
        />
      </div>

      {/* Right: Text Content */}
      <div
        className={`text-center group relative ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <p className="text-3xl font-bold mb-3 text-center">
          List all Courses & Free Downloads
        </p>
        <p
          className={`mb-2 text-center text-md ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          You can find here links to all course materials
        </p>

        {/* Date + Pin */}
        <div
          className={`flex w-full items-center justify-center gap-2 text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <FaThumbtack className="text-gray-400" />
          <span className="text-center">Mar 11, 2024</span>
        </div>

        {/* Hover Icons */}
        <div
          className={`flex justify-center gap-6 pt-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
            theme === "dark" ? "text-gray-400" : "text-gray-400"
          }`}
        >
          <FaRegHeart />
          <FaRegCommentDots />
          <FaRecycle />
          <FaShareSquare />
        </div>
      </div>
    </div>
  );
}

export default BaraFirstImgComponent;
