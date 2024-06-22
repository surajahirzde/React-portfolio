import { Link } from "react-router-dom";
import "./styles/footer.css";
const Footer = () => {
  const Services = [
    "frontend development",
    "single page application",
    "backend development (NodeJs,ExpressJs)",
    "SEO optimization",
    "Performance enhancment",
  ];
  return (
    <footer>
      <section className="grid grid-col-2 gap-lg">
        <Link
          to={"/"}
          className="logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          SY
        </Link>
        <div className="linkContainer">
          {Services.map((service) => {
            return (
              <Link
                to={`/contact?query=${service.replace(/\s+/g, "-")}`}
                key={service}
              >
                {service}
              </Link>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
