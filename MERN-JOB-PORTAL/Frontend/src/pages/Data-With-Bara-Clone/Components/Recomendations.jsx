import React, { useContext } from "react";
import { ThemeContext } from "../../core/ThemeContext"; // Adjust path as needed

const recommendations = [
  {
    title: "AI Dev Insights",
    author: "Lina Perez",
    img: "https://substackcdn.com/image/fetch/$s_!-tqv!,w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Febd7d5b3-1fa3-4855-ac8f-7e00378893f1_300x300.webp",
  },
  {
    title: "ML in Practice",
    author: "Sagar Desai",
    img: "https://substackcdn.com/image/fetch/$s_!_YQy!,w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5a360868-3abf-47fe-bc4f-4d2e283524ff_500x500.png",
  },
  {
    title: "Deep Learning Digest",
    author: "Ava Thompson",
    img: "https://substackcdn.com/image/fetch/$s_!1eXV!,w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8a5609ae-1239-4400-9491-6010a15c4d60_504x504.png",
  },
  {
    title: "Weekly Dev Pulse",
    author: "Nate Brooks",
    img: "https://substackcdn.com/image/fetch/$s_!H1LZ!,w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b3862b9-63b7-4957-93ca-85271b3e7a81_144x144.png",
  },
  {
    title: "Fullstack Snippets",
    author: "Emily Zhang",
    img: "https://substackcdn.com/image/fetch/$s_!7Ycl!,w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2557a456-7871-44ac-8b8f-39b4d9063439_144x144.png",
  },
];

function Recomendations() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full max-w-sm pt-7 lg:pt-0 lg:p-7 rounded-md
        ${theme === "dark" ? "" : "bg-white"}`}
    >
      <div
        className={`flex items-center justify-between mb-2 border-b pb-3
          ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
      >
        <p
          className={`font-semibold text-md ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Recommendations
        </p>
        <span
          className={`text-[10px] font-medium cursor-pointer hover:underline ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          VIEW ALL {recommendations.length}
        </span>
      </div>

      <ul className="space-y-4 mt-3">
        {recommendations.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <img src={item.img} alt={item.title} className="w-9 h-9 rounded" />
            <div className="flex flex-col">
              <span
                className={`font-semibold text-sm ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`text-[11px] ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {item.author}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recomendations;
