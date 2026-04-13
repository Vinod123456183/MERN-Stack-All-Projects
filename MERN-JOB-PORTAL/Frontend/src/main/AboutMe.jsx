import { motion } from "framer-motion";
import React, { useContext } from "react";
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";
import img from "../assets/MYNEW1.png";
import { useNavigate } from "react-router-dom";
import AboutMeDetailsBox from "./AboutMeDetailsBox";
import { ThemeContext } from "../pages/core/ThemeContext";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="gap-3 w-full flex flex-col  items-center">
      <div className="rounded-xl bg-gray-100 dark:bg-[#1c1c1c]  w-full xl:max-w-sm flex flex-col items-center p-6 shadow-md transition-colors duration-500">
        <img
          className="w-24 h-24 rounded-[25px] object-cover border-2 border-white"
          src={img}
          alt="Profile"
        />
        <div className="pt-4 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            Vinod Singh
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            MERN Stack Developer
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Java | C++ | Python
          </p>
        </div>
        <button className="mt-4 font-semibold bg-white dark:bg-blue-500 border-gray-300  dark:border-gray-900 px-4 py-2 rounded-full border-2  text-sm hover:bg-gray-100 dark:hover:bg-blue-700 transition w-full text-black dark:text-white">
          EDIT PROFILE
        </button>
      </div>

      {/* Stats Card */}
      <div className="rounded-xl bg-gray-100 dark:bg-[#1c1c1c] w-full xl:max-w-sm p-3 gap-1 shadow-md flex flex-col transition-colors duration-500">
        {/* First Row */}
        <div className="rounded-xl bg-gray-100 dark:bg-[#1c1c1c] w-full p-2 grid grid-cols-2 gap-3">
          <AboutMeDetailsBox
            name={"Search Result"}
            count={2}
            smallDetail={"Views"}
          />
          <AboutMeDetailsBox
            name={"Applied Job"}
            count={12}
            smallDetail={"Jobs"}
          />
        </div>

        {/* Project & Experience Info */}
        <div className="rounded-xl bg-gray-100 dark:bg-[#1c1c1c] w-full xl:max-w-sm p-2 grid grid-cols-1 gap-3">
          <AboutMeDetailsBox
            name={"No Of Projects"}
            count={12}
            smallDetail={"Projects"}
          />
          <div className="rounded-xl bg-gray-100 dark:bg-[#1c1c1c] w-full p-2 grid grid-cols-2 gap-3">
            <AboutMeDetailsBox
              name={"Experience"}
              count={0.6}
              smallDetail={"Years"}
            />
            <AboutMeDetailsBox
              name={"Github"}
              count={5}
              smallDetail={"Contributions"}
            />
          </div>
          <AboutMeDetailsBox
            name={"LeetCode"}
            count={250}
            smallDetail={"Questions"}
          />
          <div className="rounded-xl bg-gray-100 dark:bg-[#1c1c1c] w-full p-2 grid grid-cols-2 gap-3">
            <AboutMeDetailsBox
              name={"Github Flos"}
              count={50}
              smallDetail={"Followers"}
            />
            <AboutMeDetailsBox
              name={"Insta Followers"}
              count={400}
              smallDetail={"Followers"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
