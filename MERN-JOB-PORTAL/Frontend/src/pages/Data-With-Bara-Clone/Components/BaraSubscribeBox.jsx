import React, { useContext } from "react";
import profilePic from "../../../assets/about.png"; // replace path if needed
import BaraEmail from "./BaraEmail";
import { ThemeContext } from "../../core/ThemeContext"; // adjust path as needed

function BaraSubscribeBox() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full max-w-xs lg:p-7 pt-5 rounded-md
        ${theme === "dark" ? "" : "bg-white"}`}
    >
      {/* Profile Picture */}
      <div className="flex items-center justify-start mb-3">
        <img
          src={profilePic} // Replace with actual profile image if needed
          alt="Baraa"
          className="w-9 h-9 rounded-full"
        />
      </div>

      {/* Title & Description */}
      <p
        className={`text-lg font-bold ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Data with Baraa
      </p>
      <p
        className={`text-xs mt-1 leading-5 ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Practical data tutorials, hand-sketched explanations, and real lessons
        from 15+ years in data engineering. 👇 Subscribe to get
      </p>

      {/* Email subscription input (make sure BaraEmail handles dark mode too) */}
      <BaraEmail />
    </div>
  );
}

export default BaraSubscribeBox;
