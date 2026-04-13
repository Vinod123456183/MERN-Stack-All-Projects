import React, { useContext } from "react";
import { ThemeContext } from "../../../pages/core/ThemeContext";

function WhyChooseUSBox({ icon, title, description }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col p-5  min-h-60  w-full    items-center justify- rounded-xl border   h-auto { ${
        theme === "dark"
          ? "graywhite border-gray-600"
          : "grayblack border-gray-300"
      }`}
    >
      <div className=" flex items-center text-5xl justify-center w-full pb-4 text-blue-600 mb-3">
        {icon}
      </div>
      <div>
        <h3
          className={`font-semibold text-lg mb-2 text-center { ${
            theme === "dark" ? "graywhite " : "grayblack "
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm mb-2 text-center { ${
            theme === "dark" ? "graywhite " : "grayblack "
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default WhyChooseUSBox;
