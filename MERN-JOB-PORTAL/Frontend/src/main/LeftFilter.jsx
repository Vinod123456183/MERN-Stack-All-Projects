import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../pages/core/ThemeContext";

function FilterSideLeft() {
  const [filterJobType, setFilterJobType] = useState();
  const [filterWorkType, setFilterWorkType] = useState();

  const filterByJobType = (categ) => {};
  const filterByWorkType = (categ) => {};

  const { theme } = useContext(ThemeContext);

  const [workingSchedule, setWorkingSchedule] = useState({
    internship: false,
    fullTime: false,
    // partTime: false,
    // projectWork: false,
    // volunteering: false,
  });

  const [employmentType, setEmploymentType] = useState({
    fullDay: false,
    flexibleSchedule: false,
    shiftWork: false,
    distantWork1: false,
    distantWork2: false,
    distantWork3: false,
    distantWork4: false,
    shiftMethod: false,
  });

  function toggleWorkingSchedule(option) {
    setWorkingSchedule((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  }

  function toggleEmploymentType(option) {
    setEmploymentType((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.9 }}
      className={` w-full lg:max-w-[18%] lg:min-w-[248px] h-full 
        ${
          theme === "dark"
            ? "text-gray-100  border-gray-700"
            : "text-gray-800  border-gray-600"
        }
      `}
    >
      <p className="text-2xl font-semibold mb-3">Filters</p>

      <div className="overflow-y-auto max-h-[120vh] pr-2">
        {/* Working Schedule */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mb-5"
        >
          <p className="uppercase font-semibold mb-2 text-gray-600 dark:text-gray-400">
            Working schedule
          </p>
          {[
            { label: "Full time", key: "fullTime" },
            { label: "Internship", key: "internship" },
            // { label: "Part time", key: "partTime" },
            // { label: "Project work", key: "projectWork" },
            // { label: "Volunteering", key: "volunteering" },
          ].map(({ label, key }) => (
            <label
              key={key}
              className="flex text-sm items-center gap-2 mb-1 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={workingSchedule[key]}
                onChange={() => toggleWorkingSchedule(key)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{label}</span>
            </label>
          ))}
        </motion.div>

        {/* Employment Type */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <p className="uppercase font-semibold mb-2 text-gray-600 dark:text-gray-400">
            Domain Types
          </p>
          {[
            { label: "MERN Stack Developers", key: "fullDay" },
            { label: "Data Science", key: "flexibleSchedule" },
            { label: "ML Engineers", key: "shiftWork" },
            { label: "DevOps Engineer", key: "distantWork1" },
            { label: "AI Engineer", key: "distantWork2" },
            { label: "Software Engineer", key: "distantWork3" },
            { label: "Frontend Engineer", key: "frontendEngineer" },
            { label: "Backend Engineer", key: "backendEngineer" },
            { label: "Full Stack Engineer", key: "fullStackEngineer" },
            { label: "Cloud Engineer", key: "cloudEngineer" },
            { label: "Security Engineer", key: "securityEngineer" },
            { label: "Automation Engineer", key: "automationEngineer" },
            { label: "Systems Engineer", key: "systemsEngineer" },
            { label: "Network Engineer", key: "networkEngineer" },
            { label: "Platform Engineer", key: "platformEngineer" },
            { label: "Site Reliability Engineer(SRE)", key: "sreEngineer" },
            { label: "Blockchain Engineer", key: "blockchainEngineer" },
            { label: "Embedded Systems Engineer", key: "embeddedEngineer" },
            { label: "Others", key: "others" },
          ].map(({ label, key }) => (
            <label
              key={key}
              className="flex text-sm items-center gap-2 mb-1 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={employmentType[key]}
                onChange={() => toggleEmploymentType(key)}
                className="form-checkbox h-full w-5 text-blue-600"
              />
              <span>{label}</span>
            </label>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FilterSideLeft;
