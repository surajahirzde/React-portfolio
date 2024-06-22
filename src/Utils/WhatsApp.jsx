import { IoLogoWhatsapp } from "react-icons/io";
import "./styles/whatsapp.css";
const WhatsApp = () => {
  return (
    <div
      className="whatsapp"
      onClick={() => {
        navigator.vibrate(100);
      }}
    >
      <a href="https://wa.me/918810300724">
        <IoLogoWhatsapp color="#25d366" />
      </a>
    </div>
  );
};

export default WhatsApp;
