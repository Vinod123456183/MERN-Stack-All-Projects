import { Outlet } from "react-router-dom";
import Header from "./Components/Common/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
