import React from "react";
import { Info } from "lucide-react";

function DetailsOfCoin({
  marketCap,
  marketCapChange,
  marketCapChangeType,
  priceChange24h,
  priceChangePercentage24h,
  priceChangeType,
  volume,
  circulatingSupply,
  totalSupply,
}) {
  const isPricePositive = priceChange24h >= 0;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl bg-white fullborder">
      {/* Market Cap */}
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-xs font-medium text-gray-500">Market Cap</p>
          <Info size={14} className="text-gray-400" />
        </div>
        <p className=" text-sm lg:text-xl xl:text-2xl font-semibold  text-gray-800">
          {marketCap}
        </p>
        <p
          className={`text-sm mt-1 font-medium ${marketCapChangeType === "up" ? "text-green-500" : "text-red-500"}`}
        >
          {marketCapChange}
        </p>
      </div>

      {/* 24h Price Change */}
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-xs font-medium text-gray-500">24h Price Change</p>
          <Info size={14} className="text-gray-400" />
        </div>
        <p
          className={` text-sm lg:text-xl xl:text-2xl font-semibold   text-gray-800`}
        >
          {priceChange24h}
        </p>
        <p
          className={`text-sm  mt-1 font-medium ${priceChangeType === "up" ? "text-green-500" : "text-red-500"}`}
        >
          {priceChangePercentage24h}
        </p>
      </div>

      {/* Volume */}
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-xs font-medium text-gray-500">24h Volume</p>
          <Info size={14} className="text-gray-400" />
        </div>
        <p className=" text-sm lg:text-xl xl:text-2xl font-semibold  text-gray-800">
          {volume}
        </p>
      </div>

      {/* Circulating Supply */}
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-xs font-medium text-gray-500">
            Circulating Supply
          </p>
          <Info size={14} className="text-gray-400" />
        </div>
        <p className=" text-sm lg:text-xl xl:text-2xl font-semibold  text-gray-800">
          {circulatingSupply}
        </p>
        <p className="text-xs md:text-md lg:text-lg text-blue-600 mt-1 font-semibold">
          Total : {totalSupply}
        </p>
      </div>
    </div>
  );
}

export default DetailsOfCoin;
