import React from "react";
import { FaBitcoin, FaSyncAlt } from "react-icons/fa";

function LeftSmallDetail({
  topHeading,
  coinPrice,
  coinShortName,
  timeAndRefreshRate,
  dailyVolumeOfTopCoin,
  cointVolumeOfTopCoin,
  image,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 py-6 h-72  min-w-full max-w-[560px] xl:min-w-[280px] 2xl:min-w-[490px] fullborder">
      {/* Tabs */}
      <div className="flex mb-4">
        <button className="px-4 py-2 font-semibold border-b-2 w-full border-blue-500 text-blue-600">
          {topHeading}
        </button>
      </div>

      {/* Balance & Currency */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className=" text-md md:text-lg lg:text-xl font-semibold text-gray-900">
            $ {coinPrice}
          </h2>
        </div>
        <div className="flex items-center space-x-1 bg-gray-100 rounded px-2 py-1">
          <img src={image} alt="" className="h-5 w-5" />
          <span className="text-sm font-medium text-gray-800">
            {coinShortName}
          </span>
        </div>
      </div>

      {/* Time and Refresh */}
      <div className="flex items-center text-sm text-gray-700 space-x-2 mb-4">
        <span>{timeAndRefreshRate}</span>
        <FaSyncAlt className="animate-spin cursor-pointer" title="Refresh" />
      </div>

      <hr className="my-2 text-gray-200" />

      {/* Detail Stats */}
      <div className="flex justify-between text-sm text-gray-700 mb-4">
        <div>
          <div className="font-semibold text-xs md:text-sm lg:text-md  pb-1 ">
            $ {dailyVolumeOfTopCoin}
          </div>
          <div className="text-[11px] md:text-xs     ">Total Volume</div>
        </div>
        <div>
          <div className="font-semibold text-xs md:text-sm lg:text-md  pb-1 ">
            $ {cointVolumeOfTopCoin}
          </div>
          <div className="text-[11px] md:text-xs     ">Market Capital</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="w-full text-sm lg:text-md bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 800">
          Active Money Status
        </button>
      </div>
    </div>
  );
}

export default LeftSmallDetail;
