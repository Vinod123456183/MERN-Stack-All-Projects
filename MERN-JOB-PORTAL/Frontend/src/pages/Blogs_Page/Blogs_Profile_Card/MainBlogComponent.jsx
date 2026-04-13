import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../core/ThemeContext";

function MainBlogComponent({ blog }) {
  const { id, tags, author, date, title, description, image } = blog;
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={`/user/read/blogs/${id}`} className="w-full">
      <div
        key={id}
        className="flex w-full flex-col lg:flex-row 2xl:max-w-[89%] cursor-pointer  rounded-lg hover:scale-[1.04] transition-transform duration-300"
      >
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className=" lg:h-[16rem] lg:w-[29rem] rounded-xl object-cover"
          />
        </div>
        <div className=" pt-4  lg:pt-6 w-full lg:pl-6">
          <div
            className={`text-xs  flex w-full gap-3 pb-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {[...new Set(tags)].map((tag, index) => (
              <p
                key={index}
                className=" font-semibold border-[1.4px] border-gray-300 rounded-2xl p-1 px-4"
              >
                {tag}
              </p>
            ))}
          </div>

          <div>
            <p
              className={`text-xs lg:pt-4 pt-3 pb-2 text-wrap ${
                theme === "dark" ? "text-gray-200 " : "text-gray-700 "
              }`}
            >
              {author} On {date}
            </p>
            <p
              className={`xl:text-lg font-semibold pt-1 pb-3 text-wrap ${
                theme === "dark" ? "text-gray-200 " : "text-gray-700 "
              }`}
            >
              {title}
            </p>
            <p
              className={`text-wrap text-xs font-semibold  pb-4 ${
                theme === "dark" ? "text-gray-500 " : "text-gray-700 "
              }`}
            >
              {description}
            </p>
          </div>
          <button
            className={`px-5 text-sm rounded-lg border p-2 ${
              theme === "dark"
                ? "border-gray-300 bg-[#ededed] text-black"
                : "border-gray-300  "
            }`}
          >
            Discover More
          </button>
        </div>
      </div>
    </Link>
  );
}

export default MainBlogComponent;
