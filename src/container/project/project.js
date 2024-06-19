import { GithubOutlined } from "@ant-design/icons";
import "./project.css";
import weather from "./weather-app.png";
import ecommerce from "./e-commerce-app.png";


function Project() {
  return (
    <div className="projects\
    -container">
      <section className="project-head">
        <h1>Projects</h1>
        <p>What I have done</p>{" "}
      </section>
      <div className="project-container">
        <section className="weather-app">
          <img src={weather} alt="Weather App" className="weather-image" />
          <p className="weather-description">
            A real-time weather website built with React, displaying current
            conditions from external APIs with a responsive design.
          </p>
          <ul className="language-description">
          <li className="react">#react</li>
            <li className="html">#html</li>
            <li className="javascript">#javascript</li>
            <li className="css">#css</li>
            <li className="api">#api</li>
          </ul>
          <div className="project-links">
            <a href={"https://weather-saran.netlify.app/"}>
              <button>Visit</button>
            </a>
            <GithubOutlined />
          </div>
        </section>
        <section className="ecommerce-app">
          <img src={ecommerce} alt="Weather App" className="weather-image" />
          <p className="weather-description">
          <p>User-friendly e-commerce platform, built with React and styled with Ant Design for a seamless shopping experience.</p>
          </p>
          <ul className="language-description">
            <li className="react">#react</li>
            <li className="html">#html</li>
            <li className="javascript">#javascript</li>
            <li className="css">#css</li>
            <li className="api">#api</li>
            <li className="ant-design">#ant design</li>
          </ul>
          <div className="ecommerce-project-links">
            {/* <a href={"https://weather-saran.netlify.app/"}> */}
              <button>  Ongoing</button>
            {/* </a> */}
            <GithubOutlined />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
