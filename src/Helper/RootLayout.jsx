import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Utils/SideBar";
import WhatsApp from "../Utils/WhatsApp";
import CallMe from "../Utils/CallMe";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <SideBar />
      <CallMe />
      <WhatsApp />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
