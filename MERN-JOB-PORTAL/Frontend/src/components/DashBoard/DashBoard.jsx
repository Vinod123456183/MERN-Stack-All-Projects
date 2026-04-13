import React, { useContext } from "react";
import FilterSideLeft from "../../main/LeftFilter";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import RightJobs from "../../main/RightJobs";
import LeftFilter from "../../main/LeftFilter";
import Footer from "../Header/Footer";
import { ThemeContext } from "../../pages/core/ThemeContext";

function DashBoard() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div>
        <Header1 />
        <Header2 />
        <div
          className={` flex flex-col lg:flex-row  w-full lg:space-x-4 pt-3 page-container`}
        >
          <LeftFilter />
          <RightJobs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DashBoard;
