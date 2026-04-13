import React, { useContext } from "react";
import BaraHeader from "../Header/BaraHeader";
import BaraNavbar from "../Header/BaraNavbar";
import image from "../../../assets/AI.png";
import { Link } from "react-router-dom";
import BaraCoursesComponent from "../Components/Smallcomponents/BaraCoursesComponent";
import StayConnected from "../Components/Smallcomponents/StayConnected";
import BaraFooter from "../Header/BaraFooter";
import BaraIntro from "../Components/Smallcomponents/BaraIntro";
import BaraMainComponent from "../BaraMain/BaraMainComponent";
import FilterSearchBara from "../Components/FilterSearchBara";
import BaraComment from "../Components/Smallcomponents/BaraComment";
import Header1 from "../../../components/Header/Header1";
import { ThemeContext } from "../../../pages/core/ThemeContext"; // Adjust import as per your setup

function BaraCoursePage() {
  const { theme } = useContext(ThemeContext);

  // Utility function to handle conditional classes for light/dark
  const c = (light, dark) => (theme === "dark" ? dark : light);

  return (
    <>
      <Header1 />
      {/* <BaraHeader /> */}
      <div className={`bara-container2 ${c("", "")}`}>
        <BaraNavbar />
        <div
          className={`py-6 border-b ${c(
            "text-gray-700 border-gray-200",
            "text-gray-300 border-gray-700"
          )}`}
        >
          <h1 className={`text-3xl font-bold mb-3 ${c("", "text-gray-100")}`}>
            Why subscribe?
          </h1>
          <p className={`text-lg ${c("text-gray-400", "text-gray-400")}`}>
            Free Courses & Certificates - Data with Baraa
          </p>
          <div
            className={`flex gap-2 text-sm pt-3 items-center ${c(
              "",
              "text-gray-300"
            )}`}
          >
            <div>
              <img src={image} alt="" className="h-8 w-8 rounded-full" />
            </div>
            <div>
              <Link to="">
                <p
                  className={`font-semibold ${c(
                    "text-gray-700",
                    "text-gray-100"
                  )}`}
                >
                  Vinod Singh Bart
                </p>
              </Link>
              <p className="font-semibold text-gray-400">Mar 26 2026</p>
            </div>
          </div>
        </div>

        <div
          className={`border-b pb-7 ${c(
            "text-gray-700 border-gray-200",
            "text-gray-300 border-gray-700"
          )}`}
        >
          <p className="pt-4 ">
            All of my courses and materials are completely free! The only thing
            I ask in return is your support through subscribing, liking, and
            commenting on my channel. Your engagement means the world to me, and
            it helps the channel grow. 😊
          </p>

          <p className="pt-3">
            Here’s a list of all my available courses with their materials:
          </p>
        </div>

        <div
          className={`pt-3 border-b py-7 ${c(
            "border-gray-700",
            "border-gray-600"
          )}`}
        >
          <h1
            className={`text-3xl font-bold mb-6 ${c(
              "text-gray-800",
              "text-gray-100"
            )}`}
          >
            Free Course & Certificates
          </h1>

          <p
            className={`text-2xl font-bold mb-3 ${c(
              "text-gray-800",
              "text-gray-100"
            )}`}
          >
            Python
          </p>
          <div className="space-y-2">
            <BaraCoursesComponent
              coursename={"SQL"}
              courselink="python-course"
              downloads="python-downloads"
              github="python-github"
              theme={theme}
            />
          </div>

          <div className="pt-5 space-y-2">
            <p
              className={`text-2xl font-bold mb-3 ${c(
                "text-gray-800",
                "text-gray-100"
              )}`}
            >
              SQL
            </p>
            {[...Array(5)].map((_, i) => (
              <BaraCoursesComponent
                key={i}
                coursename={"SQL"}
                courselink="python-course"
                downloads="python-downloads"
                github="python-github"
                theme={theme}
              />
            ))}
          </div>

          <div className="pt-5 space-y-2">
            <p
              className={`text-2xl font-bold mb-3 ${c(
                "text-gray-800",
                "text-gray-100"
              )}`}
            >
              Tabelu
            </p>
            {[...Array(3)].map((_, i) => (
              <BaraCoursesComponent
                key={i}
                coursename={"SQL"}
                courselink="python-course"
                downloads="python-downloads"
                github="python-github"
                theme={theme}
              />
            ))}
          </div>

          <div className="pt-4 space-y-2">
            <p
              className={`text-2xl font-bold mb-3 ${c(
                "text-gray-800",
                "text-gray-100"
              )}`}
            >
              ChatGPT
            </p>
            <BaraCoursesComponent
              coursename={"SQL"}
              courselink="python-course"
              downloads="python-downloads"
              github="python-github"
              theme={theme}
            />
          </div>
        </div>

        <div
          className={`pt-3 border-b py-7 text-lg ${c(
            "border-gray-400 text-gray-700",
            "border-gray-600 text-gray-300"
          )}`}
        >
          <h1
            className={`text-3xl font-bold py-3 ${c(
              "text-gray-800",
              "text-gray-100"
            )}`}
          >
            Udemy Certifications
          </h1>
          <p className="text-[17px] pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit
            magnam unde quod.(Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. )
          </p>
          <div className="space-y-2">
            <li>
              Python :{" "}
              <Link to={""} className="text-blue-500">
                Course Link
              </Link>{" "}
            </li>
            <li>
              SQL :{" "}
              <Link to={""} className="text-blue-500">
                Course Link
              </Link>{" "}
            </li>
          </div>
        </div>

        <StayConnected theme={theme} />
        <BaraIntro theme={theme} />
        <BaraComment theme={theme} />
        <FilterSearchBara theme={theme} />

        <BaraMainComponent
          heading={"Pandas vs. PySpark: Which One Should You Use?"}
          topic={
            "A straight-up, practical take on Pandas vs PySpark for analysts, scientists, and engineers."
          }
          date={"July 29"}
          author={"Baraa Khatib Salkini"}
          img={
            "https://substackcdn.com/image/fetch/$s_!vP7S!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0e443a0-b83d-40cb-8b64-3c51247175b8_1536x1024.png"
          }
          imgName={"Python Img"}
          theme={theme}
        />
        <BaraMainComponent
          heading={"Mastering Python for Data Science: Beginner to Advanced"}
          topic={
            "A complete roadmap to learning Python for real-world data science projects and applications."
          }
          date={"July 10"}
          author={"Aisha Rahman"}
          img={
            "https://substackcdn.com/image/fetch/$s_!3mR2!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3f5752b8-fa71-48ea-a0d6-f67f0ccda195_1312x736.jpeg"
          }
          imgName={"Python Data Science"}
          theme={theme}
        />

        <BaraMainComponent
          heading={"Why Every Analyst Should Learn SQL"}
          topic={
            "SQL isn't just for backend devs. Here's why it's your best friend in data analytics."
          }
          date={"June 21"}
          author={"Liam Chen"}
          img={
            "https://substackcdn.com/image/youtube/w_728,c_limit/ITGF5L20zJE"
          }
          imgName={"SQL Basics"}
          theme={theme}
        />

        <div className="pt-5">
          <button
            className={`px-6 py-2 rounded-md ${c(
              "text-gray-900 bg-gray-200",
              "text-gray-900 bg-gray-300"
            )}`}
          >
            See All
          </button>
        </div>
      </div>
      <BaraFooter theme={theme} />
    </>
  );
}

export default BaraCoursePage;
