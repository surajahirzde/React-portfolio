// import { useState } from "react";
import "./styles/home.css";
import heroVideo from "../assets/heroVideo.mp4";
import VideoText from "../Decorators/VideoText";
import OverLay, { CardContainer } from "../Utils/OverLay";
import bgImg from "../assets/coding.gif";
import reactImg from "../assets/react.png";
import nodejsImg from "../assets/node.webp";
import jsImg from "../assets/javascript.png";
import expressImg from "../assets/express-js.png";
import mongoDbImg from "../assets/mongodb.gif";
import cssImg from "../assets/css.png";
import cImg from "../assets/c-program.png";
import cppImg from "../assets/cpp.png";
import pythonImg from "../assets/python.webp";
import servicesImg from "../assets/services.gif";
import linkImg from "../assets/linkShorten.png";
import quizImg from "../assets/quizApp.png";
import imageDownload from "../assets/imageApi.png";
import browserImg from "../assets/customBrowser.png";
import questionImg from "../assets/questionBank.png";
import dashBoardImg from "../assets/dashboard.png";
import ipFinder from "../assets/ipFinder.png";
import travelImg from "../assets/travelProject.png";
import eCommerseImg from "../assets/shopZ.png";
import youtubeImg from "../assets/youtube.jpg";
import { useEffect, useState } from "react";
import Iframe from "../Utils/Iframe";
const Home = () => {
  useEffect(() => {
    const title=document.title
    document.title="Suraj Yadav || Mern-Stack developer"
    window.scrollTo(0,0)
    return ()=>{
      document.title = title
    }
  }, []);
  const technology = [
    {
      name: "React.Js",
      img: reactImg,
      path: "https://reactjs.org/",
    },
    {
      name: "Node.js",
      img: nodejsImg,
      path: "https://nodejs.org/en/",
    },
    {
      name: "JavaScript",
      img: jsImg,
      path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Express.Js",
      img: expressImg,
      path: "https://expressjs.com/",
    },
    {
      name: "MongoDB",
      img: mongoDbImg,
      path: "https://www.mongodb.com/",
    },
    {
      name: "CSS",
      img: cssImg,
      path: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "C",
      img: cImg,
      path: "https://www.w3schools.com/c/index.php",
    },
    {
      name: "C++",
      img: cppImg,
      path: "https://www.w3schools.com/cpp/",
    },
    {
      name: "Python",
      img: pythonImg,
      path: "https://www.python.org/",
    },
  ];
  const services = [
    {
      title: "Responsive Design",
      description:
        " I build responsive websites that are fast, easy to use, and look great on all devices.",
    },
    {
      title: "Open Source",
      description:
        "I'm always looking for new and exciting projects. If you have one, please let me know. ",
    },
    {
      title: "Scalable Web Application",
      description:
        "I build scalable web applications. I have experience with MERN Stack. ",
    },
    {
      title: "Full Stack Developer",
      description:
        "I am a Full Stack Developer. I used MERN Stack for develop full-stack application. ",
    },
    {
      title: "Minimum time development",
      description:
        "I build fast, scalable websites that look great on all devices in minimal time.",
    },
  ];
  const project = [
    {
      name: "Link shortener",
      path: "https://mediabook-link-shortner.netlify.app/",
      image: linkImg,
    },
    {
      name: "Quiz App",
      path: "https://quiz-by-surajahirzde.netlify.app/",
      image: quizImg,
    },
    {
      name: "Image Downloader",
      path: "https://image-finder-by-surajahirzde.netlify.app/",
      image: imageDownload,
    },
    {
      name: "Custom Browser",
      path: "https://chrome-custom-homepage.netlify.app/",
      image: browserImg,
    },
    {
      name: "Question Bank",
      path: "https://question-bank-by-surajahirzde.netlify.app/",
      image: questionImg,
    },
    {
      name: "Admin Dashboard",
      path: "https://admin-dashboard-by-surajahirzde.netlify.app/",
      image: dashBoardImg,
    },
    {
      name: "Ip Finder",
      path: "https://geo-location-tracker.netlify.app/",
      image: ipFinder,
    },
    {
      name: "Travel Page",
      path: "https://travel-triangle-web.netlify.app/",
      image: travelImg,
    },
    {
      name: "E-commerse Static",
      path: "https://shopz-zone.netlify.app/",
      image: eCommerseImg,
    },
    {
      name: "Youtube clone",
      path: "https://youtube-clone-by-surajahirzde.netlify.app",
      image: youtubeImg,
    },
  ];
  const [link, setLink] = useState(null);
  const LinkOpener = (link) => {
    setLink(link);
  };
  return (
    <main className="home">
      <VideoText
        video={heroVideo}
        title={"Suraj Yadav"}
        description={"Mern Developer"}
      />
      <OverLay image={bgImg} />
      <section className="technology">
        <h2>Technology</h2>
        <div className="slider">
          <div className="slideTrack">
            {technology.map((tech, index) => {
              return (
                <div key={index} className="slide">
                  <a href={tech.path} target="_blank">
                    <img src={tech.img} alt={tech.name} />
                  </a>
                </div>
              );
            })}
            {technology.map((tech, index) => {
              return (
                <div key={index} className="slide">
                  <a href={tech.path} target="_blank">
                    <img src={tech.img} alt={tech.name} loading="lazy" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="projects">
        <h2>Project</h2>
        <div className="project-area">
          {project.map((item, index) => {
            return (
              <div key={index} className="project">
                <div className="image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="textArea">
                  <h3>{item.name}</h3>
                  <button onClick={() => LinkOpener(item.path)}>
                    live demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {link && <Iframe link={link} func={setLink} />}
      </section>
      <section className="services">
        <h2>Services</h2>
        <div className="grid grid-col-2 gap-lg">
          <div className="imageContainer">
            <img src={servicesImg} alt="My Web Related Services" />
          </div>
          <CardContainer cardItem={services} />
        </div>
      </section>
    </main>
  );
};

export default Home;
