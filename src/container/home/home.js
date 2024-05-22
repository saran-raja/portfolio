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
      <section className="contact-icon">
        <GithubOutlined />
        <LinkedinOutlined />
        <MailOutlined />
      </section>
      <img src={profile} alt="profile" className="profile" />
      <section className="text-content">
        <h1>Hello,</h1>
        <h2>
          I'm <span className="highlight">Saran</span>
        </h2>
        <h3>Full stack developer</h3>
        <p>
          "I'm a proficient web designer, deeply committed to crafting visually
          stunning and user-friendly websites."
        </p>
        <Button
          className="custom-button"
          onClick={() => (window.location.href = "mailto:saran26053@gmail.com")}
          icon={<MailOutlined />}
        >
          Contact Me
        </Button>
      </section>
    </div>
  );
}

export default Home;
