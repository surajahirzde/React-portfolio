import myPhotoImg from "../assets/my-photo.jpg";
import "./styles/about.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    const title=document.title
    document.title="About me || Mern-Stack developer"
    window.scrollTo(0,0)
    return ()=>{
      document.title = title
    }
  }, []);
  return (
    <main className="about">
      <section className="heroSection grid grid-col-2 gap-lg">
        <div
          className="imageContainer"
          style={{ backgroundImage: `url(${myPhotoImg})` }}
        ></div>
        <div className="textContainer flex flex-column gap-md">
          <h1>
            <span style={{ color: "var(--color-secondary)" }}>Welcome</span> to
            My Story [ Suraj Yadav ]
          </h1>
          <p>
            My name is Suraj Yadav, and I have completed Bachelors in Computer
            Applications (BCA) from YMCA University in 2023. I previously worked
            at Dreamer Infotech, where I gained three months of work experience
            and received an experience letter. I have a solid foundation in
            frontend development, with proficiency in HTML, CSS, JavaScript,
            jQuery, and Bootstrap. Additionally, I have completed a MERN-stack
            development course from Cuvette Tech and also I have good knowledge
            in PHP, MySQL, API, and Python. Over a period of three months, I
            collaborated with two other web developers to build a project using
            React, jQuery, and Bootstrap.{" "}
            <strong>
              I&apos;m currently working in{" "}
              <a
                href="https://dev-vineet.online"
                style={{ color: "var(--color-secondary)" }}
              >
                Prince web tech solutions (Services Based startup)
              </a>{" "}
              as a ReactJs developer.
            </strong>
          </p>
          <p>
            &quot;Experienced ReactJS Developer with 1 years in building
            responsive, high-performance web applications. Proficient in
            JavaScript, ES6+, and modern frontend technologies. Skilled in
            RESTful API integration, performance optimization, and responsive UI
            design. Strong team collaborator, committed to continuous learning
            and innovation. Seeking a challenging role to leverage my skills and
            contribute to a dynamic development&quot;
          </p>
          <a
            href="/Suraj-yadav.pdf"
            className="resumeBtn"
            download="mern-developer-resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </section>
      <section id="timeline-container">
        <div className="inner-container">
          <h2 className="heading">My Journey</h2>
          <ul className="timeline">
            <li className="timeline-item" data-date="20 May 2020">
              Passout Secondary School (12<sup>th</sup>)
            </li>
            <li className="timeline-item" data-date="07 June 2021">
              Certification In C/C++ Programming
            </li>
            <li className="timeline-item" data-date="31 Aug 2022">
              Certification In Python Programming
            </li>
            <li className="timeline-item" data-date="05 Aug 2022">
              Frontend Development
            </li>
            <li className="timeline-item" data-date="15 Jan 2023">
              Certification in Cloud Computing (NPTEL)
            </li>
            <li className="timeline-item" data-date="02 Feb 2023">
              Mern-stack development
            </li>
            <li className="timeline-item" data-date="20 Sep 2023">
              Completed BCA
            </li>
            <li className="timeline-item" data-date="04  Aug 2023">
              ReactJs Developer
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
