import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "./star-wars-logo.png";

export default function Header({ onSeviceChange }) {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </h3>
      <ul className="list d-flex">
        <li className="item">
          <Link to="/people/" className="link">
            People
            <span />
            <span />
            <span />
            <span />
          </Link>
        </li>
        <li className="item">
          <Link to="/planets/" className="link">
            Planets
            <span />
            <span />
            <span />
            <span />
          </Link>
        </li>
        <li className="item">
          <Link to="/starships/" className="link">
            Starships
            <span />
            <span />
            <span />
            <span />
          </Link>
        </li>
      </ul>

      <div className="pulse_btn" onClick={onSeviceChange}>
        Change Service
      </div>
    </div>
  );
}
