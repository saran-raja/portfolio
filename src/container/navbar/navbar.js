import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
// import { MenuOutlined } from "@ant-design/icons";
// import { useState } from 'react';
// import {Drawer, Space } from 'antd';

function Navbar() {
  // const [open, setOpen] = useState(false);
  // const [size, setSize] = useState();
  // const showDefaultDrawer = () => {
  //   setSize('default');
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };
  return (
    <div className="navbar-container">
      <section className="logo">
      {/* <Space>
      <MenuOutlined className="menu-drawer" type="primary" onClick={showDefaultDrawer} />
        
      </Space>
      <Drawer
        title={'Menu'}
        placement="left"
        size={size}
        onClose={onClose}
        open={open}
        
      >
        <p>Home</p>
        <p>About Me</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>contact</p>
      </Drawer> */}
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
