import React, { useContext, useState } from "react";
import AboutMe from "./AboutMe";
import { FcGoogle } from "react-icons/fc";
import { LuBookmark } from "react-icons/lu";
import { motion } from "framer-motion";

import JobComponent from "./JobComponent";
import { FiSearch } from "react-icons/fi";
import Header from "../components/Header/Header";
import Header2 from "../components/Header/Header2";
import Header1 from "../components/Header/Header1";
import { ThemeContext } from "../pages/core/ThemeContext";
import Footer from "../components/Header/Footer";

const RecommendedJobsData = [
  {
    jobPostDate: "12 Dec 2024",
    jobPostingCompanyName: "Amazon",
    jobProfile: "MERN Stack Developer",
    jobCompanyImage: "https://logo.clearbit.com/atlasian.com",
    jobSkillsRequired: [
      "DSA",
      "System Design",
      "LLD",
      "DBMS",
      "LeetCode",
      "AI Tools",
      "ChatGPT",
    ],
    salaryPerAnnum: "42",
    jobCityLocationToWork: "Bangalore",
    jobCountryLocationToWork: "India",
  },
  {
    jobPostDate: "12 Dec 2024",
    jobPostingCompanyName: "Amazon",
    jobProfile: "MERN Stack Developer",
    jobCompanyImage: "https://logo.clearbit.com/atlasian.com",
    jobSkillsRequired: [
      "DSA",
      "System Design",
      "LLD",
      "DBMS",
      "LeetCode",
      "AI Tools",
      "ChatGPT",
    ],
    salaryPerAnnum: "42",
    jobCityLocationToWork: "Bangalore",
    jobCountryLocationToWork: "India",
  },
  {
    jobPostDate: "12 Dec 2024",
    jobPostingCompanyName: "Amazon",
    jobProfile: "MERN Stack Developer",
    jobCompanyImage: "https://logo.clearbit.com/atlasian.com",
    jobSkillsRequired: [
      "DSA",
      "System Design",
      "LLD",
      "DBMS",
      "LeetCode",
      "AI Tools",
      "ChatGPT",
    ],
    salaryPerAnnum: "42",
    jobCityLocationToWork: "Bangalore",
    jobCountryLocationToWork: "India",
  },
  {
    jobPostDate: "12 Dec 2024",
    jobPostingCompanyName: "Amazon",
    jobProfile: "MERN Stack Developer",
    jobCompanyImage: "https://logo.clearbit.com/atlasian.com",
    jobSkillsRequired: [
      "DSA",
      "System Design",
      "LLD",
      "DBMS",
      "LeetCode",
      "AI Tools",
      "ChatGPT",
    ],
    salaryPerAnnum: "42",
    jobCityLocationToWork: "Bangalore",
    jobCountryLocationToWork: "India",
  },
];

