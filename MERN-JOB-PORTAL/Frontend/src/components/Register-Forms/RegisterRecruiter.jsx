import { FaLinkedin, FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterRecruiter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    userName: "",
    userPhone: "",
    userEmail: "",
    userCompany: "",
    userExperience: "",
    userFullAddress: "",
    userState: "",
    userCountry: "",
    userProfileCard: "",
    userGithub: "",
    userResumeDrive: "",
    userLinkedin: "",
    userLeetcode: "",
  });
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Registration submitted! (No API integration)");
    console.log("Form Data:", formData);
    console.log("Password:", password);
    console.log("Profile Photo:", profilePhoto);
  };

  const inputs = [
    { label: "Full Name", name: "fullname" },
    { label: "Phone Number", name: "phoneNumber" },
    { label: "Email", name: "email", type: "email" },
    { label: "PAN Card Number", name: "pancard" },
    { label: "Aadhar Card Number", name: "adharcard" },
    { label: "Company Name", name: "companyName" },
    { label: "Company Registration No", name: "companyRegistrationNo" },
    { label: "Experience (in Years)", name: "experienceInYears" },
    { label: "Full Address", name: "fullAddress" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
  ];

  return (
    <div className="py-10 flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 "
      >
        <p className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Student Registration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputs.map(({ label, name, type = "text" }) => (
            <div key={name} className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                {label}
              </label>
              <input
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
          ))}

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Profile Photo */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
          </div>
        </div>

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
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition mt-7"
        >
          Register
        </button>

        <p className="w-full py-3 text-center dark:text-black">or</p>
        <Link
          to={"/register/register-new-student"}
          className="w-full text-blue-800 font-semibold text-center"
        >
          <p>Register As Student</p>
        </Link>
      </form>
    </div>
  );
};

export default RegisterRecruiter;
