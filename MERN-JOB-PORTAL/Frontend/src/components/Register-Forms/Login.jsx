import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-indigo-700 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">fishbowl</h1>
        <p className="text-lg text-center max-w-md">
          Transparent conversations that move careers forward
        </p>
        <div className="mt-10 flex gap-4">
          <img src="/appstore.svg" alt="App Store" />
          <img src="/googleplay.svg" alt="Google Play" />
        </div>
        <p className="text-xs mt-6 text-center opacity-70">
          © Glassdoor LLC “Fishbowl” and logo are registered trademarks of
          Glassdoor LLC
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white  flex justify-center items-center relative">
        <div className="absolute top-6 right-6">
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 bg-indigo-600 text-white  rounded-full shadow-md"
          >
            Create An Account
          </button>
        </div>
        <div className="bg-white rounded-xl p-10 dark:text-black shadow-lg w-[80%] max-w-md text-center">
          <p className="text-2xl font-bold mb-6">Sign In / Login</p>
          <p className="text-sm mb-6">
            By continuing you agree to our{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Terms of Use
            </span>{" "}
            and{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigate("login-recruiter")}
              className="w-full py-3 bg-indigo-600 text-white  rounded-lg font-semibold shadow-md hover:bg-indigo-700"
            >
              I’m an Existing Recruiter
            </button>
            <button
              onClick={() => navigate("login-student")}
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600"
            >
              I’m an Existing Student
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200"
            >
              I’m An New New Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
