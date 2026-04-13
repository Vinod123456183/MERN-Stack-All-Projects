import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const bgColors = [
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
  // add rest of your colors here
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  return bgColors[randomIndex];
};

const getMotionProps = (delay = 0, parentDelay = 0) => ({
  initial: { opacity: 0, scale: 0.1 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, delay: delay * 0.4 + parentDelay * 0.4 },
});

const JobCard = ({
  index,
  parentDelay = 0,
  jobname,
  companyName,
  tags,
  companyLocation,
  image,
  companyText,
  date,
  applicants,
}) => {
  const [randomBg, setRandomBg] = useState(getRandomColor());

  useEffect(() => {
    // You can also update color every few seconds if you want
    // but here just setting once on mount:
    setRandomBg(getRandomColor());
  }, []);

  return (
    <motion.div
      className="border-2 border-gray-200 rounded-3xl p-[6px] max-h-[480px] min-w-[210px] max-w-[335px] bg-white"
      {...getMotionProps(0, parentDelay)} // Animate the card itself
    >
      <motion.div
        className="rounded-3xl p-4"
        style={{ backgroundColor: randomBg }}
        {...getMotionProps(0.2, parentDelay)} // Slight delay for inner container
      >
        <div className="flex w-full justify-between items-center text-black">
          <motion.p
            {...getMotionProps(0.4, parentDelay)}
            className="text-xs rounded-3xl border-2 border-gray-300 p-1 px-3 bg-white"
          >
            {date}
          </motion.p>
          <motion.button
            {...getMotionProps(0.6, parentDelay)}
            className="p-2 bg-white rounded-full"
          >
            🔖
          </motion.button>
        </div>

        <div className="flex justify-between items-center text-black pt-3 pb-2 px-1">
          <div className="w-[70%]">
            <motion.p
              {...getMotionProps(0.8, parentDelay)}
              className="text-gray-700"
            >
              {companyName}
            </motion.p>
            <motion.p
              {...getMotionProps(1.0, parentDelay)}
              className="pt-3 text-gray-800 text-md font-semibold"
            >
              {jobname}
            </motion.p>
          </div>
          <motion.div {...getMotionProps(1.2, parentDelay)}>
            <img
              src={image}
              alt={companyName}
              className="h-9 w-9 object-cover rounded-xl"
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap w-full gap-2 text-xs pt-1 pb-1">
          {tags?.map((tag, i) => (
            <motion.p
              key={i}
              {...getMotionProps(1.3 + i * 0.1, parentDelay)}
              className="border-[1.4px] border-gray-400 rounded-3xl p-1 tracking-wide px-4 text-gray-700 font-semibold"
            >
              #{tag}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <div className="pt-2 text-black flex justify-between items-center p-3">
        <motion.div {...getMotionProps(1.4, parentDelay)}>
          <p className="text-gray-800 font-semibold text-[15px] py-[2px]">
            Applicants: {applicants}
          </p>
          <p className="text-[12px] tracking-wide font-semibold text-gray-700">
            {companyLocation}
          </p>
        </motion.div>

        <motion.div {...getMotionProps(1.8, parentDelay)}>
          <button
            onClick={() => {
              console.warn("Details Button Pressed");
            }}
            className="p-2 text-sm font-semibold rounded-3xl px-6 text-white bg-black"
          >
            Details
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobCard;
