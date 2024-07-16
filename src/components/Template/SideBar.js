import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Andrew Nesbett</h2>
        <p>
          <a href="mailto:anesbett@gmail.com">anesbett@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Andrew. I am a{" "}
        <a href="https://charleston.edu/">College of Charleston</a> graduate and a senior developer at{" "}
        <a href="https://www.capgemini.com/us-en/">Capgemini</a>. I enjoy learning new technologies and am actively learning JavaScript
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Andrew Nesbett <Link to="/">anesbett.github.io/</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
