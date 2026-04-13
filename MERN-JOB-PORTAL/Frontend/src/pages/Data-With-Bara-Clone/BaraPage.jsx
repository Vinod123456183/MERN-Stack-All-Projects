import React from "react";
import BaraHeader from "./Header/BaraHeader";
import BaraNavbar from "./Header/BaraNavbar";
import BaraFirstImgComponent from "./BaraMain/BaraFirstImgComponent";
import FilterSearchBara from "./Components/FilterSearchBara";
import BaraMainComponent from "./BaraMain/BaraMainComponent";
import BaraSubscribeBox from "./Components/BaraSubscribeBox";
import Recomendations from "./Components/Recomendations";
import BaraLinks from "./Components/BaraLinks";
import BaraFooter from "./Header/BaraFooter";
import Header1 from "../../components/Header/Header1";

function BaraPage() {
  return (
    <>
      <Header1 />
      {/* <BaraHeader /> */}
      <BaraNavbar />
      <div className=" bara-container">
        <BaraFirstImgComponent />

        <div className="border-t flex-col  lg:flex-row  flex justify-center gap- ">
          <div className=" lg:w-[67%] py-3  ">
            <FilterSearchBara />
            <div>
              <BaraMainComponent
                // id={"1"}
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
              />
              <BaraMainComponent
                heading={
                  "Mastering Python for Data Science: Beginner to Advanced"
                }
                topic={
                  "A complete roadmap to learning Python for real-world data science projects and applications."
                }
                date={"July 10"}
                author={"Aisha Rahman"}
                img={
                  "https://substackcdn.com/image/fetch/$s_!3mR2!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3f5752b8-fa71-48ea-a0d6-f67f0ccda195_1312x736.jpeg"
                }
                imgName={"Python Data Science"}
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
              />

              <BaraMainComponent
                heading={"The Rise of AI in Business Analytics"}
                topic={
                  "Explore how machine learning and AI are reshaping the future of decision-making in enterprises."
                }
                date={"August 2"}
                author={"Nina Patel"}
                img={
                  "https://substackcdn.com/image/fetch/$s_!JOhx!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb2a22614-3bc4-4325-862b-379fba1989cc_1600x900.jpeg"
                }
                imgName={"AI Analytics"}
              />

              <BaraMainComponent
                heading={
                  "Data Visualization Tools Compared: Tableau vs. Power BI"
                }
                topic={
                  "Which dashboard tool wins in speed, clarity, and flexibility? We break it down for you."
                }
                date={"July 18"}
                author={"Marco Silva"}
                img={
                  "https://substackcdn.com/image/fetch/$s_!OknN!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5867631b-bb68-44f0-a9de-877ad7c3b670_1472x832.jpeg"
                }
                imgName={"Visualization Tools"}
              />

              <BaraMainComponent
                heading={"How to Use Pandas Efficiently for Big Datasets"}
                topic={
                  "Learn practical techniques to optimize your Pandas workflow when working with millions of rows."
                }
                date={"May 30"}
                author={"Emily Novak"}
                img={
                  "https://substackcdn.com/image/fetch/$s_!oG8c!,w_320,h_213,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5d355cf4-3724-46b2-a59a-c5e208aa51df_821x629.jpeg"
                }
                imgName={"Pandas Optimization"}
              />
            </div>
            <div className=" pt-3">
              <button className="px-6 py-2 text-gray-900 rounded-md bg-gray-200">
                See All
              </button>
            </div>
          </div>

          <div className=" w-auto ">
            <BaraSubscribeBox />
            <Recomendations />
            <BaraLinks />
          </div>
        </div>
      </div>
      <BaraFooter />
    </>
  );
}

export default BaraPage;
