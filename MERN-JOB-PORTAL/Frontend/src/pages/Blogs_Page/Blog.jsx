import React, { useContext } from "react";
import ImageChange from "./Blogs_Small_Components/ImageChange";
import MainBlogComponent from "./Blogs_Profile_Card/MainBlogComponent";
import BlogUserProfile from "./Blogs_Profile_Card/BlogUserProfile";
import TechonoligiesCard from "./Blogs_Profile_Card/TechonoligiesCard";
// import NewsCreatingCard from "./Blogs_Profile_Card/NewsCreatingCard";
import WorkExperienceCard from "./Blogs_Profile_Card/WorkExperienceCard";

import img1 from "../../assets/hero-slide-1.png";
import img2 from "../../assets/hero-slide-2.png";
import img3 from "../../assets/hero-slide-3.png";

import img from "../../assets/about.png";

import Header1 from "../../components/Header/Header1";
import Footer from "../../components/Header/Footer";
import { ThemeContext } from "../core/ThemeContext";

function Blog() {
  const blogData = [
    {
      id: 1,
      tags: ["Business", "News"],
      author: "Ethan Caldwell",
      date: "June 25, 2025",
      title: "5 Ways AI Is Shaping the Modern Workplace",
      description:
        "Lorem ipsum dolor s mollitia voluptatem quomollitia  reiciendis quis cum exercitationem amet, et explicabo commodi.",
      image: img1,
    },
    {
      id: 2,
      tags: ["Tech", "Startups"],
      author: "Lara Simmons",
      date: "July 10, 2025",
      title: "Startups Leveraging Cloud for Fast Growthing",
      description:
        " ratione nobis nesciunt mollitia voluptatem quolaudantium hic maiores fugiat dolor.",
      image: img2,
    },
    {
      id: 3,
      tags: ["Remote", "Productivity", "Remote"],
      author: "Mark Lee",
      date: "August 2, 2025",
      title: "Remote Work: Productivity Hacks That Actually Work",
      description:
        " perspiciatis officia, sint assumenda quia debitis maiores temporibus.",
      image: img3,
    },
    {
      id: 4,
      tags: ["Remote", "Productivity", "Remote"],
      author: "Mark Lee",
      date: "August 2, 2025",
      title: "Remote Work: Productivity Hacks That Actually Work",
      description:
        " perspiciatis officia, sint assumenda quia debitis maiores temporibus.",
      image: img3,
    },
  ];

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header1 />
      <div className="page-container">
        <div className="pt-7">
          <ImageChange />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 ">
          <div className="flex flex-col  lg:gap-5  border-gray-500  w-full gap-y-10 lg:gap-y-6 lg:max-w-[75%]">
            {blogData.map((blog) => (
              <MainBlogComponent key={blog.id} blog={blog} />
            ))}
          </div>

          <div className="space-y-6 lg:max-w-[28%] lg:min-w-[33%]">
            <BlogUserProfile
              bloguserImage={img}
              bloguserName="Vinod Singh Barti"
              bloguserFancyName="Devil's"
              bloguserSomethingAboutUser="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe doloribus voluptates aperiam recusandae rerum animi architecto delectus soluta assumenda eius, fugiat blanditiis, deserunt explicabo sit optio unde voluptate magnam "
              bloguserCity="Haldwani"
              bloguserCountry="India"
              bloguserGithubLink="https://github.com/Vinod123456183"
              bloguserInstaLink="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
              bloguserWhatsappLink="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
              bloguserTwitterLink="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
              bloguserPortfolioLink="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
            />

            <p
              className={`${
                theme === "dark" ? "text-gray-500 text-xl py-2" : ""
              }`}
            >
              Featured Posts
            </p>
            <TechonoligiesCard />
            <TechonoligiesCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
