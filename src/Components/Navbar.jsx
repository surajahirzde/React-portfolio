import { NavLink } from "react-router-dom";
import { navLinks } from "../Helper/Constant.jsx";
import "./styles/navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [navActive, setNavActive] = useState(false); // for active classes in navbar
  const [isMobile, setIsMobile] = useState(false); // for mobile view and set active classes in menuLink and menuBtn
  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY > 0) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };
    window.addEventListener("scroll", navHandler);
    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);
  return (
    <nav className={navActive ? "active" : ""}>
      <div className="wrapper flex align-center justify-between">
        <div className="logo">
          <span>SY</span>
        </div>
        <div
          className={`menuLink flex align-center gap-lg ${
            isMobile && "active"
          }`}
        >
          {navLinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsMobile((pre) => !pre)}
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
        <div
          className={isMobile ? "menuBtn active" : "menuBtn"}
          onClick={() => setIsMobile((pre) => !pre)} // toggle isMobile state when menuBtn is clicked
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
