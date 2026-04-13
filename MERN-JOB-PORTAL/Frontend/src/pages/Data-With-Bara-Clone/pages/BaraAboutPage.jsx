import React, { useContext } from "react";
import BaraEmail from "../Components/BaraEmail";
import BaraNavbar from "../Header/BaraNavbar";
import ImgComponent from "../Components/ImgComponent";
import StayConnected from "../Components/Smallcomponents/StayConnected";
import BaraFooter from "../Header/BaraFooter";
import Header1 from "../../../components/Header/Header1";
import { ThemeContext } from "../../../pages/core/ThemeContext";

function BaraAboutPage() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <>
      <Header1 />
      <BaraNavbar />
      <div
        className={`bara-container2 ${
          isDark ? " text-gray-200" : "bg-white text-gray-700"
        }`}
      >
        {/* Section 1 */}
        <div
          className={`pt-14 py-12 border-b ${
            isDark ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <h1 className="text-[38px] font-bold mb-3">Why subscribe?</h1>

          <p className="text-[18px] pt-6">
            Subscribe to get full access to the newsletter and{" "}
            <span className="text-blue-400 font-semibold">website</span>.
            Including hand-sketched explanations and real lessons from real
            projects, delivered straight to your inbox.
          </p>

          <p className="text-2xl font-bold mt-6 mb-4">
            Support Independent Data Education
          </p>

          <div className="space-y-4">
            <p className="text-[18px]">
              <strong>Data with Baraa</strong> is an independent project where I
              share practical data tutorials, hand-drawn visuals, and real
              lessons from over <strong>15 years in data engineering</strong>.
            </p>

            <p className="text-[18px]">
              By subscribing, you’re directly supporting this work and helping
              me continue creating honest, useful, and high-quality content —
              and keeping it <span className="italic">free for everyone</span>.
            </p>
          </div>

          <div className="flex items-center justify-center w-full mt-6">
            <BaraEmail />
          </div>
        </div>

        {/* Section 2 */}
        <div className="pt-8 py-1">
          <h1 className="text-[36px] font-bold mb-3">About Me</h1>

          <div className="space-y-5">
            <p className="text-[18px]">
              Hey, I’m <strong>Baraa Khatib Salkini</strong> — or just{" "}
              <span className="italic">Data with Baraa.</span>
            </p>

            <p className="text-[18px]">
              I’m a data guy who loves teaching and making complex things feel
              simple.
            </p>

            <p className="text-[18px]">
              With a <strong>Master’s in Data Engineering</strong> and over{" "}
              <strong>15 years of experience</strong> (including at{" "}
              <strong>Mercedes-Benz</strong>), I’ve worked on all kinds of{" "}
              <strong>data and analytics projects</strong> in Germany.
            </p>

            <p className="text-[18px]">
              What I enjoy most is <strong>explaining</strong> how things work —
              using quick <strong>hand-drawn sketches</strong> and real stories
              from the projects I’ve built.
            </p>

            <p className="text-[18px]">
              If you’re learning data, switching careers, or just curious — I’m
              really glad you’re here. No fluff, no hype — just real, helpful
              stuff.
            </p>
          </div>
        </div>

        <ImgComponent />
        <StayConnected />
      </div>

      <BaraFooter />
    </>
  );
}

export default BaraAboutPage;
