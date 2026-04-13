import React from "react";
import { motion } from "framer-motion";
const MovingDiv = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="  mb-2 bg-[#161616]  p-2 xl:p-4  rounded-3xl flex md:flex-row flex-col lg:w-full overflow-hidden"
      >
        <p className="moving-text text-gray-500 font-thin  text-[12px] lg:text-[16px]">
          "Welcome to My World: A Space Where Ideas Come to Life. Dive into My
          Projects and Discover My Passion for Technology."
        </p>
      </motion.div>
    </div>
  );
};

export default MovingDiv;
