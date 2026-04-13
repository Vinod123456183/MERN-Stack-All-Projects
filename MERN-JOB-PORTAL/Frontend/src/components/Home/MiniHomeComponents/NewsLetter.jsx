import React from "react";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className=" py-14 w-full">
      <section className="relative bg-blue-500 w-full overflow-hidden rounded-lg shadow-xl">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-6 sm:p-10 md:p-16 text-white">
          {/* Left Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Sign up to get <br />
              <span className="text-white">the latest jobs</span>
            </p>
          </div>

          {/* Responsive Form */}
          <form className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row  space-y-4 lg:space-y-0 lg:gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 text-gray-700 rounded-lg  outline-none text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white bg-purple-y  rounded-lg font-medium px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
              >
                Subscribe <FiSend className="text-base " />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
