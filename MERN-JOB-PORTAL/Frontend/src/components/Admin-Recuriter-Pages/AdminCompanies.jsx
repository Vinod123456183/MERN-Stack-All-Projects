import React, { useState } from "react";
import AdminSearch from "./SmallComponents/AdminSearch";
import AdminButton from "./SmallComponents/AdminButton";
import AdminHeader from "../Header/AdminHeader";

function AdminCompanies() {
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    {
      date: "2025-07-22",
      title: "Backend Developer",
      company: "Netflix",
      status: "pending",
    },
    {
      date: "2025-07-21",
      title: "Backend Developer",
      company: "Meta",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "Full Stack Engineer",
      company: "Google",
      status: "approved",
    },
    {
      date: "2025-06-30",
      title: "MERN Developer",
      company: "Amazon",
      status: "rejected",
    },
    {
      date: "2025-07-22",
      title: "Backend Developer",
      company: "Netflix",
      status: "pending",
    },
    {
      date: "2025-07-21",
      title: "Backend Developer",
      company: "Meta",
      status: "pending",
    },
    {
      date: "2025-06-30",
      title: "Full Stack Engineer",
      company: "Google",
      status: "approved",
    },
    {
      date: "2025-06-30",
      title: "MERN Developer",
      company: "Amazon",
      status: "rejected",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
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
            Applied Jobs
          </p>

          {/* Table Header */}
          <div className="hidden md:flex font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
            <div className="w-1/4">Date</div>
            <div className="w-1/4">Job Title</div>
            <div className="w-1/4">Company</div>
            <div className="w-1/4">Status</div>
          </div>

          {/* Job List */}
          <div className="space-y-2 mt-2">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-3
                  transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-lg cursor-pointer"
              >
                <div className="w-full md:w-1/4 text-gray-800 dark:text-gray-300 text-sm">
                  {job.date}
                </div>
                <div className="w-full md:w-1/4 text-gray-800 dark:text-gray-300 text-sm">
                  {job.title}
                </div>
                <div className="w-full md:w-1/4 text-gray-800 dark:text-gray-300 text-sm">
                  {job.company}
                </div>
                <div className="w-full md:w-1/4 mt-2 md:mt-0">
                  <span
                    className={`text-xs px-3 py-1 rounded-full inline-block font-semibold ${
                      job.status === "approved"
                        ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300"
                        : job.status === "rejected"
                        ? "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300"
                        : "bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-300"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCompanies;
