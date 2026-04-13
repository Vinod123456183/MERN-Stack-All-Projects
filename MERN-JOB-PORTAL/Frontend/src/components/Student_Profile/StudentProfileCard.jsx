import React, { useContext } from "react";
import { HiOutlinePencil } from "react-icons/hi";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaDownload,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import Header1 from "../Header/Header1";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../pages/core/ThemeContext";

function StudentProfileCard() {
  const jobs = [
    {
      date: "2025-07-22",
      title: "Backend Developer",
      company: "Netflix",
      status: "pending",
    },
    {
      date: "2025-07-21",
      title: "Backend Developer",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN2",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-07-22",
      title: "Backend Developer",
      company: "Netflix",
      status: "pending",
    },
    {
      date: "2025-07-21",
      title: "Backend Developer",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN2",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-07-22",
      title: "Backend Developer",
      company: "Netflix",
      status: "pending",
    },
    {
      date: "2025-07-21",
      title: "Backend Developer",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN2",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-07-22",
      title: "Backend Developer",
      company: "Netflix",
      status: "pending",
    },
    {
      date: "2025-07-21",
      title: "Backend Developer",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN2",
      company: "Pornhub",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "MERN",
      company: "Pornhub",
      status: "pending",
    },
  ];
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header1 />

      <div
        className={`flex  slowwww  items-start justify-center  flex-col xl:flex-row min-h-full gap-3   overflow-hidden page-container pt-5 ${
          theme === "dark" ? "border-gray-600" : ""
        } `}
      >
        <div className="flex flex-col items-center justify-start w-full xl:max-w-[30%] xl:min-w-[30%] border dark:border-gray-600 border-gray-300 p-2 py-4 h-full gap-2 rounded-xl -md ">
          <div className="flex items-center justify-between w-full p-1 px-3">
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              About Me
            </p>
            <button
              className="text-sm  text-black"
              onClick={() => alert("Edit Profile Clicked")}
            >
              <HiOutlinePencil
                size={18}
                className="text-blue-600 dark:text-microsoftOrange"
              />
            </button>
          </div>

          <div className="  w-full aspect-square overflow-hidden  rounded-lg flex items-center justify-center min-h-[14rem] max-h-[18rem]">
            <img
              src="https://imgs.search.brave.com/bWuT_UCGTZjOPkHZy1ftRu2b_cAMPrlaRoMPLjjYKzY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzAwLzUzLzcy/LzM2MF9GXzQwMDUz/NzI5Ml9XcERpUDlF/bWd1MUR2SlhyTGZl/Q3djVTcwVUozdTlQ/SC5qcGc"
              alt="Profile"
              className="lg:h-[100%] lg:w-[100%] p-2 object-cover rounded-2xl"
            />
          </div>

          {/* Info Section */}
          <div className=" w-full py-2 px-2 space-y-4   rounded-md h-auto">
            <div className="">
              <div className="flex flex-col ">
                <p className="text-xl text-gray-600 dark:text-gray-200">
                  Vinod Singh Barti
                </p>
                <p className="text-blue-600 font-semibold dark:text-microsoftOrange ">
                  Designer Enginner @ meta
                </p>
              </div>

              <div className="text-gray-700 ">
                <div className="flex flex-wrap gap-2 py-2 items-center  ">
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    System Design
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    | |
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    DSA
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    | |
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    C++
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    | |
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    DBMS
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    | |
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    MERN
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    Frontend Development
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    | |
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    Backend Development
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    | |
                  </p>
                  <p className="text-xs dark:text-gray-400 font-semibold ">
                    OOPS
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 ">
              <div className="flex items-center justify-between">
                <p className="text-xs dark:text-gray-300">Email 1 </p>
                <p className="text-xs dark:text-gray-300">
                  devilstriangle@gmail.com
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs dark:text-gray-300">Email 2</p>
                <p className="text-xs dark:text-gray-300">
                  vinodsinghbarti420@gmail.com
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs dark:text-gray-300">Ph-No.1</p>
                <p className="text-xs dark:text-gray-300">+91-945654 1392</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs dark:text-gray-300">Ph-No.2</p>
                <p className="text-xs dark:text-gray-300">+91-945656 5856</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs dark:text-gray-300">Website</p>
                <a href="">
                  <p className=" text-blue-700 dark:text-microsoftOrange text-start text-xs font-bold">
                    Press Here
                  </p>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="w-full text-gray-600 flex flex-wrap gap-5 justify-center items-center text-2xl p-1 pt-3  pb-2 ">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-white cursor-pointer" />
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="h-6 w-6 object-contain hover:opacity-80 "
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-sky-600 cursor-pointer" />
              </a>
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGlobe className="hover:text-microsoftBlue cursor-pointer" />
              </a>
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGlobe className="hover:text-green-400 cursor-pointer" />
              </a>
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGlobe className="hover:text-green-400 cursor-pointer" />
              </a>
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGlobe className="hover:text-green-400 cursor-pointer" />
              </a>
            </div>

            <div className="w-full flex items-center justify-center  text-black font-semibold ">
              <button className="p-2 bg-black dark:bg-white w-[95%] rounded-lg">
                Resume
              </button>
            </div>
          </div>
        </div>

        <div className=" w-full xl:max-w-[70%] lg:min-w-[70%] text-gray-800 dark:text-gray-100 h-screen overflow-y-auto rounded-xl">
          <div className="p-4  rounded-xl shadow-md">
            <p className="p-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
              Applied Jobs
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-2 ">
                <thead>
                  <tr className="text-sm text-gray-500 dark:text-gray-300">
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Job Title</th>
                    <th className="py-2 px-4">Company</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>

                <tbody className="text-sm ">
                  {jobs.map((job, index) => (
                    <tr
                      key={index}
                      className=" border-b dark:border-gray-50 transition-colors "
                    >
                      <td className="py-2 px-4">{job.date}</td>
                      <td className="py-2 px-4">{job.title}</td>
                      <td className="py-2 px-4">{job.company}</td>
                      <td className="py-2 px-4">
                        <span className="bg-gray-500 dark:bg-gray-600 text-white text-xs px-2 py-1 rounded-md">
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfileCard;
