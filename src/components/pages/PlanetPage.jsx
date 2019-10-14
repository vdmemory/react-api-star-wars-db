import React, { Component } from "react";
import { PlanetDetails, PlanetList } from "../sw-compnents";
import Row from "../row";

export default class PlanetPage extends Component {
  state = {
    selectedItem: 5
  };
  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        leftElem={<PlanetList onItemSelected={this.onItemSelected} />}
        rightElem={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