function Details() {
  const [activeTab, setActiveTab] = useState("description");
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header1 />
      <div className=" pb-5 page-container  font-dm-sans flex flex-col ">
        <p className=" text-2xl  p-1 pb-5 pt-5">
          Welcome Back , Let's Find Your{" "}
          <span className="text-4xl dark:text-blue-600 text-blue-500 font-semibold">
            J
          </span>
          <span className="dark:text-blue-600 text-blue-500 line-through font-semibold">
            obs
          </span>
        </p>

        <div className="flex w-full   gap-3 flex-col xl:flex-row ">
          {/* import { motion } from "framer-motion"; */}

          <div className="xl:max-w-[29%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
            {RecommendedJobsData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }} // Controls how much of the component should be visible before the animation triggers
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <JobComponent
                  jobPostDate={job.jobPostDate}
                  jobPostingCompanyName={job.jobPostingCompanyName}
                  jobProfile={job.jobProfile}
                  jobCompanyImage={job.jobCompanyImage}
                  jobSkillsRequired={job.jobSkillsRequired}
                  salaryPerAnnum={job.salaryPerAnnum}
                  jobCityLocationToWork={job.jobCityLocationToWork}
                  jobCountryLocationToWork={job.jobCountryLocationToWork}
                />
              </motion.div>
            ))}
          </div>

          <div className=" px-4 xl:min-w-[52%] py-5 xl:max-w-[44%] ">
            <div className="pt-2 px- w-full py-6">
              <div className="flex items-center bg-gray-200 rounded-2xl px-5 py-4 shadow-sm">
                <FiSearch className="text-gray-600 mr-3" size={24} />
                <p className="text-gray-600 font-medium">UI Designer</p>
              </div>
            </div>

            <div>
              <div className="flex gap-6 items-center ">
                <div>
                  <p>
                    <FcGoogle className="text-[50px]" />
                  </p>
                </div>
                <div className=" flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl pt-1 font-semibold">Hype Studio</p>
                    <p className="text-sm pt-1 text-gray-700 dark:text-gray-500 font-semibold">
                      Frontend Designer
                    </p>
                    <p className="text-xs pt-1  text-gray-400 dark:text-gray-500 font-semibold">
                      Hype , India
                    </p>
                  </div>

                  <div>
                    <LuBookmark className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-wrap w-[100%]  pt-5 gap-3 justify-center">
                <div className=" rounded-2xl max-w-72 min-w-36  2xl:w-full flex flex-col items-center p-4  min-h-[130px]   justify-center bg-lime-200">
                  <p className="text-xs text-gray-900 ">Salary </p>
                  <p className="font-semibold text-md text-gray-900 ">
                    R 10/month
                  </p>
                </div>
                <div className=" rounded-2xl max-w-60 min-w-36 2xl:w-full flex flex-col items-center p-4  min-h-[130px]   justify-center bg-blue-200">
                  <p className="text-xs text-gray-900">Job-Type </p>
                  <p className="font-semibold text-md text-gray-900 ">
                    Part Time in the{" "}
                  </p>
                </div>
                <div className=" rounded-2xl max-w-60 min-w-36 2xl:w-full   flex flex-col items-center p-4  min-h-[130px]   justify-center bg-red-200">
                  <p className="text-xs text-gray-900">No of Applicants </p>
                  <p className="font-semibold text-md text-gray-900 ">
                    10/month
                  </p>
                </div>
                <div className=" rounded-2xl max-w-60 min-w-36 2xl:w-full flex flex-col items-center p-4  min-h-[130px]   justify-center bg-violet-200">
                  <p className="text-xs text-gray-900">Skills</p>
                  <p className="font-semibold text-md text-gray-900 ">Expert</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col  gap-6 w-full">
              {/* Toggle Buttons */}
              <div className="flex flex-col sm:flex-row  gap-3 w-full ">
                <button
                  className={`px-5 py-3 rounded-full transition-all duration-200 w-full  ${
                    activeTab === "description"
                      ? "bg-black text-white dark:bg-blue-500 dark:text-white"
                      : "bg-white text-black dark:bg-gray-100 dark:text-black"
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`px-5 py-3 rounded-full transition-all duration-200 w-full  ${
                    activeTab === "company"
                      ? "bg-black text-white dark:bg-blue-500 dark:text-white"
                      : "bg-white text-black dark:bg-gray-100 dark:text-black"
                  }`}
                  onClick={() => setActiveTab("company")}
                >
                  Company
                </button>
              </div>

              {/* Content Area */}
              <div className="w-full xl:max-w-screen-md">
                {activeTab === "description" && (
                  <div>
                    <p className="font-semibold text-xl text-black dark:text-gray-300 pb-2">
                      Job Description
                    </p>
                    <ul className="  font-kodchasan dark:text-gray-500 space-y-2">
                      <li>
                        Lorem ipsum dolor sit amet... Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Cum illum enim vitae
                        asperiores veritatis consectetur beatae repellendus
                        similique. Explicabo quae deleniti vero voluptates
                        aliquid nemo maiores laboriosam vel suscipit
                        perferendis, voluptatem dolor porro excepturi
                        repudiandae reprehenderit autem. Fugiat minus eveniet
                        sit voluptatibus animi, itaque dolorum voluptatem
                        accusamus ea earum vel repudiandae praesentium atque ut
                        ex nobis quod molestias repellendus saepe?
                      </li>
                    </ul>

                    <div className="pt-6">
                      <p className="font-semibold text-xl text-black dark:text-gray-300 pb-2">
                        Requirements
                      </p>
                      <ul className="  dark:text-gray-500 space-y-2">
                        <li>
                          Lorem ipsum dolor sit amet... Lorem ipsum dolor, sit
                          amet consectetur adipisicing elit. Cum illum enim
                          vitae asperiores veritatis consectetur beatae
                          repellendus similique. Explicabo quae deleniti vero
                          voluptates aliquid nemo maiores laboriosam vel
                          suscipit perferendis, voluptatem dolor porro excepturi
                          repudiandae reprehenderit autem. Fugiat minus eveniet
                          sit voluptatibus animi, itaque dolorum voluptatem
                          accusamus ea earum vel repudiandae praesentium atque
                          ut ex nobis quod molestias repellendus saepe?
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet... Lorem ipsum dolor, sit
                          amet consectetur adipisicing elit. Cum illum enim
                          vitae asperiores veritatis consectetur beatae
                          repellendus similique. Explicabo quae deleniti vero
                          voluptates aliquid nemo maiores laboriosam vel
                          suscipit perferendis, voluptatem dolor porro excepturi
                          repudiandae reprehenderit autem. Fugiat minus eveniet
                          sit voluptatibus animi, itaque dolorum voluptatem
                          accusamus ea earum vel repudiandae praesentium atque
                          ut ex nobis quod molestias repellendus saepe?
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "company" && (
                  <div>
                    <p className="font-semibold text-xl text-black dark:text-gray-300 pb-2">
                      Company Details
                    </p>
                    <ul className="  font-kodchasan dark:text-gray-500 space-y-2">
                      <li>Lorem ipsum dolor sit amet...</li>
                      <li>
                        Lorem ipsum dolor sit amet... Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Cum illum enim vitae
                        asperiores veritatis consectetur beatae repellendus
                        similique. Explicabo quae deleniti vero voluptates
                        aliquid nemo maiores laboriosam vel suscipit
                        perferendis, voluptatem dolor porro excepturi
                        repudiandae reprehenderit autem. Fugiat minus eveniet
                        sit voluptatibus animi, itaque dolorum voluptatem
                        accusamus ea earum vel repudiandae praesentium atque ut
                        ex nobis quod molestias repellendus saepe?
                      </li>
                    </ul>

                    <div className="pt-6">
                      <p className="font-semibold text-xl text-black dark:text-gray-300 pb-2">
                        Requirements
                      </p>
                      <ul className="  dark:text-gray-500 space-y-2">
                        <li>Lorem ipsum dolor sit amet...</li>
                        <li>Lorem ipsum dolor sit amet...</li>
                        <li>
                          Lorem ipsum dolor sit amet... Lorem ipsum dolor, sit
                          amet consectetur adipisicing elit. Cum illum enim
                          vitae asperiores veritatis consectetur beatae
                          repellendus similique. Explicabo quae deleniti vero
                          voluptates aliquid nemo maiores laboriosam vel
                          suscipit perferendis, voluptatem dolor porro excepturi
                          repudiandae reprehenderit autem. Fugiat minus eveniet
                          sit voluptatibus animi, itaque dolorum voluptatem
                          accusamus ea earum vel repudiandae praesentium atque
                          ut ex nobis quod molestias repellendus saepe?
                        </li>

                        <li>Lorem ipsum dolor sit amet...</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="py-6">
              <button className="w-full   bg-black   text-white  dark:bg-blue-500 dark:hover:bg-blue-700 font-semibold dark:text-gray-300 p-3 rounded-2xl">
                Apply Now
              </button>
            </div>
          </div>

          <div className=" 2xl:min-w-[23%]  2xl:max-w-[25%] ">
            <AboutMe />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
