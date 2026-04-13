import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import AdminSearch from "./SmallComponents/AdminSearch";
import AdminButton from "./SmallComponents/AdminButton";
import AdminHeader from "../Header/AdminHeader";

function AdminJobs() {
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    {
      date: "2025-07-22",
      title: "Backend Developer",
      status: "pending",
      logo: "https://logo.clearbit.com/netflix.com",
    },
    {
      date: "2025-07-21",
      title: "Backend Developer",
      status: "pending",
      logo: "https://logo.clearbit.com/meta.com",
    },
    {
      date: "2025-06-30",
      title: "Full Stack Engineer",
      status: "approved",
      logo: "https://logo.clearbit.com/google.com",
    },
    {
      date: "2025-06-30",
      title: "MERN Developer",
      status: "rejected",
      logo: "https://logo.clearbit.com/amazon.com",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AdminHeader />
      <div className="page-container">
        <div className="py-5 flex items-center justify-between">
          <AdminSearch
            placeholder="Filter By Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AdminButton name="Add Company" onClick={() => {}} />
        </div>

        <div className="pb-10 w-full">
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Your recent registered Companies
          </p>

          {/* Table Header */}
          <div className="hidden md:flex text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-6 py-4 rounded-md">
            <div className="w-1/3">Title</div>
            <div className="w-1/3">Date</div>
            <div className="w-1/3 text-right">Action</div>
          </div>

          {/* Job List */}
          <div className="space-y-3 mt-4">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between 
                bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                rounded-md px-4 py-3 transition-all duration-300 ease-in-out 
                hover:shadow-md hover:scale-[1.01] cursor-pointer"
              >
                {/* Job Info */}
                <div className="flex items-center gap-3 w-full md:w-1/3">
                  <img
                    src={job.logo}
                    alt={job.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {job.title}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-2 md:mt-0 w-full md:w-1/3 text-sm text-gray-600 dark:text-gray-400">
                  {job.date}
                </div>

                {/* Edit Button */}
                <div className="w-full md:w-1/3 mt-2 md:mt-0 flex justify-start md:justify-end">
                  <button
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    title="Edit"
                  >
                    <FaRegEdit size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminJobs;
