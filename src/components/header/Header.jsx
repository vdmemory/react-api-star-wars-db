import React from "react";

import "./header.css";

export default function Header({ onSeviceChange }) {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">Star DB</a>
      </h3>
      <ul className="list d-flex">
        <li className="item">
          <a href="#" className="link">
            People
            <span />
            <span />
            <span />
            <span />
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Planets
            <span />
            <span />
            <span />
            <span />
          </a>
        </li>
        <li className="item">
          <a href="#" className="link">
            Starships
            <span />
            <span />
            <span />
            <span />
          </a>
        </li>
      </ul>

      <div className="pulse_btn" onClick={onSeviceChange}>
        Change Service
      </div>
    </div>
  );
}
