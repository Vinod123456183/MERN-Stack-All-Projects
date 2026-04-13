import React from "react";

function BelowCryptoTable2({ symbol, name, price, volume, change, icon }) {
  const isPositive = Number(change) > 0;

  // Function to slice the name and add "..." if more than 5 words
  const getShortenedName = (name) => {
    const words = name.split(" ");
    if (words.length > 2) {
      return words.slice(0, 2).join(" ") + "...";
    }
    return name;
  };

  return (
    <tr className="border-t border-gray-300 hover:bg-gray-50 text-sm text-nowrap">
      <td className="flex items-center justify-start gap-2 px-4 py-3">
        <img src={icon} alt="" className="h-8 w-8" />
        <div className="flex items-start">
          <p className="text-xs text-gray-900 bg-gray-100 p-1 px-4">{symbol}</p>
        </div>
        <div className="flex justify-start items-start pl-3">
          <p className="text-left text-gray-900 font-bold">
            {getShortenedName(name)} {/* Using the function here */}
          </p>
        </div>
      </td>
      <td className="text-start px-4 py-3 text-gray-900 font-bold">
        $ {price}
      </td>
      <td className="text-start font-bold px-4 py-3 ">$ {volume}</td>
      <td
        className={`text-start px-4 py-3 font-bold ${
          isPositive ? "text-green-500" : "text-red-600"
        }`}
      >
        {change !== undefined && change !== null
          ? Number(change).toFixed(5)
          : "-"}{" "}
        %
      </td>
    </tr>
  );
}

export default BelowCryptoTable2;
