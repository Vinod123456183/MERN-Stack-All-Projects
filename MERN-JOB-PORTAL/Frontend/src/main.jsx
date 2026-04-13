import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/HomePage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Details from "./main/Details.jsx";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import StudentProfileCard from "./components/Student_Profile/StudentProfileCard.jsx";
import BrowseJobs from "./main/BrowseJobs.jsx";
import AdminJobs from "./components/Admin-Recuriter-Pages/AdminJobs.jsx";
import AdminCompanies from "./components/Admin-Recuriter-Pages/AdminCompanies.jsx";
import Blog from "./pages/Blogs_Page/Blog.jsx";
import Blog_Details from "./pages/Blogs_Page/Blog_Details.jsx";
import BaraPage from "./pages/Data-With-Bara-Clone/BaraPage.jsx";
import BaraAboutPage from "./pages/Data-With-Bara-Clone/pages/BaraAboutPage.jsx";
import BaraArchivePage from "./pages/Data-With-Bara-Clone/pages/BaraArchivePage.jsx";
import BaraCoursePage from "./pages/Data-With-Bara-Clone/pages/BaraCoursePage.jsx";
import BaraDetailPage from "./pages/Data-With-Bara-Clone/pages/BaraDetailPage.jsx";
import AboutUsPage from "./main/AboutUsPage.jsx";
import ContactUSPage from "./main/ContactUSPage.jsx";
import Register from "./components/Register-Forms/Register.jsx";
import RegisterRecruiter from "./components/Register-Forms/RegisterRecruiter.jsx";
import RegisterStudent from "./components/Register-Forms/RegisterStudent.jsx";
import Login from "./components/Register-Forms/Login.jsx";
import LoginStudent from "./components/Register-Forms/LoginStudent.jsx";
import LoginRecruiter from "./components/Register-Forms/LoginRecruiter.jsx";
import DashBoardContext from "./context/DashBoardContext.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} /> */}

      <Route path="/dc" element={<DashBoardContext />} />
      <Route path="/user/profile-card" element={<StudentProfileCard />} />

      <Route path="/user/about-us" element={<AboutUsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/login/login-student" element={<LoginStudent />} />

      <Route
        path="/register/register-new-student"
        element={<RegisterStudent />}
      />
      <Route
        path="/register/register-new-recruiter"
        element={<RegisterRecruiter />}
      />

      <Route path="/all-jobs/dashboard" element={<DashBoard />} />
      <Route path="/all-jobs/browse-jobs" element={<BrowseJobs />} />
      <Route path="/all-jobs/details/:jobDetailId" element={<Details />} />

      <Route path="/admin-controller/jobs" element={<AdminJobs />} />
      <Route path="/admin-controller/companies" element={<AdminCompanies />} />

      {/* Blogs */}
      <Route path="/user/read/blogs" element={<Blog />} />

      <Route path="/user/read/blogs/:blogId" element={<Blog_Details />} />

      {/* Bara Resources */}
      <Route path="/resources/bara" element={<BaraPage />} />
      <Route path="/resources/bara/:resourceId" element={<BaraDetailPage />} />
      <Route path="/resources/bara/about" element={<BaraAboutPage />} />
      <Route path="/resources/bara/archive" element={<BaraArchivePage />} />
      <Route path="/resources/bara/courses" element={<BaraCoursePage />} />

      <Route path="/contact" element={<ContactUSPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
