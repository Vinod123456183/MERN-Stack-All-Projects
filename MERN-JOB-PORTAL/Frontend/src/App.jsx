import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./pages/core/ThemeContext";
import { Outlet } from "react-router-dom";
import "./App.css";
function AppWrapper() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="  min-h-screen bg-[#fcfcfc] dark:bg-[#0c0c0c] text-gray-900 dark:text-gray-100 transition-colors slowwww">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}

export default App;
