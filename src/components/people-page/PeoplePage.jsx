import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details/ItemDetails";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

// import Record from "../record";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedItem: 11
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={this.swapiService.getAllPeople}
        >
          {i => `${i.name} (${i.birthYear})`}
        </ItemList>
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={this.state.selectedItem}
          getData={this.props.getPerson}
          getImage={this.props.getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="height" label="Height" />
          <Record field="mass" label="Mass" />
          <Record field="birthYear" label="BirthYear" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row leftElem={itemList} rightElem={itemDetails} />;
  }
}
