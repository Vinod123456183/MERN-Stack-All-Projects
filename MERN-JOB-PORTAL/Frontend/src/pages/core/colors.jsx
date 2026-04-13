// src/hooks/useThemeColors.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // update path if different

export const useThemeColors = () => {
  const { theme } = useContext(ThemeContext);

  return {
    bgColor: theme === "light" ? "bg-[#f0f0f0]" : "bg-[#090909]",
    borderGrey: theme === "light" ? "border-[#c6c6c6]" : "border-[#29282F]",
    greyText: theme === "light" ? "text-gray-800" : "text-gray-400",
    whiteTxt: theme === "light" ? "text-gray-100" : "text-gray-200",
    
  };
};
