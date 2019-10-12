import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Header from "../header";

import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";

import ErrorBoundry from "../error-boundry";

// import ItemDetails, { Record } from "../item-details/ItemDetails";
// import ItemList from "../item-list";

// import Row from "../row";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllStarships
    } = this.swapiService;

    // const personDetails = (
    //   <ItemDetails itemId={11} getData={getPerson} getImage={getPersonImage}>
    //     <Record field="gender" label="Gender" />
    //     <Record field="height" label="Height" />
    //     <Record field="mass" label="Mass" />
    //     <Record field="birthYear" label="BirthYear" />
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={10}
    //     getData={getStarship}
    //     getImage={getStarshipImage}
    //   >
    //     <Record field="model" label="Model" />
    //     <Record field="manufacturer" label="Manufacturer" />
    //     <Record field="starshipClass" label="Starship Class" />
    //   </ItemDetails>
    // );

    // const personItem = (
    //   <ItemList onItemSelected={() => {}}>
    //     {({ name }) => <span>{name}</span>}
    //   </ItemList>
    // );
    // const starshipItem = (
    //   <ItemList onItemSelected={() => {}}>
    //     {({ name }) => <span>{name}</span>}
    //   </ItemList>
    // );

    return (
      <ErrorBoundry>
        <div>
          <Header />
          <RandomPlanet />
          <PeoplePage getPerson={getPerson} getPersonImage={getPersonImage} />
          {/* <Row leftElem={personDetails} rightElem={starshipDetails} /> */}
          {/* <Row leftElem={personItem} rightElem={starshipItem} /> */}
        </div>
      </ErrorBoundry>
    );
  }
}
