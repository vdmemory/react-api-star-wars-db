import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "./star-wars-logo.png";

export default function Header({ onSeviceChange }) {
  const routes = [
    { path: "/people/", name: "People" },
    { path: "/planets/", name: "Planets" },
    { path: "/starships/", name: "Starships" },
    { path: "/login", name: "Login" },
    { path: "/secret/", name: "Secret" }
  ];
  const navBar = routes.map(route => {
    return (
      <li key={route.path} className="item">
        <Link to={route.path} className="link">
          {route.name}
          <span />
          <span />
          <span />
          <span />
        </Link>
      </li>
    );
  });
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </h3>

      <ul className="list d-flex">{navBar}</ul>

      <div className="pulse_btn" onClick={onSeviceChange}>
        Change Service
      </div>
    </div>
  );
}

Header.defaultProps = {
  onServiceChange: () => {}
};
Header.propTypes = {
  onServiceChange: PropTypes.func
};
