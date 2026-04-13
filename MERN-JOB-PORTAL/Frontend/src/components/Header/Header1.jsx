import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiBell, FiSettings, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../pages/core/ThemeContext";
import { LuFullscreen } from "react-icons/lu";
import { RiFullscreenLine, RiFullscreenExitLine } from "react-icons/ri";
import { TbUserSquareRounded } from "react-icons/tb";
import { PiUser } from "react-icons/pi";
import { GrContactInfo } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";

function Header1() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  // Listen for fullscreen changes
  React.useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => setIsOpen(!isOpen);

  // 🔹 Close drawer on outside click or Esc
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Jobs", path: "/all-jobs/dashboard" },
    { name: "Learn", path: "/user/read/blogs" },
    { name: "Browse Jobs", path: "/all-jobs/browse-jobs" },
    { name: "Interview Specific", path: "/resources/bara" },
    { name: "About Us", path: "/user/about-us" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Wavy bounce variant
  const wavyVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 0) => ({
      opacity: 1,
      y: [10, -4, 0],
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Header wrapper with staggered children animation */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className=" p-4 px-7 page-container  dark:text-white border-b dark:shadow-sm flex justify-between items-center"
      >
        {/* Logo */}
        <NavLink to={"/"}>
          <motion.div
            custom={0}
            variants={wavyVariant}
            className="flex items-center gap-2"
          >
            <div className="bg-white border-red-400 border p-1 rounded-full">
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <span className="text-xl font-semibold">LuckyJob</span>
          </motion.div>
        </NavLink>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-md  transition scroll-smooth duration-300 transform"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? (
            <RiFullscreenExitLine className="w-5 h-5 hover:text-red-600" />
          ) : (
            <RiFullscreenLine className="w-5 h-5 hover:text-blue-600" />
          )}
        </button>
        {/* Desktop Nav */}
        <motion.nav
          className="hidden lg:flex gap-6 xl:gap-8 text-[13px]"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index + 1}
              variants={wavyVariant}
            >
              <NavLink
                to={item.path}
                className="hover:text-blue-500 transition duration-150 font-semibold lg:text-[13px]"
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right section */}
        <motion.div
          className="flex gap-3 xl:gap-4 items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div custom={navItems.length + 1} variants={wavyVariant}>
            <button
              onClick={toggleTheme}
              className="text-[19px] rounded-full transition"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </motion.div>

          {/* Location */}
          <motion.div
            custom={navItems.length + 2}
            variants={wavyVariant}
            className="hidden md:flex font-semibold items-center"
          >
            <span
              className={`text-[12px] ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              New York, NY
            </span>
          </motion.div>

          {/* Avatar + Icons For Larger Screen */}
          <motion.div
            className={`hidden lg:flex items-center gap-4 text-sm ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <div className="relative">
              {/* Avatar */}
              <motion.div
                custom={navItems.length + 3}
                variants={wavyVariant}
                onClick={toggleDrawer}
                className="cursor-pointer"
              >
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User Avatar"
                  className={`w-7 h-7 rounded-full border-2 ${
                    theme === "dark" ? "border-gray-300" : "border-gray-700"
                  }`}
                />
              </motion.div>

              {/* Right-side Drawer */}
              <AnimatePresence>
                {isOpen && (
                  <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-60"></div>
                    <motion.div
                      ref={drawerRef}
                      initial={{ x: "40%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "0%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute top-12 -right-2 w-32 max-w-36 flex items-center flex-col bg-white dark:bg-[#040404] 
                   shadow-xl rounded-md p-2 z-50"
                    >
                      <Link to={"/user/profile-card"}>
                        <div className="flex items-center gap-2 pb-3 justify-center ">
                          <PiUser size={19} />
                          <p className=" font-semibold ">Profile</p>
                        </div>
                      </Link>
                      <Link to={"/contact"}>
                        <div className="flex  items-center gap-2 pb-3 justify-center ">
                          <GrContactInfo size={19} />
                          <p className=" font-semibold ">Contact</p>
                        </div>
                      </Link>
                      <Link to={"/logout"}>
                        <div className="flex items-center gap-2 pb-3 justify-center ">
                          <TbLogout2 className={"text-red-500"} size={19} />
                          <p className=" font-semibold text-red-500">Logout</p>
                        </div>
                      </Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              custom={navItems.length + 4}
              variants={wavyVariant}
              className="relative cursor-pointer"
            >
              <FiBell className="w-5 h-5 hover:text-blue-600" />
              <span className="absolute -top-1 --right-10 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </motion.div>
            <motion.div
              custom={navItems.length + 5}
              variants={wavyVariant}
              className="cursor-pointer"
            >
              <FiSettings className="w-5 h-5 hover:text-blue-600" />
            </motion.div>
          </motion.div>

          {/* Avatar For Small Content */}
          <div className="relative lg:hidden">
            <motion.div
              custom={navItems.length + 3}
              variants={wavyVariant}
              onClick={toggleDrawer}
              className="cursor-pointer"
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User Avatar"
                className={`w-7 h-7 rounded-full border-2 ${
                  theme === "dark" ? "border-gray-300" : "border-gray-700"
                }`}
              />
            </motion.div>

            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 z-60"></div>
                  <motion.div
                    ref={drawerRef}
                    initial={{ x: "40%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "40%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-12 -right-10 w-40 max-w-52 flex-col flex items-center bg-white dark:bg-[#040404] shadow-xl rounded-md p-2 z-50"
                  >
                    {/*  */}

                    <Link to={"/user/profile-card"}>
                      <div className="flex items-center gap-2 pb-3 justify-center ">
                        <PiUser size={19} />
                        <p className=" font-semibold ">Profile</p>
                      </div>
                    </Link>
                    <Link to={"/contact"}>
                      <div className="flex  items-center gap-2 pb-3 justify-center ">
                        <GrContactInfo size={19} />
                        <p className=" font-semibold ">Contact</p>
                      </div>
                    </Link>
                    <Link to={"/logout"}>
                      <div className="flex items-center gap-2 pb-3 justify-center ">
                        <TbLogout2 className={"text-red-500"} size={19} />
                        <p className=" font-semibold text-red-500">Logout</p>
                      </div>
                    </Link>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger for mobile */}
          <motion.div
            custom={navItems.length + 6}
            variants={wavyVariant}
            className="lg:hidden"
          >
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              {menuOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden flex flex-col gap-3 bg-white  border dark:bg-black px-6 py-4 border-b dark:border-gray-700"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={wavyVariant}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold hover:text-blue-500"
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default Header1;
