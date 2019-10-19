import React from "react";
import { StarshipList } from "../sw-compnents";
import { withRouter } from "react-router-dom";

function StarshipPage({ history }) {
  return (
    <StarshipList
      onItemSelected={id => {
        history.push(id);
      }}
    />
  );
}
export default withRouter(StarshipPage);
