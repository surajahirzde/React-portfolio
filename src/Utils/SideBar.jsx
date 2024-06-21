import "./styles/sideBar.css";
import { sideBarLinks } from "../Helper/Constant.jsx";
const SideBar = () => {
  return (
    <aside className="sideBar">
      <div className="sideBarLinks flex align-center justify-center gap-lg flex-column">
        {sideBarLinks.map((link, index) => {
          return (
            <a href={link.path} key={index} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
