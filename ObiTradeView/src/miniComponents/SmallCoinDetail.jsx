import React from "react";
import { Star, Zap } from "lucide-react";

function SmallCoinDetail({ name, price, change }) {
  return (
    <div className="flex justify-between items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Star className="w-4 h-4 text-yellow-400" />
        <span className="text-sm font-semibold">{name}</span>
        <Zap className="w-4 h-4 text-sky-500" />
      </div>
      <div className="flex space-x-3">
        <span className="text-sm font-semibold">
          ${typeof price === "number" ? price.toFixed(2) : "-"}
        </span>
        <span
          className={
            typeof change === "number" && change >= 0
              ? "text-green-500 text-sm font-semibold"
              : "text-red-500 text-sm font-semibold"
          }
        >
          {typeof change === "number"
            ? change > 0
              ? `+${change.toFixed(2)}%`
              : `${change.toFixed(2)}%`
            : "-"}
        </span>
      </div>
    </div>
  );
}

export default SmallCoinDetail;
