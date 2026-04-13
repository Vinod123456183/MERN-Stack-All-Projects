import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", purple: 60, blue: 40 },
  { day: "Tue", purple: 70, blue: 50 },
  { day: "Wed", purple: 80, blue: 40 },
  { day: "Thu", purple: 50, blue: 60 },
  { day: "Fri", purple: 60, blue: 90 },
  { day: "Sat", purple: 50, blue: 70 },
  { day: "Sun", purple: 90, blue: 90 },
];

const MyChart = () => {
  const total = 3.982;
  const weekValue = 1.982;

  return (
    <div className="w-full bg-white p-2 rounded-lg shadow-md font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Project Statistic</h2>
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded cursor-pointer select-none">
          <span>This Month</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border-2 border-purple-400"></div>
          <div>
            <p className="text-sm font-semibold">This Week</p>
            <p className="text-xs font-bold text-gray-800">{weekValue}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border-2 border-blue-400"></div>
          <div>
            <p className="text-sm font-semibold">This Week</p>
            <p className="text-xs font-bold text-gray-800">{weekValue}</p>
          </div>
        </div>

        <div className="ml-auto text-right">
          <p className="text-sm font-semibold">Total</p>
          <p className="text-blue-600 font-bold">{total}</p>
          <div className="w-28 h-2 bg-gray-300 rounded-full mt-1">
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: `${(total / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={160}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 0, bottom: 20, left: 0 }}
        >
          <CartesianGrid stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ stroke: "#cbd5e1", strokeWidth: 2 }}
            contentStyle={{ fontSize: 12 }}
          />
          <Line
            type="monotone"
            dataKey="purple"
            stroke="#8b5cf6" // violet-400
            strokeWidth={2}
            dot={{ fill: "#c4b5fd", r: 5 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="blue"
            stroke="#3b82f6" // blue-500
            strokeWidth={2}
            dot={{ fill: "#3b82f6", r: 5, stroke: "#3b82f6", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyChart;
