import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../core/ThemeContext"; // Adjust path as needed

function BaraLinks() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-4 pt-6 lg:p-7">
      <p
        className={`text-md font-semibold mb-2 ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Links
      </p>
      <hr
        className={`mb-2 ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      />
      <ul
        className={`space-y-2 text-[14px] ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        <li>
          <Link
            to="/youtube"
            className={`hover:underline ${
              theme === "dark" ? "hover:text-gray-100" : "hover:text-gray-600"
            }`}
          >
            My YouTube
          </Link>
        </li>
        <li>
          <Link
            to="/github"
            className={`hover:underline ${
              theme === "dark" ? "hover:text-gray-100" : "hover:text-gray-600"
            }`}
          >
            My GitHub
          </Link>
        </li>
        <li>
          <Link
            to="/website"
            className={`hover:underline ${
              theme === "dark" ? "hover:text-gray-100" : "hover:text-gray-600"
            }`}
          >
            My Website
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BaraLinks;
