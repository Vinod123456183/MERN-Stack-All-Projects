import React, { useContext } from "react";
import { ThemeContext } from "../../../pages/core/ThemeContext";
function AdminButton({ name, onClick }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className="p-2 text-sm rounded-lg px-3 bg-black text-white dark:bg-gray-200 dark:text-black"
        >
          {name}
        </button>
      </div>
    </>
  );
}

export default AdminButton;
