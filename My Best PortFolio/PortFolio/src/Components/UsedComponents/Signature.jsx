import React from "react";

function Signature({ text, subtitle, imageSrc, iconSrc }) {
  return (
    <div className=" flex  flex-col  items-center w-full bg-[#151414] rounded-2xl p-2 ">
      <img
        src={imageSrc}
        alt="Signature background"
        className="  w-[200px] mb-1"
      />
      <div className="flex items-center justify-between w-full  p-3">
        <div className="   ">
          <p className=" text-[15px] md:text-[17px]   font-semibold   ">
            {subtitle}
          </p>
          <p className="text-[14px] text-gray-500">{text}</p>
        </div>

        {iconSrc && (
          <img
            src={iconSrc}
            alt="Signature icon"
            className="w-12 bg-deep- h-12 opacity-45"
          />
        )}
      </div>
    </div>
  );
}

export default Signature;
