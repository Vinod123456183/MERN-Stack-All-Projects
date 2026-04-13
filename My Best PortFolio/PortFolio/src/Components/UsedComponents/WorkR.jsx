import React from "react";
import { motion } from "framer-motion";

const WorkR = ({ src, type, d, smallicon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.5 }}
      className="flex items-start bg-[#151616] gap-3 justify-between p-7 flex-col w-full mx-auto rounded-3xl"
    >
      <div className="w-full">
        <img src={src} alt={type} className="rounded-3xl w-full h-auto b" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          <p className="capitalize text-start text-[10px] md:text-[12px] lg:text-[15px] font-kodchasan font-bold text-gray-500">
            {type}
          </p>
          <p className="capitalize text-start text-[14px] md:text-[16px] lg:text-[20px] font-kodchasan font-bold text-gray-300">
            {d}
          </p>
        </div>
        <div>
          <img
            src={smallicon}
            alt="Small icon"
            className="h-12 md:h-16 lg:h-20"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkR;
