import React, { useContext } from "react";
import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { ThemeContext } from "../../../core/ThemeContext";

function BaraIntro() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className={isDark ? " text-gray-200" : "bg-white text-gray-700"}>
      {/* Profile image */}
      <div className="flex justify-center mb-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Baraa Profile"
          className={`rounded-full border-2 shadow-md w-24 h-24 object-cover ${
            isDark ? "border-gray-600" : "border-gray-200"
          }`}
        />
      </div>

      <p className="text-lg font-medium mb-2">Hey friends —</p>
      <p className="mb-2 text-lg">
        I’m <strong>Baraa</strong>. I’m an IT professional and YouTuber.
      </p>
      <p className="mb-4 text-lg">
        My mission is to share the knowledge I’ve gained over the years and to
        make working with data easier, fun, and accessible to everyone through
        courses that are free, simple, and easy!
      </p>

      <div className="flex justify-center py-3">
        <button
          className={`px-4 py-2 rounded font-medium mb-4 ${
            isDark
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Visit My Youtube Channel
        </button>
      </div>

      {/* Email Input */}
      <div className="flex justify-center mb-6">
        <input
          type="email"
          placeholder="Type your email..."
          aria-label="Email address"
          className={`border px-4 py-2 rounded-l w-64 focus:outline-none focus:ring-2 ${
            isDark
              ? "border-gray-600 bg-gray-800 text-gray-200 focus:ring-yellow-400"
              : "border-gray-300 bg-white text-gray-700 focus:ring-blue-500"
          }`}
        />
        <button
          className={`px-4 py-2 rounded-r ${
            isDark
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Subscribe
        </button>
      </div>

      <div
        className={`flex items-center space-x-2 py-6 border-t-2 ${
          isDark
            ? "border-gray-700 text-gray-400"
            : "border-gray-100 text-gray-600"
        }`}
      >
        {/* Avatar placeholders */}
        <div className="flex -space-x-3">
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src="https://i.pravatar.cc/40?img=1"
            alt="User 1"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src="https://i.pravatar.cc/40?img=2"
            alt="User 2"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src="https://i.pravatar.cc/40?img=3"
            alt="User 3"
          />
        </div>
        <span>25 Likes · 4 Restacks</span>
      </div>

      <div
        className={`flex space-x-6 py-7 border-y-2 text-sm ${
          isDark
            ? "border-gray-700 text-gray-100"
            : "border-gray-100 text-gray-600"
        }`}
      >
        <div className="border border-gray-300 p-1 rounded-full px-2 flex items-center space-x-1">
          <FaHeart size={20} />
          <span>25</span>
        </div>
        <div className="border border-gray-300 p-1 rounded-full px-2 flex items-center space-x-1">
          <FaComment size={20} />
          <span>5</span>
        </div>
        <div className="border border-gray-300 p-1 rounded-full px-2 flex items-center space-x-1">
          <FaRetweet size={20} />
          <span>4</span>
        </div>
        <div>
          <button
            className={`border p-1 rounded-full px-2 flex items-center space-x-1 hover:text-gray-100 focus:outline-none focus:ring-2 ${
              isDark
                ? "border-gray-600 focus:ring-yellow-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          >
            <FiShare size={20} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BaraIntro;
