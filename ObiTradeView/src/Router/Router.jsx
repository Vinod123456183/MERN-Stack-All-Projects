// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Details from "../details/Details.jsx";
import IndianMain from "../details/IndianMain.jsx";
import IndianHomePage from "../../indian/Indian-home-page/IndianHomePage.jsx";
import FetchAllCoins from "../details/detailMiniComponents/FetchAllCoins.jsx";
import ALLErrorPage from "../Components/Core/ALLErrorPage.jsx";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: "true", element: <FetchAllCoins /> },
        { path: "indian-market", element: <IndianHomePage /> },
        { path: "media-dashboard", element: <Home /> },
        { path: "indian-market", element: <IndianMain /> },
        { path: "/coin/:id", element: <Details /> },
        { path: "*", element: <ALLErrorPage /> },
        // { path: "/display-all-coins", element: <FetchAllCoins /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default Router;
