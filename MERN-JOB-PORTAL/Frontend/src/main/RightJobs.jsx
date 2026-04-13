// import { useQuery } from "@tanstack/react-query";
// import { displayJobs } from "../../../Backend/apis/Api"; // adjust path
// import { motion } from "framer-motion";
// import JobComponent from "./JobComponent";
// function RightJobs() {
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["jobsDashboard"],
//     queryFn: displayJobs,
//   });

//   // safely extract jobs array
//   const jobData = data?.jobs || [];

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading jobs</p>;

//   return (
//     <>
//       {jobData.length > 0 ? (
//         <motion.div
//           className="pt-1 pb-6 max-h-full overflow-y-auto overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 place-items-center custom-scroll"
//           // variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           {jobData.map((job, index) => (
//             <motion.div key={job._id}>
//               <JobComponent
//                 jobPostDate={new Date(job.createdAt).toDateString()} // convert ISO to readable
//                 jobPostingCompanyName={job.companyName || "Unknown Company"} // fallback if missing
//                 jobProfile={job.title}
//                 jobCompanyImage={"https://placehold.co/80"} // replace when backend sends logos
//                 jobSkillsRequired={job.requirements || []}
//                 salaryPerAnnum={job.salary || "Not disclosed"} // fallback if missing
//                 jobCityLocationToWork={job.cityAndState || "N/A"}
//                 jobCountryLocationToWork={job.country || "N/A"}
//                 jobPostingType={job.jobType}
//                 parentDelay={index * 0.1}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       ) : (
//         <div className="flex items-center justify-center h-full w-full">
//           <img
//             src="https://th.bing.com/th/id/OIP.2yM76syXYoM2lXLdhiGLQAAAAA?w=154&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
//             alt="No Data Found"
//           />
//         </div>
//       )}
//     </>
//   );
// }
// export default RightJobs;

import React, { useContext } from "react";
import JobComponent from "./JobComponent";
import { motion } from "framer-motion";
import { ThemeContext } from "../pages/core/ThemeContext";
import axios from "axios";
import { MAIN_ROUTER, DISPLAY_ALL_JOBS } from "../routes/Routes";

function RightJobs() {
  const jobData = [
    {
      jobPostDate: "12 Dec 2024",
      jobPostingCompanyName: "Amazon",
      jobProfile: "MERN Stack Developer",
      jobCompanyImage:
        "https://imgs.search.brave.com/A_wPhoyqlhuiOGnjlasPrkZ7fy0ogkloxTLVVZPxs7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvQXRsYXNzaWFu/LUxvZ28tNTAweDI4/MS5wbmc",
      jobSkillsRequired: [
        "DSA",
        "System Design",
        "LLD",
        "DBMS",
        "LeetCode",
        "AI Tools",
        "ChatGPT",
      ],
      salaryPerAnnum: 42,
      jobCityLocationToWork: "Bangalore",
      jobCountryLocationToWork: "India",
      jobPostingType: "Full Time",
    },
    {
      jobPostDate: "12 Dec 2024",
      jobPostingCompanyName: "Amazon",
      jobProfile: "MERN Stack Developer",
      jobCompanyImage:
        "https://imgs.search.brave.com/A_wPhoyqlhuiOGnjlasPrkZ7fy0ogkloxTLVVZPxs7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvQXRsYXNzaWFu/LUxvZ28tNTAweDI4/MS5wbmc",
      jobSkillsRequired: [
        "DSA",
        "System Design",
        "LLD",
        "DBMS",
        "LeetCode",
        "AI Tools",
        "ChatGPT",
      ],
      salaryPerAnnum: 42,
      jobCityLocationToWork: "Bangalore",
      jobCountryLocationToWork: "India",
      jobPostingType: "Internship",
    },
    {
      jobPostDate: "12 Dec 2024",
      jobPostingCompanyName: "Amazon",
      jobProfile: "MERN Stack Developer",
      jobCompanyImage:
        "https://imgs.search.brave.com/A_wPhoyqlhuiOGnjlasPrkZ7fy0ogkloxTLVVZPxs7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvQXRsYXNzaWFu/LUxvZ28tNTAweDI4/MS5wbmc",
      jobSkillsRequired: [
        "DSA",
        "System Design",
        "LLD",
        "DBMS",
        "LeetCode",
        "AI Tools",
        "ChatGPT",
      ],
      salaryPerAnnum: 42,
      jobCityLocationToWork: "Bangalore",
      jobCountryLocationToWork: "India",
      jobPostingType: "Internship",
    },
    {
      jobPostDate: "12 Dec 2024",
      jobPostingCompanyName: "Amazon",
      jobProfile: "MERN Stack Developer",
      jobCompanyImage:
        "https://imgs.search.brave.com/A_wPhoyqlhuiOGnjlasPrkZ7fy0ogkloxTLVVZPxs7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvQXRsYXNzaWFu/LUxvZ28tNTAweDI4/MS5wbmc",
      jobSkillsRequired: [
        "DSA",
        "System Design",
        "LLD",
        "DBMS",
        "LeetCode",
        "AI Tools",
        "ChatGPT",
      ],
      salaryPerAnnum: 42,
      jobCityLocationToWork: "Bangalore",
      jobCountryLocationToWork: "India",
      jobPostingType: "Internship",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 pb-2">
        <motion.p
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={` text-2xl font-semibold py-1 ${
            theme === "dark" ? "graywhite" : "text-black"
          }`}
        >
          Recommended Jobs
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className={`text-sm border px-4 py-1 rounded-full ${
            theme === "dark" ? "graywhite border-gray-300" : "border-gray-400"
          }`}
        >
          {jobData.length - 1} {""}+
        </motion.div>
      </div>

      {jobData.length === 0 ? (
        <div className="flex items-center justify-center  h-full w-full">
          <img
            src="https://th.bing.com/th/id/OIP.2yM76syXYoM2lXLdhiGLQAAAAA?w=154&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
            alt="No Data Found"
          />
        </div>
      ) : (
        <motion.div
          className="pt-1 pb-6 max-h-full  overflow-y-auto overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 place-items-center custom-scroll"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {jobData.map((job, index) => (
            <motion.div key={index} variants={cardVariants}>
              <JobComponent
                jobPostDate={job.jobPostDate}
                jobPostingCompanyName={job.jobPostingCompanyName}
                jobProfile={job.jobProfile}
                jobCompanyImage={job.jobCompanyImage}
                jobSkillsRequired={job.jobSkillsRequired}
                salaryPerAnnum={job.salaryPerAnnum}
                jobCityLocationToWork={job.jobCityLocationToWork}
                jobCountryLocationToWork={job.jobCountryLocationToWork}
                jobPostingType={job.jobPostingType}
                parentDelay={index * 0.1}
                jobId={job.id}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default RightJobs;
