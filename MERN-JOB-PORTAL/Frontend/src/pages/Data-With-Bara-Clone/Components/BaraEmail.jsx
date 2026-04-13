import React from "react";

function BaraEmail() {
  return (
    <div className="flex  mt-6 lg:max-w-[80%] lg:min-w-[50%]">
      <input
        type="email"
        placeholder="Type your email..."
        className=" bg-gray-200 flex-1 px-2 py-2 lg:px-4 lg:py-[10px] rounded-l-md border border-sky-500 text-sm focus:outline-none"
      />
      <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 rounded-r-md text-sm">
        Subscribe
      </button>
    </div>
  );
}

export default BaraEmail;
