import React from "react";

function NameOfCoin({
  coinImage,
  coinImageAlt,
  coinPrice,
  coinPriceChange24h,
  coinRank,
  coinName,
  coinTags = [],
  // relatedCoins = [],
}) {
  return (
    <div className="bg-white rounded-xl p-4 w-full lg:py-6 fullborder px-5">
      <div className="flex flex-col w-full lg:flex-row justify-between items-start">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-start gap-2">
            <img
              src={coinImage}
              alt={coinImageAlt || coinName}
              className="w-10 h-10"
            />
            <h1 className="lg:text-2xl text-gray-800 font-semibold">
              {coinName}
            </h1>
            {/* <span className="font-bold text-sm text-gray-400 pb-3">
              #{coinRank}
            </span> */}
          </div>

          <div className="mt-2  lg:pl-10 flex items-start gap-2">
            <span className=" text-lg lg:text-2xl text-gray-900">
              $ {coinPrice}
            </span>
            <span
              className={`font-semibold pb-4 text-xs ${
                coinPriceChange24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {coinPriceChange24h >= 0 ? "▲" : "▼"}{" "}
              {Math.abs(coinPriceChange24h)}%
            </span>
          </div>

          {coinTags.length > 0 && (
            <div className="mt-1 lg:mt-3  w-full">
              <h2 className="text-xs  lg:text-sm font-semibold text-gray-600 py-1">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2 mt-1 ">
                {coinTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-[10px]  lg:text-sm font-medium rounded-lg"
                  >
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* {relatedCoins.length > 0 && (
          <div className="flex flex-col pt-4 lg:pt-0 w-full lg:flex-row justify-end gap-4">
            {relatedCoins.map((app, index) => (
              <div
                key={index}
                className="lg:min-w-[140px] text-center border border-gray-50 bg-gray-50 px-4 py-3 transition"
              >
                <img
                  src={app.img}
                  alt={app.name}
                  className="w-10 h-10 mx-auto mb-2 rounded-full"
                />
                <p className="text-sm font-semibold">{app.name}</p>
                <p className="text-xs text-gray-500">{app.symbol}</p>
                <p className="text-xs text-gray-400">#{app.rank}</p>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
}

export default NameOfCoin;
