// src/layouts/MainLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Core/Footer";
import Header from "../Components/Core/Header";
import Sidebar from "../Components/Core/Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onMenuClick = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={onMenuClick} />

      <div className="flex flex-1">
        {/* ✅ Pass the close function to Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onCloseSidebar={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 overflow-y-auto p-4 pt-20">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
