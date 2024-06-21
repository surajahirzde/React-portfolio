import PropTypes from "prop-types";
import "./styles/videoText.css";
import { TextChanger } from "../Helper/Constant.jsx";
import { useEffect, useRef } from "react";
const VideoText = ({ video, title, description }) => {
  const desRef = useRef(null);
  useEffect(() => {
    const animateText = () => {
      if (!desRef.current) return;
      new TextChanger(desRef.current.textContent, desRef.current).ChangeText();
    };
    window.addEventListener("load", animateText);
    return () => window.removeEventListener("load", animateText);
  }, [desRef]);
  return (
    <section className="videoText">
      <video controls={false} autoPlay muted loop>
        <source src={video} />
      </video>
      <div className="textContent">
        <h1>{title}</h1>
        <p ref={desRef}>{description}</p>
      </div>
    </section>
  );
};

export default VideoText;
VideoText.propTypes = {
  video: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
