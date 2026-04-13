import React, { useContext, useRef } from "react";
import Header1 from "../Header/Header1";
import FrontPageUI from "./FrontPageUI";
import LogoSlider from "./MiniHomeComponents/LogoSlider";
import WhyChooseUs from "./MiniHomeComponents/WhyChooseUs";
import RecenetJobs from "./MiniHomeComponents/RecenetJobs";
import ImgHeroSection from "./MiniHomeComponents/ImgHeroSection";
import Logos from "./MiniHomeComponents/Logos";
import Newsletter from "./MiniHomeComponents/NewsLetter";
import Footer from "../Header/Footer";
import JobComponent from "../../main/JobComponent";
import Blog from "./MiniHomeComponents/Blog";
import JobCard from "../../main/BrowseJobHobCard";
import { ThemeContext } from "../../pages/core/ThemeContext";
import { motion, useInView } from "framer-motion";

function HomePage() {
  const recentJobsRef = useRef(null);
  const isInView = useInView(recentJobsRef, { once: true, amount: 0.3 });

  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.4, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <>
      <Header1 />
      <div className="page-container ">
        <FrontPageUI />

        <div ref={recentJobsRef} className="">
          <div className="  flex items-center justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`text-start font-bold text-2xl md:text-4xl lg:text-5xl ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              Recent Jobs Posted
            </motion.p>

            <button
              className={`border-gray-300 rounded-lg px-3 py-2 lg:px-5 lg:py-3 text-[10px] lg:text-sm ${
                theme === "dark"
                  ? "text-gray-300 border-gray-500"
                  : "border-gray-300 text-black"
              }`}
            >
              View More
            </button>
          </div>

          {/* Job cards grid with staggered animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-2 gap-2 pt-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {[...Array(9)].map((_, i) => (
              <motion.div key={i} variants={itemVariants}>
                <JobComponent
                  jobPostDate="12 Dec 2024"
                  jobPostingCompanyName="Amazon"
                  jobProfile="MERN Stack Developer"
                  jobCompanyImage="https://logo.clearbit.com/atlasian.com"
                  jobSkillsRequired={[
                    "DSA",
                    "System Design",
                    "LLD",
                    "DBMS",
                    "LeetCode",
                    "AI Tools",
                    "ChatGPT",
                  ]}
                  salaryPerAnnum="42"
                  jobCityLocationToWork="Bangalore"
                  jobCountryLocationToWork="India"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <LogoSlider />
        {/* <div> */}
        <WhyChooseUs />
        <Blog />
        <ImgHeroSection />
        <Logos />
        <RecenetJobs name={"Recent Jobs"} />
        <Newsletter />
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
