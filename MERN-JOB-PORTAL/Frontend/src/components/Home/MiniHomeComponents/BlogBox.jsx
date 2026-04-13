import React, { useContext } from "react";
import { BsBookmark } from "react-icons/bs";
import { ThemeContext } from "../../../pages/core/ThemeContext";
import img1 from "../../../assets/FromBlogs/img1.jpg";
import img2 from "../../../assets/FromBlogs/img2.jpg";
import img3 from "../../../assets/FromBlogs/img3.jpg";
import img4 from "../../../assets/FromBlogs/img4.jpg";
import img5 from "../../../assets/FromBlogs/img5.jpg";
import img6 from "../../../assets/FromBlogs/img6.jpg";
import img7 from "../../../assets/FromBlogs/img7.jpg";
import img8 from "../../../assets/FromBlogs/img8.jpg";

const blogPosts = [
  {
    id: 1,
    title: "21 Job Tips: How To Make a Great Impression",
    author: "Sarah Harding",
    date: "06 September",
    image: img1,
  },
  {
    id: 2,
    title: "Top SQL Query Interview Questions",
    author: "James Carter",
    date: "12 September",
    image: img2,
  },
  {
    id: 3,
    title: "How To Write an Interview Reschedule Email",
    author: "Emily Zhang",
    date: "15 September",
    image: img3,
  },
  {
    id: 4,
    title: "Common JavaScript Interview Pitfalls",
    author: "Derek Wells",
    date: "18 September",
    image: img4,
  },
  {
    id: 5,
    title: "UX Design Interview: What to Expect",
    author: "Clara Miles",
    date: "21 September",
    image: img5,
  },
  {
    id: 6,
    title: "Remote Interview Etiquette for Developers",
    author: "Nathan Brooks",
    date: "23 September",
    image: img6,
  },
  {
    id: 7,
    title: "5 Resume Mistakes That Cost You the Job",
    author: "Isabelle Kim",
    date: "25 September",
    image: img7,
  },
  {
    id: 8,
    title: "Preparing for Behavioral Interview Questions",
    author: "Marco Rivera",
    date: "28 September",
    image: img8,
  },
];

function BlogBox() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className=" cursor-pointer pt-6">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-5 lg:gap-y-3 gap-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={`border  p-4  rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-[260ms]  { ${
              theme === "dark"
                ? " text-gray-300 border-gray-600 "
                : " text-gray-800 "
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl h-48 w-full object-cover "
            />
            <div
              className={`flex justify-between text-sm  py-3 ${
                theme === "dark" ? " text-gray-300" : " text-gray-600"
              } `}
            >
              <span>📍 {post.author}</span>
              <span>⏱️ {post.date}</span>
            </div>
            <h3
              className={`text-lg font-semibold  mb-4 ${
                theme === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              {post.title}
            </h3>
            <div className="flex justify-between items-center py-2">
              <button
                className={`px-4 py-2 rounded-lg border border-gray-300 text-black hover:bg-gray-100 transition text-sm font-medium 
                 ${theme === "dark" ? "bg-white" : ""} 
                  `}
              >
                Keep reading
              </button>
              <BsBookmark
                className={`text-xl  cursor-pointer ${
                  theme === "dark"
                    ? "text-gray-300 "
                    : "text-gray-700 hover:text-gray-700"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogBox;
