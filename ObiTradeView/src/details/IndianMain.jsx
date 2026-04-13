import React from "react";

function IndianMain() {
  return (
    <div className="flex  items-center justify-center  h-screen ">
      <div className="bg-gray-50 shadow-sm rounded-lg p-5 text-center ">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          🚧 Trying Hard
        </h1>
        <p className="text-gray-600 mb-4">Building this feature soon...</p>
        <div className="flex justify-center gap-1">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mr-1"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce mr-1 delay-200"></span>
          <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-500"></span>
        </div>
      </div>
    </div>
  );
}

export default IndianMain;
