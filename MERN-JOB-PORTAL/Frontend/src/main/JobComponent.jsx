import React, { useContext, useEffect, useState } from "react";
import { LuBookmark } from "react-icons/lu";
import { motion } from "framer-motion";

import { ThemeContext } from "../pages/core/ThemeContext";
import { Link } from "react-router-dom";

// List of background colors (as you shared before)
export const bgColors = [
  "#FFEBEE",
  "#FFCDD2",
  "#FFB3B3",
  "#FF9A9A",
  "#FDE0F0",
  "#F8C1E1",
  "#E9C9F1",
  "#D8B4E2",
  "#EDE7F6",
  "#D7CBEF",
  "#CDBCE5",
  "#E3F2FD",
  "#D0E5FC",
  "#B8D9FA",
  "#A0CCF7",
  "#F0F8FF",
  "#D6EFFB",
  "#BAE4F9",
  "#A3D9F7",
  "#E0F7FA",
  "#C9F1F6",
  "#AEECEF",
  "#95E6EB",
  "#E0F2F1",
  "#C2EAE8",
  "#A8E0DC",
  "#8FD6D1",
  "#E8F5E9",
  "#D2ECD3",
  "#BCE3BD",
  "#A6DAA7",
  "#F1F8E9",
  "#DDEEB8",
  "#C9E690",
  "#B5DE68",
  "#F9FBE7",
  "#F4FBC0",
  "#FFFFE0",
  "#FFF9B2",
  "#FFF176",
  "#FFF3E0",
  "#FFE0B2",
  "#FFCC80",
  "#FFB74D",
  "#FFECB3",
  "#FFE082",
  "#FFD54F",
  "#F5ECEA",
  "#EADFD7",
  "#DCCFC6",
  "#C9B7AC",
  "#FAFAFA",
  "#F0F0F0",
  "#E0E0E0",
  "#CCCCCC",
  "#F1F3F4",
  "#E0E5E7",
  "#D0D8DB",
  "#C0CDD2",
  "#FFE4EC",
  "#FFF8CC",
  "#E6FFB3",
  "#CCFFF0",
  "#CFFAF7",
  "#C2FFF8",
  "#D5FFFF",
  "#ECFFFF",
  "#FFD1D1",
  "#D2F6DA",
  "#C4E3FF",
  "#FFF3B3",
  "#E7D6FB",
];

// export const bgColors = ["#e3dbfa", "#fbe2f4", "#ffe1cc", "#d4f6ed"];

// Function to get a random background color from the list
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  return bgColors[randomIndex];
};

// Updated motion properties with slightly longer animation and delay
const getMotionProps = (delay = 0, parentDelay = 0) => ({
  initial: { opacity: 0, scale: 0.1 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay: delay * 0.35 * parentDelay },
});

