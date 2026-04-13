import React from "react";
import { motion } from "framer-motion";
import Header1 from "../components/Header/Header1";
import Footer from "../components/Header/Footer";
import JobComponent from "./JobComponent";

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const jobData = new Array(30).fill({
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
});

function BrowseJobs() {
  return (
    <>
      <Header1 />
      <div className="page-container">
        <div className="text-2xl font-semibold py-6">
          Search Results ({jobData.length})
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 gap-y-4 lg:gap-y-5">
          {jobData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <JobComponent {...job} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BrowseJobs;
