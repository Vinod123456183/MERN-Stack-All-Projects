import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Work from "./Pages/Work.jsx";
import MoreAboutMe from "./Pages/MoreAboutMe.jsx";
import Offering from "./Pages/Offering.jsx";
import Blog from "./Pages/Blog.jsx";
import AllProfiles from "./Pages/AllProfiles.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
      <Route path="/aboutme" element={<MoreAboutMe />} />
      <Route path="/offering" element={<Offering />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/allprofiles" element={<AllProfiles />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
