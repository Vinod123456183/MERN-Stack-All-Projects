import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../core/ThemeContext"; // adjust path as needed

function SmallTechComponent({ smallTechImg, smallTechText }) {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`gap-3 p-1 justify-center  w-full min-w-full flex items-center 
        ${
          theme === "dark"
            ? "border-gray-600 bg-[#1a1a1a] text-gray-100"
            : "border-gray-300 bg-white text-gray-800"
        }`}
    >
      {/* Icon */}
      <div className="full">
        <img
          className="h-10 w-10 rounded-md object-cover"
          src={smallTechImg}
          alt="icon"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full">
        <p className="text-sm pb-[2px] font-semibold">Figma</p>
        <p
          className={`text-[11px] font-semibold ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {smallTechText}
        </p>
      </div>
    </motion.div>
  );
}

export default SmallTechComponent;
