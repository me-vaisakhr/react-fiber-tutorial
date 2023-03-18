import React, { FC, useState } from "react";
import { routePaths } from "../../Router/RoutePaths";
import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav: FC<{}> = () => {
  const [isNavOpen, setNavOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const currentNav = location.pathname;

  return (
    <section
      className={`navigation_drawer ${
        isNavOpen ? "navigation_drawer_close" : ""
      }`}
    >
      <p className="logo">Vaisakh R Krishnan</p>
      <button
        className={`nav__controller ${isNavOpen ? "nav__controller_open" : ""}`}
        onClick={() => setNavOpen(!isNavOpen)}
      ></button>
      <nav className="nav_bar">
        {routePaths.map((nav, index) => (
          <li
            className={currentNav === nav.path ? "navlink__active" : ""}
            key={`nav-link-${index}`}
            onClick={() => navigate(nav.path)}
          >
            {nav.name}
          </li>
        ))}
      </nav>
      <span className="version">v0.0.1 beta</span>
    </section>
  );
};

export default Nav;
