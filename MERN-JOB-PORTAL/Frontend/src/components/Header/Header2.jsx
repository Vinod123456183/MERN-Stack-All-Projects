import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../pages/core/ThemeContext";

import {
  FaUserTie,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

function Header2() {
  const { theme, setTheme } = useContext(ThemeContext); // 🔥 Use the context here

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const leftToRightVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.9,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className=" hidden lg:block w-full flex-wrap flex items-center justify-center  slowwww pb-3 pt-3 border-b-[1.1px]  page-container">
      <div className="flex justify-center flex-wrap w-full gap-4 items-stretch">
        {[
          {
            icon: (
              <FaUserTie className=" text-black dark:text-white text-4xl border border-black dark:border-gray-200 rounded-full p-2" />
            ),
            label: "Role",
            options: ["Designer", "Developer", "Manager", "Product Owner"],
          },
          {
            icon: (
              <FaMapMarkerAlt className=" text-black dark:text-white text-4xl border border-black dark:border-gray-200 rounded-full p-2" />
            ),
            label: "Work Location",
            options: ["Remote", "On-site", "Hybrid"],
          },
          {
            icon: (
              <FaBriefcase className=" text-black dark:text-white text-4xl border border-black dark:border-gray-200 rounded-full p-2" />
            ),
            label: "Experience",
            options: ["0-1 years", "2-3 years", "4-5 years", "5+ years"],
          },
          {
            icon: (
              <FaClock className=" text-black dark:text-white text-4xl border border-black dark:border-gray-200 rounded-full p-2" />
            ),
            label: "Pay Cycle",
            options: ["Per month", "Per week", "Per year"],
          },
        ].map((item, index) => (
          <React.Fragment key={item.label}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={leftToRightVariant}
              className="flex-1  text-gray-200  dark:text-black  slowwww p-1 rounded flex items-center gap-3"
            >
              <div>{item.icon}</div>
              <select
                className="text-xs  w-full   slowwww  text-black bg-[#f1f1f1] dark:bg-[#0c0c0c] dark:text-white p-1 rounded outline-none appearance-none"
                defaultValue=""
              >
                <option value="">{item.label}</option>
                {item.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </motion.div>

            {index < 4 && <div className="w-px bg-gray-600" />}
          </React.Fragment>
        ))}

        {/* Salary Range */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={leftToRightVariant}
          className="flex-1  text-black dark:text-white p-1 rounded flex flex-col justify-center"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-black dark:text-gray-300">
              Salary Range
            </span>
            <span className="text-sm text-black dark:text-gray-300">
              $1200 - $2000
            </span>
          </div>
          <input
            type="range"
            min="1200"
            max="2000"
            className="w-full"
            defaultValue="1600"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Header2;
