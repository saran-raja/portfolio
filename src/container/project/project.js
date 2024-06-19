import { GithubOutlined } from "@ant-design/icons";
import "./project.css";
import weather from "./weather-app.png";

function Project() {
  return (
    <div className="project-container">
      <section className="project-head">
        <h1>Projects</h1>
        <p>What I have done</p>{" "}
      </section>
      <div className="weather-app-container">
        <section className="weather-app">
          <img src={weather} alt="Weather App" className="weather-image" />
          <p className="weather-description">
            A real-time weather website built with React, displaying current
            conditions from external APIs with a responsive design.
          </p>
          <ul className="language-description">
            <li style={{ color: "#61DBFB" }}>#react</li>
            <li style={{ color: "#E34C26" }}>#html</li>
            <li style={{ color: "#F0DB4F" }}>#javascript</li>
            <li style={{ color: "#264de4" }}>#css</li>
            <li style={{ color: "#7C3AED" }}>#api</li>
          </ul>
          <div className="project-links">
            <a href={"https://weather-saran.netlify.app/"}>
              <button>Visit</button>
            </a>
            <GithubOutlined />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
