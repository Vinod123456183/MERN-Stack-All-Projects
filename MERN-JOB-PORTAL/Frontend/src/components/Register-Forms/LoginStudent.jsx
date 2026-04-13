import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginStudent } from "../../../../Backend/apis/Api"; // adjust path

const LoginStudent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Student",
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginStudent,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries(["dashboardJobs"]);
      navigate("/");
    },
    onError: (err) => {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    },
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="py-10 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/90 shadow-xl rounded-2xl p-8 backdrop-blur-md border border-white/30"
      >
        <p className="text-2xl font-bold text-center text-purple-700 mb-6 dark:text-black">
          Student Login
        </p>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/60 placeholder-gray-500 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white/60 placeholder-gray-500 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        {/* Role (fixed student) */}
        <div className="flex flex-col mb-6">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Role
          </label>
          <input
            type="text"
            name="role"
            value={formData.role}
            readOnly
            className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Socials */}
        <div className="flex space-x-8 justify-center mt-10">
          <a
            href="#"
            className="text-red-500 hover:text-red-700 text-2xl transition"
          >
            <FaGoogle />
          </a>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-2xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-black text-2xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 text-2xl transition"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="w-full py-3 mt-6 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {mutation.isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="dark:text-black py-4 text-center">Or</p>

        <Link
          to={"/login/login-recruiter"}
          className="w-full text-blue-800 font-semibold text-center"
        >
          <p>Login As Recruiter</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginStudent;
