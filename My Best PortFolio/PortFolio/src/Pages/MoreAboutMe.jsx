import { motion } from "framer-motion";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaCentSign, FaGithub, FaWhatsapp } from "react-icons/fa6";
import img from "../assets/MYNEW1.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MoreAboutMe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  const skills = [
    {
      name: "JavaScript",
      level: "1",
      percentage: "70%",
      description: "Intermediate",
    },
    {
      name: "Python",
      level: "2",
      percentage: "50%",
      description: "Beginner to Intermediate",
    },
    {
      name: "ReactJs",
      level: "3",
      percentage: "75%",
      description: "Intermediate to Advanced",
    },
    { name: "HTML", level: "4", percentage: "90%", description: "Advanced" },
    {
      name: "C++",
      level: "4",
      percentage: "80%",
      description: "Intermediate to Advanced",
    },
    {
      name: "CSS",
      level: "4",
      percentage: "80%",
      description: "Intermediate to Advanced",
    },
    {
      name: "Numpy",
      level: "4",
      percentage: "55%",
      description: "Beginner to Intermediate",
    },
    {
      name: "Pandas",
      level: "4",
      percentage: "55%",
      description: "Beginner to Intermediate",
    },
    {
      name: "Git And GitHub",
      level: "4",
      percentage: "60%",
      description: "Intermediate",
    },
  ];

  // Gradient Background Component
  const GradientImageComponent = () => {
    const gradientStyle = {
      background: "rgb(90,90,91)",
      background:
        "linear-gradient(90deg, rgba(90,90,91,1) 0%, rgba(95,95,246,1) 0%, rgba(42,55,225,1) 43%, rgba(0,212,255,1) 99%, rgba(8,176,255,1) 100%)",
    };

    return (
      <div className="relative pt-4 md:mt-6">
        <div className="absolute inset-0 z-10" style={gradientStyle}></div>
        {/* Image */}
        <img
          src={img}
          alt="Vinod Singh"
          className="relative w-full h-auto  z-20"
        />
      </div>
    );
  };

  return (
    <div className="mx-3 lg:mx-12 mt-8 lg:mt-8 flex flex-col lg:flex-row">
      {/* Left */}

      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="bg-[#151414] font-kodchasan rounded-3xl p-5 w-full lg:w-1/3 lg:sticky top-16 self-start"
      >
        <GradientImageComponent />
        <p className="pt-2 md:pt-4 md:pb-4 text-gray-300 text-[18px] md:text-[26px] text-center">
          Vinod Singh
        </p>
        <p className="pt-1 md:pt-3 md:pb-3 text-gray-300  text-center">
          @vinodsinghbarti
        </p>
        <motion.div className="flex flex-row justify-center gap-2 pt-2 md:pt-3 pb-2 md:pb-3 text-gray-200">
          <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-twitterColor">
            <a
              href="https://www.linkedin.com/in/vinod-barti-339571268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={30} />
            </a>
          </div>

          <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-black">
            <a
              href="https://github.com/Vinod123456183"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>

          <div className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] transition-all duration-300">
            <a
              href="https://www.instagram.com/__1_deeppak_3__9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} className="text-white" />
            </a>
          </div>

          <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-whatsappColor">
            <a
              href="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </motion.div>
        <button
          onClick={handleClick}
          className="w-full mt-4 px-4 py-2 bg-gray-50 text-black rounded-md"
        >
          Let's Talk
        </button>
      </motion.div>

      {/* Right */}
      <motion.div className="flex-1 p-4 font-kodchasan lg:ml-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="mx-auto p-6 pt-1"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-200">ABOUT ME</h2>
          <p className="mb-10 text-gray-500 text-[12px] md:text-[15px]">
            Hi, I’m Vinod Singh Barti, a dedicated Computer Science Engineering
            student at GEHU , on track to graduate in 2026. My academic journey
            is fueled by a passion for technology and a drive to innovate. In
            addition to my studies, I am an avid photographer. I find joy in
            capturing the world around me and expressing creativity through my
            lens. I pride myself on being a hard worker. To date, I’ve completed
            five diverse projects, each one enhancing my problem-solving skills
            and expanding my knowledge. These projects have been pivotal in my
            development, blending technical proficiency with creative thinking.
            I’m excited about the future and eager to embrace new challenges
            that will allow me to continue growing both personally and
            professionally.
          </p>
          {/* <div>
            
          <h2 className="text-2xl font-bold text-gray-300 mb-4">EXPERIENCE</h2>
          <p className="text-[15px] font-bold text-gray-400 mb-2">
            2007 - 2017
          </p>
          <h3 className="text-[15px] font-bold text-gray-400 mb-2">
            Framer Designer & Developer
          </h3>
          <p className="text-[15px] font-bold text-gray-400 mb-2">
            Bluebase Designs
          </p>
          <p className="mb-6 text-gray-500 text-[12px] md:text-[15px]">
            Sit amet luctus sd fav venenatis, lectus magna fringilla inis urna,
            porttitor rhoncus dolor purus non enim praesent in elementum sahas
            facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
            etisam dignissim diam quis enim lobortis viverra orci sagittis eu
            volutpat odio facilisis mauris sit. Scelerisque fermentum duis
            faucibus in ornare quam sisd sit amet luctus sd fav venenatis,
            lectus magna fringilla zac urna, porttitor rhoncus dolor purus non
            enim praesent cuz elementum sahas facilisis leot.
          </p>
          
          </div> */}
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="text-card-foreground pt-1 p-6 rounded-lg shadow-md"
        >
          {/* <div className="mb-6">
            <span className="text-[15px] font-bold text-gray-400 mb-2">
              2017 - 2023
            </span>
            <h2 className="text-[15px] font-bold text-gray-400 mb-3">
              Front-End Developer
            </h2>
            <p className="mb-6 text-gray-500 text-[12px] md:text-[15px]">
              Sit amet luctus sd fav venenatis, lectus magna fringilla inis
              urna, porttitor rhoncus dolor purus non enim praesent in elementum
              sahas facilisis leo, vel fringilla est ullamcorper eget nulla
              facilisi etisam dignissim diam quis enim lobortis viverra orci
              sagittis eu volutpat odio facilisis mauris sit. Scelerisque
              fermentum duis faucibus in ornare quam sisd sit amet luctus sd fav
              venenatis, lectus magna fringilla zac urna, porttitor rhoncus
              dolor purus non enim praesent cuz elementum sahas facilisis leot.
            </p>
          </div> */}

          <motion.h3
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="text-2xl font-bold text-gray-300 mb-4"
          >
            EDUCATION
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            <span className="text-[15px] font-bold text-gray-400 mt-2">
              2008 - 2020
            </span>
            <h2 className="text-[15px] font-bold text-gray-400 mt-2">
              Schooling
            </h2>
            <p className="text-[15px] uppercase font-bold text-gray-400 mt-2">
              St. Paul’s Sr. Sec. School.
            </p>
            <p className="text-gray-500 text-[12px] md:text-[15px] mt-2">
              Schooling has been a pivotal journey in my life, shaping both my
              intellect and character. It has provided me with a broad knowledge
              base and essential skills in critical thinking and
              problem-solving. Beyond academics, extracurricular activities
              enriched my experience, teaching me leadership and collaboration.
              The lessons learned in school have fostered a lifelong love for
              learning and prepared me to embrace future challenges with
              confidence and curiosity.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="bg-card text-card-foreground p-6 mt-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="mb-6"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="text-[15px] font-bold text-gray-400 mb-4"
            >
              2022-2026
            </motion.span>
            <h2 className="text-[15px] font-bold text-gray-400 mt-2">
              Bachelor's In Computer Science
            </h2>
            <h3 className=" uppercase text-[15px] font-bold text-gray-400 mt-2">
              Graphic Era Hill Uninversity
            </h3>
            <p className="mb-6 text-gray-500 text-[12px] md:text-[15px] mt-2">
              Attending Graphic Era Hill University in Bhimtal has been a
              transformative experience that blended rigorous academics with a
              serene, picturesque environment. The university's innovative
              approach to education, combined with its emphasis on holistic
              development, provided a robust foundation for my academic and
              personal growth. The diverse range of programs and dedicated
              faculty members fostered an enriching learning experience, while
              the campus’s natural beauty offered a peaceful backdrop for
              focused study and reflection. My time at Graphic Era Hill
              University has significantly shaped my skills and aspirations,
              preparing me for future endeavors with a balanced and
              forward-thinking mindset.
            </p>
          </motion.div>

          <motion.h4
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="text-2xl font-bold text-gray-300 mb-4"
          >
            SKILLS
          </motion.h4>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="grid grid-cols-1 gap-4 tablet:grid-cols-2 md:grid-cols-3"
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col justify-center">
                <div className="text-gray-500">{skill.percentage}</div>
                <div className="text-gray-300">{skill.name}</div>
                <div className="text-gray-500">{skill.description}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Awards */}
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="text-2xl font-bold p-6 pb-3 text-gray-300"
          >
            AWARDS
          </motion.h2>
          {[
            {
              date: "16 Sep 2024",
              title: "LeetCode",
              description: "100+ Questions",
            },
            {
              date: "18 Sep 2024",
              title: "Projects",
              description: "10+ Projects Completed",
            },
          ].map((award, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              key={index}
              className=" p-6 pt-3"
            >
              <span className="text-[13px] font-thin text-gray-400">
                {award.date}
              </span>
              <h3 className="text-[20px] font-bold text-gray-400 mt-1 mb-1">
                {award.title}
              </h3>
              <p className="text-[13px] font-thin text-gray-400">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MoreAboutMe;
