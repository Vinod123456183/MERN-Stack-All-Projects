import React from "react";

function Plus({ value, year, experience }) {
  return (
    <div className="flex flex-col  items-center  hover:cursor-pointer mx-auto rounded-[24px] p-10  w-full bg-gradient-to-tr from-[#1b1b1b] via-[#181818] to-[#2c2c2c] group">
      <p className="text-[#fff] font-gemsbuck font-medium text-[20px] lg:text-[40px] uppercase ">
        {value}
      </p>
      <p className="text-[18px] font-encode text-center text-gray-400 ">
        {year}
      </p>
      <p className="text-[20px] font-encode text-center text-gray-400 ">
        {experience}
      </p>
    </div>
  );
}

export default Plus;
