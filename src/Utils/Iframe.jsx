import PropTypes from "prop-types";
import "./styles/iframe.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
const Iframe = ({ link, func }) => {
  const [isShow, setIsShow] = useState(false);
  const showBtn = () => {
    setIsShow(true);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.querySelector("iframe").addEventListener("load", showBtn);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <section className="iFramePopUp">
      <iframe src={link} />
      {isShow ? (
        <button onClick={() => func(null)}>Close Website</button>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Iframe;
Iframe.propTypes = {
  link: PropTypes.string,
  func: PropTypes.func,
};
