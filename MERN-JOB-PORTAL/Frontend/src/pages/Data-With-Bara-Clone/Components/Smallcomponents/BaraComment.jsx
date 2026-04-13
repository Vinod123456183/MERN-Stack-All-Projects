import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function BaraComment() {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="pb-14 pt-8">
      <div className="flex justify-between items-center mt- mb-6">
        <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md text-gray-800 font-medium hover:bg-gray-300">
          <FiArrowLeft className="mr-2" />
          Previous
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md text-gray-800 font-medium hover:bg-gray-300">
          Next
          <FiArrowRight className="ml-2" />
        </button>
      </div>

      {/* Heading */}
      <p className="text-xl font-semibold  py-3">Discussion about this post</p>

      {/* Tabs */}
      <div className="w-auto  space-x-1 text-xs py-3 mb-2">
        <button
          onClick={() => setActiveTab("comments")}
          className={`px-3 py-2 rounded-md border ${
            activeTab === "comments"
              ? "bg-gray-300 text-black shadow font-medium"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          Comments
        </button>
        <button
          onClick={() => setActiveTab("restacks")}
          className={`px-3 py-2 rounded-md border ${
            activeTab === "restacks"
              ? "bg-gray-300 text-black shadow font-medium"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Restacks
        </button>
      </div>

      {/* Comment Box */}
      <div className="flex items-start space-x-1">
        {/* Avatar */}
        <img
          src="https://via.placeholder.com/44"
          alt="user"
          className="rounded-full w-10 h-10"
        />
        {/* Textarea */}
        <textarea
          rows="3"
          placeholder="Write a comment..."
          className="w-full border border-gray-300 bg-gray-300 rounded-xl p-4 focus:outline-none focus:ring focus:ring-blue-200"
        ></textarea>
      </div>
    </div>
  );
}

export default BaraComment;
