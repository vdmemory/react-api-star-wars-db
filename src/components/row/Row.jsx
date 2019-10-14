import React from "react";

import "./row.css";

export default function Row({ leftElem, rightElem }) {
  return (
    <div className="row mb2">
      <div className="col-md-8">{leftElem}</div>
      <div className="col-md-4">{rightElem}</div>
    </div>
  );
}
