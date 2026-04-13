import React from "react";
import { Link } from "react-router-dom";

function BaraCoursesComponent({
  coursename,
  courselink,
  downloads,
  github,
  theme = "light",
}) {
  // Helper to pick classes based on theme
  const c = (light, dark) => (theme === "dark" ? dark : light);

  return (
    <div className={c("text-gray-800 text-lg", "text-gray-300 text-lg")}>
      <ul className="list-disc pl-5 ">
        <li>
          {coursename} :{" "}
          <Link
            to={`/${courselink}`}
            className={c("text-blue-400", "text-blue-600")}
          >
            Course Link
          </Link>{" "}
          |{" "}
          <Link
            to={`/${downloads}`}
            className={c("text-blue-400", "text-blue-600")}
          >
            Downloads
          </Link>{" "}
          |{" "}
          <Link
            to={`/${github}`}
            className={c("text-blue-400", "text-blue-600")}
          >
            Git
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BaraCoursesComponent;
