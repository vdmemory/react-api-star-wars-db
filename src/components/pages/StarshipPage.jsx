import React, { Component } from "react";
import { StarshipDetails, StarshipList } from "../sw-compnents";
import Row from "../row";

export default class StarshipPage extends Component {
  state = {
    selectedItem: 9
  };
  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        leftElem={<StarshipList onItemSelected={this.onItemSelected} />}
        rightElem={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
