import { Button } from "antd";
import "./about.css";
function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <section className="about-content">
        <p>
          I am a Fullstack Developer who transitioned from Electrical and
          Electronics Engineering into software development. I create dynamic
          web applications that enhance user experience and backend
          functionality.
        </p>
      </section>
      <a
        href="/resume_html.pdf"
        target="_blank"
        // download="resume_html.pdf"
        className="download-btn"
      >
        <Button className="downloadcv-btn">Download CV</Button>
      </a>
    </div>
  );
}

export default About;
