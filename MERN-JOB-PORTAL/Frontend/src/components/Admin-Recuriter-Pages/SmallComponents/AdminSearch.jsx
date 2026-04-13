import React from "react";

function AdminSearch({ placeholder = "Search...", value, onChange }) {
  return (
    <div className=" max-w-md min-w-[18%] my-4">
      <input
        type="text"
        className="w-full px-2 py-1 border border-gray-300  rounded-md shadow-sm focus:outline-none transition duration-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AdminSearch;