const JobComponent = ({
  jobPostDate,
  jobPostingCompanyName,
  jobProfile,
  jobCompanyImage,
  jobSkillsRequired,
  salaryPerAnnum,
  jobCityLocationToWork,
  jobPostingType,
  jobCountryLocationToWork,
  parentDelay = 0,
  jobId,
}) => {
  const [randomBg, setRandomBg] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomBg(getRandomColor());
    }, 1000000);
    return () => clearInterval(interval);
  }, []);
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      className={` border-2  rounded-3xl p-[6px]  bg-white max-h-auto w-full  min-w-[210px] max-w-[335px]  ${
        theme === "dark" ? "border-gray-50" : "border-gray-300"
      }`}
    >
      <div
        className={`rounded-3xl max-h-auto min-h-[210px] md:min-h-[240px]  p-4 transition-colors duration-500 ${
          theme === "dark" ? " text-white  " : "text-black"
        }`}
        style={{ backgroundColor: theme === "light" ? randomBg : randomBg }}
      >
        <div className="flex w-full justify-between items-center font-semibold  text-black">
          <motion.p
            {...getMotionProps(0.4, parentDelay)}
            className={`text-xs rounded-3xl border-2  bg-white p-1 px-3   border-gray-300  ${
              theme === "dark" ? "" : ""
            }`}
          >
            {jobPostDate}
          </motion.p>
          <motion.button
            {...getMotionProps(0.7, parentDelay)}
            className={`p-2  rounded-full ${
              theme === "dark" ? "bg-white" : "bg-white"
            } `}
          >
            <LuBookmark />
          </motion.button>
        </div>

        <div className="flex justify-between text-sm lg:text-md items-center font-semibold text-gray-800 pt-2 pb-3 lg:py-2  lg:pt-2 lg:pb-2 px-1">
          <div className="w-[70%]">
            <div className="flex w-full justify-between">
              <motion.p
                {...getMotionProps(0.9, parentDelay)}
                className={`text-[15px] lg:text-[16px] ${
                  theme === "dark" ? "" : "black"
                }`}
              >
                {jobPostingCompanyName}
              </motion.p>
              <motion.p
                {...getMotionProps(0.9, parentDelay)}
                className={`text-[12px] text-gray-900 rounded-full  border-gray-400 px-3 py-[2px] font-semibold lg:text-[14px]  ${
                  theme === "dark" ? "" : "black"
                }`}
              >
                # {jobPostingType}
              </motion.p>
            </div>
            <motion.p
              {...getMotionProps(0.9, parentDelay)}
              className="pt-2  text-md text-wrap font-semibold "
            >
              {jobProfile}
            </motion.p>
          </div>
          <motion.div {...getMotionProps(0.9, parentDelay)}>
            <img
              src={jobCompanyImage}
              className="h-9 w-9 object-cover rounded-xl"
              alt={jobPostingCompanyName}
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap w-full gap-2 text-[10.5px] lg:text-xs lg:pt-1 lg:pb-1">
          {jobSkillsRequired?.map((skill, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              {...getMotionProps(1, parentDelay)}
              className="border-[1.4px] border-gray-400 rounded-3xl  p-1 tracking-wide px-4 text-gray-800 font-semibold"
            >
              # {skill}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="lg:pt-3 text-black flex justify-between items-center p-2">
        <div>
          <motion.p
            {...getMotionProps(1.01, parentDelay)}
            className={`  font-semibold text-[15px] py-[2px] grayblack ${
              theme === "dark" ? "graywhite" : "grayblack"
            }`}
          >
            ₹ {salaryPerAnnum} LPA
          </motion.p>
          <motion.p
            {...getMotionProps(1.02, parentDelay)}
            className={`text-[12px] tracking-wide font-semibold  text-gray-700 ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            } `}
          >
            {jobCityLocationToWork}, <span>{jobCountryLocationToWork}</span>
          </motion.p>
        </div>

        <motion.div {...getMotionProps(1.04, parentDelay)}>
          <Link to={jobId}>
            <button
              onClick={() => {
                console.warn("Details Button Pressed");
              }}
              className={`p-2 text-sm font-semibold rounded-3xl bg-black px-7 text-white ${
                theme === "dark" ? " " : ""
              }`}
            >
              Details
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobComponent;

// import React, { useEffect, useRef, useState } from "react";
// import { LuBookmark } from "react-icons/lu";
// import { motion, useInView } from "framer-motion";

// // Use the full bgColors array as before
// export const bgColors = [/*... keep your full list here ...*/];

// const getRandomColor = () => {
//   const randomIndex = Math.floor(Math.random() * bgColors.length);
//   return bgColors[randomIndex];
// };

// // Motion variants for the whole card
// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.8, y: 50 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// // For child elements like name, salary, etc.
// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.4,
//     },
//   }),
// };

// const JobComponent = ({
//   jobPostDate,
//   jobPostingCompanyName,
//   jobProfile,
//   jobCompanyImage,
//   jobSkillsRequired,
//   salaryPerAnnum,
//   jobCityLocationToWork,
//   jobCountryLocationToWork,
// }) => {
//   const [randomBg, setRandomBg] = useState(getRandomColor());

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRandomBg(getRandomColor());
//     }, 1000000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       ref={ref}
//       variants={cardVariants}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       className="border-2 border-gray-200 rounded-3xl p-[6px] max-h-[480px] min-w-[210px] max-w-[335px] bg-white"
//     >
//       <div className="rounded-3xl p-4" style={{ backgroundColor: randomBg }}>
//         {/* Top row: date & bookmark */}
//         <div className="flex w-full justify-between items-center text-black">
//           <motion.p
//             variants={itemVariants}
//             custom={0}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="text-xs rounded-3xl border-2 border-gray-300 p-1 px-3 bg-white"
//           >
//             {jobPostDate}
//           </motion.p>
//           <motion.button
//             variants={itemVariants}
//             custom={1}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="p-2 bg-white rounded-full"
//           >
//             <LuBookmark />
//           </motion.button>
//         </div>

//         {/* Company name + profile */}
//         <div className="flex justify-between items-center text-black pt-3 pb-2 px-1">
//           <div className="w-[70%]">
//             <motion.p
//               variants={itemVariants}
//               custom={2}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               className="text-gray-700"
//             >
//               {jobPostingCompanyName}
//             </motion.p>
//             <motion.p
//               variants={itemVariants}
//               custom={3}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               className="pt-3 text-gray-800 text-md text-wrap font-semibold"
//             >
//               {jobProfile}
//             </motion.p>
//           </div>
//           <motion.div
//             variants={itemVariants}
//             custom={4}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             <img
//               src={jobCompanyImage}
//               className="h-9 w-9 object-cover rounded-xl"
//               alt={jobPostingCompanyName}
//             />
//           </motion.div>
//         </div>

//         {/* Skills */}
//         <div className="flex flex-wrap w-full gap-2 text-xs pt-1 pb-1">
//           {jobSkillsRequired?.map((skill, index) => (
//             <motion.p
//               key={index}
//               variants={itemVariants}
//               custom={5 + index}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               className="border-[1.4px] border-gray-400 rounded-3xl p-1 tracking-wide px-4 text-gray-700 font-semibold"
//             >
//               #{skill}
//             </motion.p>
//           ))}
//         </div>
//       </div>

//       {/* Bottom row: salary + location + details */}
//       <div className="pt-2 text-black flex justify-between items-center p-3">
//         <div>
//           <motion.p
//             variants={itemVariants}
//             custom={jobSkillsRequired.length + 5}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="text-gray-800 font-semibold text-[15px] py-[2px]"
//           >
//             ₹ {salaryPerAnnum} LPA
//           </motion.p>
//           <motion.p
//             variants={itemVariants}
//             custom={jobSkillsRequired.length + 6}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="text-[12px] tracking-wide font-semibold text-gray-700"
//           >
//             {jobCityLocationToWork}, <span>{jobCountryLocationToWork}</span>
//           </motion.p>
//         </div>

//         <motion.div
//           variants={itemVariants}
//           custom={jobSkillsRequired.length + 7}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <button
//             onClick={() => {
//               console.warn("Details Button Pressed");
//             }}
//             className="p-2 text-sm font-semibold rounded-3xl px-6 text-white bg-black"
//           >
//             Details
//           </button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default JobComponent;
