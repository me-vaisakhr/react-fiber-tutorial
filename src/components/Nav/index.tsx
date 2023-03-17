import React, { useState } from "react";
import "./index.css";
const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(true);
  const navLinks = [
    {
      name: "Basic Example",
    },
    {
      name: "Intermediate",
    },
    {
      name: "Advanced",
    },
  ];
  return (
    <section
      className={`navigation_drawer ${
        isNavOpen ? "navigation_drawer_close" : ""
      }`}
    >
      <p className="logo">Vaisakh R Krishnan</p>
      <button
        className={`nav__controller ${
            isNavOpen ? "nav__controller_open" : ""
          }`}
        onClick={() => setNavOpen(!isNavOpen)}
      >
        <i className="fa-light fa-plus"></i>
      </button>
      <nav className="nav_bar">
        {navLinks.map((link) => (
          <li>{link.name}</li>
        ))}
      </nav>
      <span className="version">v0.0.1 beta</span>
    </section>
  );
};

export default Nav;
