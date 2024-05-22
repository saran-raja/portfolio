import React from "react";
import "./home.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import profile from "./saran-profile.jpg";

function Home() {
  return (
    <div className="home-container">
      <div>
        <section className="contact-icon">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/saran2653"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlined />
          </a>
        </section>
        <section className="text-content">
          <h1>Hello,</h1>
          <h2>
            I'm <span className="highlight">Saran</span>
          </h2>
          <h3>Full stack developer</h3>
          <p>
            "I'm a proficient web designer, deeply committed to crafting
            visually stunning and user-friendly websites."
          </p>
          <Button
            className="custom-button"
            onClick={() =>
              (window.location.href = "mailto:saran26053@gmail.com")
            }
            icon={<MailOutlined />}
          >
            Contact Me
          </Button>
        </section>
      </div>
      <image className="profile-container">
        <img src={profile} alt="profile" className="profile" />
      </image>
    </div>
  );
}

export default Home;
