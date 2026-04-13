import React from "react";
import { NavLink } from "react-router-dom";

function NavigatingComponent({ coinId }) {
  return (
    <div className="flex gap-2 items-center text-sm pt-8 md:pt-0  ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }
      >
        Crypto
      </NavLink>

      <span>/</span>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }
      >
        Coins
      </NavLink>

      <span>/</span>

      <NavLink
        to={`/coin/${coinId}`}
        className={({ isActive }) =>
          isActive
            ? "font-bold text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }
      >
        {coinId}
      </NavLink>
    </div>
  );
}

export default NavigatingComponent;
