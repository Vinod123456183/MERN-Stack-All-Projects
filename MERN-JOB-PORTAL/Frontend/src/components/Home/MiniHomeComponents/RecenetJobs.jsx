import React, { useContext } from "react";
import { motion } from "framer-motion";
import RecenetJobsBox from "./RecenetJobsBox";
import { ThemeContext } from "../../../pages/core/ThemeContext";

// Import images
import img1 from "../../../assets/FromJobs/job-1.png";
import img2 from "../../../assets/FromJobs/job-2.jpg";
import img3 from "../../../assets/FromJobs/job-3.jpeg";
import img4 from "../../../assets/FromJobs/job-3.png";
import img5 from "../../../assets/FromJobs/job-4.png";
import img6 from "../../../assets/FromJobs/job-5.png";
import img7 from "../../../assets/FromJobs/job-6.png";
import img8 from "../../../assets/FromJobs/2.jpg";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const jobData = [
  {
    id: 1,
    urgent: true,
    image: img1,
    logo: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-4.svg",
    company: "Alithemes",
    type: "Fulltime",
    title: "Senior Full Stack Engineer, Creator Success Full Time",
    time: "3 mins ago",
    location: "Chicago",
    salary: "$3200",
  },
  {
    id: 2,
    urgent: false,
    image: img2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    type: "Contract",
    title: "Content Strategist for Streaming Platform",
    time: "2 hours ago",
    location: "Los Angeles",
    salary: "$4200",
  },
  {
    id: 3,
    urgent: true,
    image: img3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    type: "Fulltime",
    title: "Azure Cloud Solutions Architect",
    time: "30 mins ago",
    location: "Seattle",
    salary: "$6000",
  },
  {
    id: 4,
    urgent: false,
    image: img4,
    logo: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg",
    company: "TechNova",
    type: "Part-time",
    title: "UI/UX Designer for Mobile App Project",
    time: "1 hour ago",
    location: "New York",
    salary: "$2100",
  },
  {
    id: 5,
    urgent: true,
    image: img5,
    logo: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-2.svg",
    company: "CreativeHive",
    type: "Remote",
    title: "Remote Frontend Developer (React.js)",
    time: "30 mins ago",
    location: "Remote",
    salary: "$2800",
  },
  {
    id: 6,
    urgent: false,
    image: img6,
    logo: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-3.svg",
    company: "InnoSoft",
    type: "Internship",
    title: "Marketing Intern – Entry Level",
    time: "2 days ago",
    location: "Los Angeles",
    salary: "$800",
  },
  {
    id: 7,
    urgent: true,
    image: img7,
    logo: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-5.svg",
    company: "NextCorp",
    type: "Contract",
    title: "Backend Developer (Node.js & MongoDB)",
    time: "5 mins ago",
    location: "Seattle",
    salary: "$3500",
  },
  {
    id: 8,
    urgent: false,
    image: img8,
    logo: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-6.svg",
    company: "SoftZone",
    type: "Fulltime",
    title: "QA Tester for SaaS Product",
    time: "4 hours ago",
    location: "Austin",
    salary: "$2200",
  },
];

function RecenetJobs({ name }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <p
          className={`text-start font-bold text-2xl md:text-4xl lg:text-5xl ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          {name}
        </p>
        <button
          className={`border rounded-lg px-3 py-2 lg:px-5 lg:py-3 text-[10px] lg:text-sm ${
            theme === "dark"
              ? "text-gray-300 border-gray-500"
              : "text-black border-gray-300"
          }`}
        >
          View More
        </button>
      </div>

      {/* Animated Job Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {jobData.map((job) => (
          <motion.div
            key={job.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RecenetJobsBox
              urgent={job.urgent}
              image={job.image}
              logo={job.logo}
              company={job.company}
              type={job.type}
              title={job.title}
              time={job.time}
              location={job.location}
              salary={job.salary}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default RecenetJobs;
