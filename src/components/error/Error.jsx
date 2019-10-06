import React from "react";

import "./error.css";
import icon from "./death-star.png";

export default function Error() {
  return (
    <div className="error">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent to fix it)</span>
    </div>
  );
}
