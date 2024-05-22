import React from "react";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar-container">
        <section className="logo">
            <h>Saran</h>
        </section>
      <section>
        <ul className="navbar-ul">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;
