import React, { useContext } from "react";
import { ThemeContext } from "../../../pages/core/ThemeContext";

function ImgHeroSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="pt-10   ">
      <section className="  flex flex-col-reverse md:flex-row items-center justify-between  py-12  relative overflow-hidden  ">
        <div
          className={`md:w-1/2 z-10     { ${
            theme === "dark" ? " text-gray-300" : " text-gray-800"
          }`}
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold  leading-tight mb-6">
            The <span className="text-purple-600">#1 Job Board</span> for
            <br />
            Graphic Design Jobs
          </h1>
          <p className=" mb-8 text-sm lg:text-lg">
            Search and connect with the right candidates faster. This talent
            search gives you the opportunity to find candidates who may be a
            perfect fit for your role.
          </p>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className="bg-purple-y hover:bg-purple-700 text-white font-medium py-3 lg:py-3 px-3 lg:px-5 rounded-lg shadow-lg transition text-xs lg:text-sm">
              Post a job now
            </button>
            <a
              href="#"
              className=" font-medium hover:underline text-xs lg:text-sm"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 relative z-10 hidden md:block">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Team working"
            className="rounded-3xl shadow-lg w-full max-w-sm lg:max-w-xl"
          />

          {/* Floating Freelancer Card */}
          <div className="absolute -bottom-7 -left-2 lg:-bottom-6 lg:-left-6  bg-white shadow-lg rounded-2xl p-4 w-52 lg:w-72">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Top Freelancers
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Kate Adie",
                  title: "UI/UX Designer",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "John Lennon",
                  title: "Senior Art Director",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Nadine Coyle",
                  title: "Photographer",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
              ].map((user, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 -z-0 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 -z-0 transform translate-x-1/3 translate-y-1/3" />
      </section>
    </div>
  );
}

export default ImgHeroSection;
