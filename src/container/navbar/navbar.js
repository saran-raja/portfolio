import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {

  return (
    <div className="navbar-container">
      <section className="logo">
     
      <h>Saran</h>
    </section>
      <section>
        <ul className="navbar-ul">
          <Link
            activeClass="active"
            to="test1"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
          >
            <li>Home</li>
          </Link>
          <Link
            activeClass="active"
            to="test2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li>About Me</li>
          </Link>
          <Link
            activeClass="active"
            to="test3"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
          >
            <li>Skills</li>
          </Link>
          <Link
            activeClass="active"
            to="test4"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
          >
            <li>Projects</li>
          </Link>
          <Link
            activeClass="active"
            to="test5"
            smooth={true}
            offset={0}
            spy={true}
            duration={500}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;
