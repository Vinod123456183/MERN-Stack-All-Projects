import React, { useContext } from "react";
import img from "../../../assets/about.png";
import SmallTechComponent from "../TechComponents/SmallTechComponent";
import { motion } from "framer-motion";
import { ThemeContext } from "../../core/ThemeContext";

const TechonoligiesCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className={`border p-4 min-w-[95%] max-w-[100%] w-auto h-auto min-h-[350px] max-h-[450px] rounded-lg flex flex-col transition-colors duration-500
          ${
            theme === "dark"
              ? "bg-[#1a1a1a] border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-800"
          }`}
      >
        <p className="py-2 font-semibold text-lg">Technologies</p>

        <SmallTechComponent
          smallTechImg={img}
          smallTechText={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sed, sit at quas totam assumenda ducimus quod est eveniet. Quod repellat dolor vel quia cum delectus eligendi esse veniam laboriosam."
          }
        />
        <SmallTechComponent
          smallTechImg={img}
          smallTechText={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sed, sit at quas totam assumenda ducimus quod est eveniet. Quod repellat dolor vel quia cum delectus eligendi esse veniam laboriosam."
          }
        />
        <SmallTechComponent
          smallTechImg={img}
          smallTechText={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sed, sit at quas totam assumenda ducimus quod est eveniet. Quod repellat dolor vel quia cum delectus eligendi esse veniam laboriosam."
          }
        />
      </motion.div>
    </>
  );
};

export default TechonoligiesCard;
