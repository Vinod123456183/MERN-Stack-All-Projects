// src/Components/Core/Sidebar.jsx
import React from "react";
import { FiActivity, FiRepeat, FiGrid } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { RiApps2AiLine } from "react-icons/ri";
import { SiBitcoinsv } from "react-icons/si";

const menuItems = [
  { icon: RiApps2AiLine, label: "Home", path: "/" },
  { icon: SiBitcoinsv, label: "Dashboard", path: "/media-dashboard" },
  { icon: FiRepeat, label: "Crypto", path: "/" },
];

const Sidebar = ({ isOpen, onCloseSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-[500vh] bg-white shadow-sm 
        transition-all duration-300 flex flex-col py-6 pt-16 z-40
        ${isOpen ? "w-60" : "w-0 lg:w-15"} 
        overflow-hidden`}
    >
      <div className="flex flex-col gap-5 px-4">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            to={path}
            key={label}
            onClick={onCloseSidebar} // ✅ Close sidebar on NavlinkNavLink click
          >
            <div className="flex items-center gap-5 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-200">
              <Icon size={22} />
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {label}
              </span>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto p-4">
        {isOpen && (
          <img src="/images/rocket.png" alt="Rocket" className="w-full" />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
