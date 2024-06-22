import { FaPhone } from "react-icons/fa6";
import "./styles/callme.css"
const CallMe = () => {
  return (
    <div className="callme">
      <a href="tel:8810300724">
        <FaPhone />
      </a>
    </div>
  );
};

export default CallMe;
