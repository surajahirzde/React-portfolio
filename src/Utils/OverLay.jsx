import PropTypes from "prop-types";
import "./styles/overlay.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const OverLay = ({ image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="FixedImage"
    ></div>
  );
};

export default OverLay;
OverLay.propTypes = {
  image: PropTypes.string.isRequired,
};

export const CardContainer = ({ cardItem }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="CardContainer">
      <div
        className="scrollTrack"
        style={
          isVisible
            ? { animationPlayState: "paused" }
            : { animationPlayState: "running" }
        }
      >
        {cardItem?.map((card, index) => {
          return (
            <div
              className="card"
              key={index}
              onMouseOver={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <Link to={"/contact"}>Get Enquire</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  cardItem: PropTypes.array.isRequired,
};
