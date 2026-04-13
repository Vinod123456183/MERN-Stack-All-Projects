import React, { useContext } from "react";
import { ThemeContext } from "../../../pages/core/ThemeContext";

function BaraFooter() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <>
      <div
        className={`py-14 text-center mt-12 rounded-lg lg:mt-10 ${
          isDark ? "bg-blue-700 text-white" : "bg-sky-500 text-white"
        }`}
      >
        <p className="text-2xl font-bold mb-6">Ready for more?</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Type your email..."
            className={`px-2 py-2 lg:px-4 lg:py-3 lg:w-72 md:text-md text-xs rounded-l-md outline-none ${
              isDark
                ? "text-gray-200 bg-blue-4000  placeholder-gray-400 border border-sky-700"
                : "text-gray-700 bg-white placeholder-gray-500 border border-white"
            }`}
          />
          <button
            className={`border text-xs md:text-md px-4 lg:px-5 lg:py-3 rounded-r-md border-l ${
              isDark
                ? "border-white bg-gray-600 hover:bg-black"
                : "border-white bg-transparent hover:bg-sky-600"
            }`}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        className={`text-center text-sm py-14 ${
          isDark ? "  text-gray-400" : "bg-gray-100 text-gray-600"
        }`}
      >
        <footer>
          <div className="mb-3">
            © 2025 Baraa ·{" "}
            <a
              href="/privacy"
              className={`underline hover:text-${
                isDark ? "gray-200" : "gray-800"
              }`}
            >
              Privacy
            </a>{" "}
            ·{" "}
            <a
              href="/terms"
              className={`underline hover:text-${
                isDark ? "gray-200" : "gray-800"
              }`}
            >
              Terms
            </a>{" "}
            ·{" "}
            <a
              href="/collection-notice"
              className={`underline hover:text-${
                isDark ? "gray-200" : "gray-800"
              }`}
            >
              Collection notice
            </a>
          </div>
          <div className="mb-3 space-x-4">
            <button
              className={`rounded px-4 py-2 border ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              Start writing
            </button>
            <button
              className={`rounded px-4 py-2 border ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              Get the app
            </button>
          </div>
          <div>
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline hover:text-${
                isDark ? "gray-200" : "gray-800"
              }`}
            >
              Substack
            </a>{" "}
            is the home for great culture
          </div>
        </footer>
      </div>
    </>
  );
}

export default BaraFooter;
