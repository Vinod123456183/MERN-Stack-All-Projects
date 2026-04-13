import { useContext } from "react";
import image1 from "../../assets/hero-slide-1.png";
import image2 from "../../assets/hero-slide-2.png";
import Header1 from "../../components/Header/Header1";
import { ThemeContext } from "../core/ThemeContext";
import BlogUserProfile from "./Blogs_Profile_Card/BlogUserProfile";
import Footer from "../../components/Header/Footer";

function Blog_Details() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header1 />
      <div
        className={`page-container flex flex-col  ${
          theme === "dark" ? "bg-black text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        <div>
          <div className="flex items-center justify-center  pt-4">
            <p className=" text-[11px] lg:text-sm font-bold text-gray-700 dark:text-gray-300">
              Home &gt;{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                <button
                  onClick={() => window.history.back()}
                  className="text-[11px] lg:text-sm rounded-md font-medium"
                >
                  Business
                </button>
              </span>{" "}
              &gt;{" "}
              <span className="  font-bold text-gray-600 dark:text-gray-400">
                How Digital Trends Reshape Marketing
              </span>
            </p>
          </div>

          {/* Title */}
          <div className="py-4">
            <p className="text-2xl lg:text-5xl text-center font-semibold dark:text-gray-200">
              How Digital Trends Reshape Marketing
            </p>
          </div>

          {/* Subtitle */}
          <div>
            <p className=" text-sm lg:text-md text-center pt-1 text-wrap dark:text-gray-400">
              Explore how evolving technologies like AI and short-form video are
              changing the landscape of online branding and consumer engagement
              in 2025.
            </p>
          </div>

          {/* Blog Image with Overlays */}
          <div className="relative flex items-center  justify-center py-5 pb-7">
            {/* Tags (left overlay) */}
            <div className="hidden lg:flex absolute top-12 left-7 gap-2 z-10">
              <span className="bg-black text-gray-100 px-4 py-1 rounded-full text-sm">
                Trends
              </span>
              <span className="bg-black text-gray-100 px-4 py-1 rounded-full text-sm">
                Management
              </span>
            </div>

            {/* Author info (right overlay) */}
            <div className="hidden lg:block absolute top-12 right-7 z-10 text-sm">
              <span className="bg-black text-gray-100 px-4 py-1 rounded-full">
                Sophia Brooks &nbsp; June 25, 2025
              </span>
            </div>

            <img className="rounded-xl" src={image1} alt="Blog main" />
          </div>
        </div>
        <div className="w-full  gap-4 flex flex-col lg:flex-row">
          <div className="lg:max-w-[72%] lg:min-w-[67%] space-y-4">
            <p className="dark:text-gray-300 text-sm lg:text-md text-wrap">
              In 2025, digital marketing has seen a major shift. AI-driven
              recommendations, immersive content formats, and
              hyper-personalization have changed how brands interact with
              consumers. Staying updated is no longer optional—it's critical.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ea
              <br /> mersive content formats, and hyper-personalization have
              <br /> mersive content formats, and hyper-personalization have
              nobis ut repudiandae non vel laudantium! Veniam molestias illum
              magnam nisi vitae, et voluptatem velit eos iure voluptas
              architecto nostrum! recommendations, im <br />
              <br /> mersive content formats, and hyper-personalization have
              longer optional—it's critical. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veniam ea nobis ut repudiandae non
              vel laudantium! Veniam molestias illum magnam nisi vitae, et
              <br /> mersive content formats, and hyper-personalization have
              <br /> mersive content formats, and hyper-personalization have
              changed how brands interact with consumers. Staying updated is no
              voluptatem velit eos iure voluptas architecto nostrum!
              recommendations, immersive content formats, and
              hyper-personalization have
              <br />
              <br /> changed how brands interact with consumers. Staying updated
              is no longer optional—it's critical. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veniam ea nobis ut repudiandae non
              vel laudantium! Venbr Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam ea nobis ut repudiandae non vel
              laudantium! Venbr
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ea
              nobis ut repudiandae non vel laudantium! Venbr
              <br />
              <br />
              iam molestias illum magnam nisi vitae, et voluptatem velit eos
              iure voluptas architecto nostrum! recommendations, immersive
              content formats, and hyper-personalization have changed how brands
              interact with consumers. Staying updated is no longer
              optional—it's critical. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam ea nobis ut repudiandae non vel
              laudantium! Veniam molestias illum magnam nisi vitae, et
              voluptatem velit eos iure voluptas architecto nostrum!
            </p>

            {/* Image with Caption */}
            <div>
              <img
                src={image2}
                alt="Customer Loyalty"
                className="pt-1 rounded-xl"
              />
              <p className="pt-4 text-sm lg:text-md dark:text-gray-300">
                {" "}
                How To Raise Customer Loyalty.{" "}
              </p>
            </div>
            <div className="py-3 text-sm lg:text-md">
              <p className="dark:text-white">
                How do I create meaningful connections?
              </p>
              <p className="py-2 dark:text-gray-300">
                Build trust with transparency. Respond to comments, messages,
                and feedback. Create polls, Q&A sessions, or host live sessions
                to involve your community.
              </p>
            </div>
          </div>

          {/* Right Column (Author Cards) */}
          <div className=" flex flex-col  space-y-6 w-full  lg:max-w-[28%] lg:min-w-[33%]  rounded-md">
            <BlogUserProfile
              bloguserImage=""
              bloguserName="Vinod Singh Barti"
              bloguserFancyName="Devil's"
              bloguserSomethingAboutUser="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe doloribus voluptates aperiam recusandae rerum animi architecto delectus soluta assumenda eius, fugiat blanditiis, deserunt explicabo sit optio unde voluptate magnam "
              bloguserCity="Haldwani"
              bloguserCountry="India"
              bloguserGithubLink="https://github.com/Vinod123456183"
              bloguserInstaLink="https://instagram.com/"
              bloguserWhatsappLink="https://wa.me/919456541392"
              bloguserTwitterLink="https://twitter.com/"
              bloguserPortfolioLink="https://yourportfolio.com"
            />
            <BlogUserProfile
              bloguserImage=""
              bloguserName="Vinod Singh Barti"
              bloguserFancyName="Devil's"
              bloguserSomethingAboutUser="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe doloribus voluptates aperiam recusandae rerum animi architecto delectus soluta assumenda eius, fugiat blanditiis, deserunt explicabo sit optio unde voluptate magnam "
              bloguserCity="Haldwani"
              bloguserCountry="India"
              bloguserGithubLink="https://github.com/Vinod123456183"
              bloguserInstaLink="https://instagram.com/"
              bloguserWhatsappLink="https://wa.me/919456541392"
              bloguserTwitterLink="https://twitter.com/"
              bloguserPortfolioLink="https://yourportfolio.com"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog_Details;
