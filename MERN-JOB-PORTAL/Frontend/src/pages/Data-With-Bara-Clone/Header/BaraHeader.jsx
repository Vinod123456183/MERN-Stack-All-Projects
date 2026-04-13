import React from "react";
import profilePic from "../../../assets/about.png"; // replace path if needed

function BaraHeader() {
  return (
    <div className="">
      <header className="w-full relative flex items-center  border-b bg-white p-4">
        {/* Left: Profile Image */}
        <div className="flex items-center z-10">
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Center: Title (absolute to stay centered regardless of other content) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <p className="text-2xl font-bold text-gray-800 ">Data with Baraa</p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 ml-auto z-10">
          {/* Search Icon */}
          <button className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65a7 7 0 111.414-1.414L21 21z"
              />
            </svg>
          </button>

          {/* Upload Icon */}
          <button className="text-gray-700 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V4m0 0l-4 4m4-4l4 4M20 16v4H4v-4"
              />
            </svg>
          </button>

          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold">
            Subscribe
          </button>

          <button className="text-sm text-gray-800 font-medium hover:underline">
            Sign in
          </button>
        </div>
      </header>
    </div>
  );
}

export default BaraHeader;
