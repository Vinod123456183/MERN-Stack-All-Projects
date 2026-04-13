import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../core/ThemeContext"; // Adjust path if needed

function FilterSearchBara() {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("Latest");

  const tabs = ["Latest", "Top", "Discussions"];

  return (
    <div
      className={`flex items-center justify-between w-full py-2 ${
        theme === "dark" ? "" : "bg-gray-300"
      }`}
    >
      {/* Tabs */}
      <div
        className={`flex border rounded-md p-1 gap-1 ${
          theme === "dark" ? "border-gray-300" : "border-gray-300"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-md text-xs font-medium
              ${
                activeTab === tab
                  ? theme === "dark"
                    ? "bg-gray-700 shadow text-white"
                    : "bg-gray-300 shadow text-gray-800"
                  : theme === "dark"
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-500 hover:text-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Icon */}
      <button
        className={`transition-colors ${
          theme === "dark"
            ? "text-gray-400 hover:text-white"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <FaSearch className="w-4 h-4" />
      </button>
    </div>
  );
}

export default FilterSearchBara;
