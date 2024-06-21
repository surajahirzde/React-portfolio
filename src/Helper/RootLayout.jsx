import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Utils/SideBar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <SideBar />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
